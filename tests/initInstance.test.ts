import { Sequelize, Options } from "sequelize";
import { initInstance } from "../src/initInstance";

test ("initInstance", () => {

    const options: Options = {
        database: "Statistic_UMK",
        username: "sa",
        host: "10.1.16.17",
        dialect: "mssql",
        password: "1qazZAQ!",
        logging: (sql: string, timing?: number) => {
            console.log(`${sql}, benchmark: ${timing}`)
        },
        logQueryParameters: true,
    };
    const localApi = initInstance(options);
    expect (localApi.sequelize).toBeInstanceOf(Sequelize);

});


