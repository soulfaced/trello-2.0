import { databases, storage } from '@/appwrite';
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
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
    image:null,
    setImage:(image:File|null)=>set({image}),

    newTaskType:"TODO",
    setNewTaskType:(columnId:TypedColumn)=>set({newTaskType:columnId})

}))