import { ExecutedQuery } from "@planetscale/database/dist"
import { error } from "console"
import { connection } from ".."
import { userModel } from "../model/user"

export const userRegister =async (req: Request) => {
        const form_data: any = await req.formData()
        const username_req = form_data.get('username')
        const email_req = form_data.get('email')
        const password_req = form_data.get('password')

        const checkEmail: ExecutedQuery = await connection.execute('Select email form usres where email =?', [`${email_req}`])

        if (checkEmail['size'] != 0) throw error

        //const checkUsername = await connection.execute('Select username form usres where username=?', [`${username)`])

        const insertUser: ExecutedQuery = await connection.execute('Insert into usres (email, username, password) values (?,?,?)',[`${email_req}`,`${username_req}`,`${password_req}`])
        const insertId = insertUser['insertId']
        const response: ExecutedQuery = await connection.execute('`SELECT usres.id, usres.username, usres.email form usres where email=?`',[`${email_req}`])
    
        const userDataRows: Array<userModel> = response['rows']
        const {id, username, email, password} : userModel = userDataRows[0]


}