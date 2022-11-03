import { ExecutedQuery } from "@planetscale/database/dist"

import { connection } from ".."
import { userModel } from "../model/user"

export const userEmail =async (req: Request) => {
        
        const {username, password, email}: any = await req.json()
        
        //const query: ExecutedQuery = await connection.execute('Select * from users where username=? and password=?',[`${username}`,`${password}`])

        const updateEmail: ExecutedQuery = await connection.execute('Update users set email=? where username=? and password=?',[`${email}`,`${username}`,`${password}`])

        const changes: ExecutedQuery = await connection.execute('Select * from users where email =?',[`${email}`])
        
        return new Response(JSON.stringify({
            data: changes['rows']
        }), {
            headers: { 'content-type': 'application/json' }
        });
}