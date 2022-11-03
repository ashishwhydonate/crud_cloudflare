import { ExecutedQuery } from "@planetscale/database/dist"

import { connection } from ".."
import { userModel } from "../model/user"

export const userDelete =async (req: Request) => {
        
        const {username, password}: any = await req.json()
        
        const query: ExecutedQuery = await connection.execute('Delete from users where username=? and password=?',[`${username}`,`${password}`])
        console.log("Delete",query)

        //const search: ExecutedQuery = await connection.execute('Select * from users where username=?',[`${username}`])

        //const insertUser: ExecutedQuery = await connection.execute('Insert into users (email, username, password) values (?,?,?)',[`${email}`,`${username}`,`${password}`])
        
        return new Response(JSON.stringify({
            query
        }), {
            headers: { 'content-type': 'application/json' }
        });
}