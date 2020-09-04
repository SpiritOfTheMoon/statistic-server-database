import { api } from "../../../index.test";
import { BackendLogsCreationAttibutesType } from "../../../../src/models";

test.skip("createLogs", async () => {
    const values: BackendLogsCreationAttibutesType[] = [{
        date: new Date(),
        login: "65msn",
        query: "test",
        perfomance: 234.113,
        args: "q2123123",
        queryResult: "Error",
        systemId: "1",
    }, {
        date: new Date(),
        login: "65msn",
        query: "test",
        perfomance: 234.113,
        systemId: "1",
        queryResult: "Data",
    }]

    const dataValues = await api.queries.createBackendLogs(values);
    const asyncedDeleted = dataValues.map(async (dataValue) => {

        const gettedDataValue = dataValue.get();
        expect(gettedDataValue.id).not.toBeUndefined();
        expect(gettedDataValue.login).toEqual("65msn");
        expect(gettedDataValue.perfomance).toEqual(234.113);
        if (typeof gettedDataValue.args !== "undefined" && gettedDataValue.args !== null) {

            expect(gettedDataValue.args).toEqual("q2123123");

        }

        await dataValue.destroy({force: true});
        await dataValue.save();

    });
    await Promise.all(asyncedDeleted);

});