import { databases } from "@/appwrite";
import { Column, TypedColumn, Todo, Image, Board } from "@/typings";

export const getTodosGroupedByColumn = async (): Promise<Board> => {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!
    );

    const todos = response.documents;

    const columns = todos.reduce((acc: { get: (arg0: any) => any; set: (arg0: any, arg1: { id: any; todos: never[]; }) => void; }, todo: { status: any; $id: any; $createdAt: any; title: any; image: string; }) => {
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

    const columnTypes: TypedColumn[] = ["TODO", "inprogress", "done"];

    for (const columnType of columnTypes) {
      if (!columns.get(columnType)) {
        columns.set(columnType, {
          id: columnType,
          todos: []
        });
      }
    }

    const sortedColumns = new Map<TypedColumn, Column>(
      Array.from<[TypedColumn, Column]>(columns.entries()).sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );
    

    const board: Board = {
      columns: sortedColumns
    };

    return board;

};
