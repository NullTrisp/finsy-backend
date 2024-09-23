import { Firestore } from "@google-cloud/firestore";
import { account } from "./types";

const db = new Firestore({
    databaseId: "accounts",
});

const getDoc = (userId: string) => db.collection(userId);

export const create = async (userId: string, { name, currency }: account) => {
    const writeResponse = await getDoc(userId).add({ name, currency });

    return writeResponse.id;
};

export const readAll = async (userId: string) => {
    const readResponse = await getDoc(userId).get();
    const records: { id: string }[] = [];
    readResponse.forEach((record) => {
        records.push({
            id: record.id,
            ...record.data(),
        });
    });

    return records;
};

export const update = async (userId: string, recordId: string, { name, currency }: account) => {
    const readResponse = getDoc(userId).doc(recordId);

    await readResponse.update({ name, currency });
};

export const deletion = async (userId: string, recordId: string) => {
    const readResponse = getDoc(userId).doc(recordId);

    await readResponse.delete();
};

export default db;
