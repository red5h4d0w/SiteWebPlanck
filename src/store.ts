

import type { User } from "@auth0/auth0-spa-js";
import {writable, derived, type Writable, type Readable} from "svelte/store"
import type { Task } from "./types";


export const isAuthenticated = writable(false);

export const user: Writable<User|undefined> = writable({});

export const popupOpen = writable(false);

export const error = writable();


export const tasks: Writable<Task[]> = writable([]);


export const user_tasks: Readable<Task[]> = derived([tasks, user], ([$tasks, $user]) => {
    let logged_in_user_tasks = [];

    if ($user && $user.email) {

        logged_in_user_tasks = $tasks.filter((task) => task?.user?.email === $user.email);
    }
})