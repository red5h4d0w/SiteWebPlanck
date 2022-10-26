import type { User } from "@auth0/auth0-spa-js"

declare type Task = {
    id?: string,
    description?: string,
    completed?: boolean;
    user?: User
}