import { API } from "../src/types/API";
import { Options } from "sequelize";
import { initInstance } from "../src/initInstance";

export let api: API;

beforeAll(async () => {

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
    api = initInstance(options);
    await api.sequelize.authenticate();


});

test("connection", async () => {

    try {

        await api.sequelize.authenticate();
        console.log("connection is established");

    } catch (err) {

        const error = new Error(`connection test ${err}`);
        throw error;

    }

    expect(true).toBe(true);

});

afterAll(async () => {

    await api.sequelize.close();


})