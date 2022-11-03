import { ExecutedQuery } from "@planetscale/database/dist"

import { connection } from ".."
import { userModel } from "../model/user"

export const userRegister =async (req: Request) => {
        
        const {email, username, password}: any = await req.json()
        
        const query: ExecutedQuery = await connection.execute('Select * from users')

        const insertUser: ExecutedQuery = await connection.execute('Insert into users (email, username, password) values (?,?,?)',[`${email}`,`${username}`,`${password}`])
        
        return new Response(JSON.stringify({
            insertUser
        }), {
            headers: { 'content-type': 'application/json' }
        });
}