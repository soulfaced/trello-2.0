import { Document } from './node_modules/appwrite/src/models';
interface Board {
    columns :Map <TypedColumn,Column>
}
type TypedColumn = "TODO"|"inprogress"|"done"

interface Column{
    id:TypedColumn,
    todos:Todo[]
}

interface Todo extends Models.Document{
    $id:string,
    $createdAt:string,
    title:string,
    status:string,
    image?:Image,
}

interface Image{
    bucketId:string,
    fileId:string,
}