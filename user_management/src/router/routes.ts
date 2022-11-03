import { Router } from "itty-router";
import { userDelete } from "../api/deleteUser";
import { userLogin } from "../api/login";
import { userRegister } from "../api/registration";
import { userEmail } from "../api/updateEmail";

export function account_routes(router: Router<Request, {}>) {

    return (
        router
            .post('/account/user/register', userRegister)
            .post('/account/user/login', userLogin)
            .patch('/account/user/update', userEmail)
            .post('account/user/delete', userDelete)

    )
}