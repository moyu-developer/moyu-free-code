import { user as UserModel } from "@prisma/client";

export class AuthResponse {
    token: string;
    user: UserModel
}