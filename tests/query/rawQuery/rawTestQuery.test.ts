import { api } from "../../index.test";

test("rawTestQuery", async () => {

    const dataValues = await api.queries.rawTestQuery();
    expect(dataValues).toEqual(2);

});