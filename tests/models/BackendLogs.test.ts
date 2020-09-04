import { api } from "../index.test";

test("toBeDefined Logs", async () => {
    const ans = api.sequelize.isDefined("BackendLogs");
    expect(ans).toBe(true);
});