import { databases } from "@/appwrite"

export const getTodosGroupedByColumn = async()=>{
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_COLLECTION_ID!
    );
    console.log(data);
}