import csvParser from "csv-parser";
import mongoose, { connect } from "mongoose";
import * as fs from "fs";
import { ITransaction } from "./type";
import { Transaction } from "./transaction.model";
import { RequestTransformer } from "./helper";
import * as dotenv from "dotenv";

dotenv.config();

const results: any[] = [];

async function run(transactions: ITransaction[]) {
  try {
    mongoose.set("strictQuery", false);
    await connect(process.env.DB_CONNECTION_STRING as string);

    await Transaction.insertMany(transactions);

    console.log("inserted");

    mongoose.connection.close();
  } catch (error) {
    console.log("a");
    fs.writeFileSync("./error.log", JSON.stringify(error), { flag: "w" });
    process.exit(0);
  }
}

fs.createReadStream("./transactions.csv")
  .pipe(csvParser())
  .on("data", (data) => results.push(RequestTransformer.toCamelCase(data)))
  .on("end", () => {
    run(results);
  });
