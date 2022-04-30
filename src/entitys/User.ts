import { Entity } from "typeorm"

@Entity()
export class  User {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
    createdAt: Date;
}
