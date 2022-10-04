import { Product } from "../models/Product";
import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    static TABLE_USERS = "Labe_Users"

    constructor(){
        super()
    }

    public async getAllUsers(){
        return await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()
    }

    public async createUser(user: User){
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }
}