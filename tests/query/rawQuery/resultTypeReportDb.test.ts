import { api } from "../../index.test"
test("resultTypeReportDb test", async () => {
    const systemId = "E1E05BFC-7E2D-475A-BB58-0E97679BCDE5";
    const fromDate = new Date();
    const year = fromDate.getFullYear();
    fromDate.setFullYear(year - 1);
    const toDate = new Date();
    const results = await api.queries.resultTypeReportDb(
        [systemId],
        fromDate,
        toDate,
    );
    expect(results).toBeInstanceOf(Array);
})