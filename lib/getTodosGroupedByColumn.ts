import { databases } from "@/appwrite";
import { Column, TypedColumn, Todo, Image } from "@/typings";

export const getTodosGroupedByColumn = async () => {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!
    );

    const todos = response.documents; // Use 'documents' instead of 'Documents'

    const columns = todos.reduce((acc, todo) => {
      if (!acc.get(todo.status)) {
        acc.set(todo.status, {
          id: todo.status,
          todos: []
        });
      }

      acc.get(todo.status)!.todos.push({
        $id: todo.$id,
        $createdAt: todo.$createdAt,
        title: todo.title,
        status: todo.status,
        ...(todo.image && { image: JSON.parse(todo.image) })
      });

      return acc;
    }, new Map<TypedColumn, Column>());


    console.log(columns);
    const columnTypes : TypedColumn[]=["TODO","inprogress","done"];
    for (const columnType of columnTypes){
        if(!columns.get(columnType)){
            columns.set(columnType,{
                id:columnType,
                todos:[],
            });
        }
    }
    console.log(columns);


  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};
