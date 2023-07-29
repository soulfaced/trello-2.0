import { ID, databases, storage } from '@/appwrite';
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import uploadImage from '@/lib/uploadImage';
import { Board, Column, Todo, TypedColumn } from '@/typings';
import {create} from 'zustand';

interface BoardState{
    board:Board;
    getBoard:()=>void;
    setBoardState:(board:Board)=>void;
    updateTodoInDB:(todo:Todo,columnId:TypedColumn)=>void;

    searchString:string;
    setSearchString:(searchString: string) => void;

    deleteTask:(taskIndex:number,todoId:Todo,id:TypedColumn)=>void;

    newTaskInput:string;
    setNewTaskInput:(input:string) => void;

    newTaskType:TypedColumn;
    setNewTaskType:(columnId:TypedColumn) => void;

    image:File|null;
    setImage:(image:File|null) => void;

    addTask:(todo:string,columnId:TypedColumn,image?:File|null) => void;
}

export const useBoardStore = create<BoardState> ((set,get)=>({
    board:{
        columns: new Map<TypedColumn,Column>()
    },

    searchString:"",
    newTaskInput:"",
    setSearchString:(searchString) =>set({searchString}),

    getBoard: async()=>{
        const board = await getTodosGroupedByColumn();
        set({board});
    },

    setBoardState:(board)=>set({board}),

    deleteTask: async(taskIndex:number,todo:Todo,id:TypedColumn)=>{
        const newColumns = new Map(get().board.columns);

        newColumns.get(id)?.todos.splice(taskIndex,1);
        set({board:{columns:newColumns}});

        if(todo.image){
            await storage.deleteFile(todo.image.bucketId,todo.image.fileId);
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ID!,
            todo.$id
        );
    },

    setNewTaskInput:((input:string)=>set({newTaskInput:input})),

    updateTodoInDB: async(todo,columnId)=>{
        await databases.updateDocument(
            // NEXT_PUBLIC_PROJECTID 
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ID!,
            todo.$id,
            {
                title:todo.title,
                status:columnId,
            }
        )
    },
    addTask:async(todo:string,columnId:TypedColumn,image?:File|null)=>{
        let file : {
            bucketId:string,
            fileId:string,
        } |undefined;

        if (image){
            const fileUpLoaded = await uploadImage(image);
            if(fileUpLoaded){
                file={
                    bucketId:fileUpLoaded.bucketId,
                    fileId:fileUpLoaded.$id,
                };
            }
        }

       const{$id}= await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ID!,
            ID.unique(),
            {
                title:todo,
                status:columnId,
                ...(file && {image:JSON.stringify(file)}),
            }
        );

        set({newTaskInput:"todo"});

        set((state)=>{

            const newColumns = new Map(state.board.columns);

            const newTodo:Todo={
                $id,
                $createdAt:new Date().toISOString(),
                title:todo,
                status:columnId,
                ...(file && {image:file}),
            };

            const column = newColumns.get(columnId);

            if(!column){
                newColumns.set(columnId,{
                    id:columnId,
                    todos:[newTodo],
                });
            } else{
                column.todos.push(newTodo);
            }

            return{
                board:{
                    columns:newColumns,
                }
            }

            
        })
    },
    image:null,
    setImage:(image:File|null)=>set({image}),

    newTaskType:"TODO",
    setNewTaskType:(columnId:TypedColumn)=>set({newTaskType:columnId})

}))