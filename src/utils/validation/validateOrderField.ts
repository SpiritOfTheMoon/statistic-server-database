import { Model } from "sequelize";

export async function validateOrderField(
    orderField: string, model: typeof Model,
): Promise<boolean> {

    const fields = Object.keys(model.rawAttributes).map((key: string) => {

        const field = model.rawAttributes[key].field;
        if (typeof field === "undefined") {

            return key.toLowerCase();

        } else {

            return field.toLowerCase();

        }

    });
    if (fields.includes(orderField)) {

        return true;

    }
    const error = new Error("Нет такого поля для сортировки");
    throw error;

}
