import {Account,Client,ID,Databases,Storage} from "appwrite";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("64c21c8b2f8ee7df9ca1")

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export {client,account,databases,storage,ID};
