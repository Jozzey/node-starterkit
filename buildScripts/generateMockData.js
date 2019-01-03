/*  This script generates mock data foor local development.
    This way you don't  have to point to ann actual  API,
    but you can enjoy realistic, but randomized data,
    and rapid page loads due to local, static data.

    Since 0.5.x of schema-faker all external generators (chance, faker, etc.) are not built-in, so you need to register as per
    the line "jsf.extend("faker", () => require("faker"));"
*/

/* eslint-disable no-console */



import jsf from  "json-schema-faker";
import {schema} from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

jsf.extend("faker", () => require("faker"));
const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
