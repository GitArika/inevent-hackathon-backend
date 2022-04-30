import { DataSource } from "typeorm";
import { User } from "../entitys/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "db-inevent-hackathon.codpu6zdd8lb.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "adminadmin",
    database: "defaultdb",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});