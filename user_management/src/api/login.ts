import { ExecutedQuery } from "@planetscale/database/dist"

import { connection } from ".."
import { userModel } from "../model/user"

export const userLogin =async (req: Request) => {
        
        const {username, password}: any = await req.json()
        
        const query: ExecutedQuery = await connection.execute('Select * from users where username=? and password=?',[`${username}`,`${password}`])

        //const insertUser: ExecutedQuery = await connection.execute('Insert into users (email, username, password) values (?,?,?)',[`${email}`,`${username}`,`${password}`])
        
        return new Response(JSON.stringify({
            data: query['rows']
        }), {
            headers: { 'content-type': 'application/json' }
        });
}