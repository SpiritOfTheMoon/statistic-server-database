import { api } from "../index.test";

test("toBeDefined System", async () => {
    const ans = api.sequelize.isDefined("System");
    expect(ans).toBe(true);
});