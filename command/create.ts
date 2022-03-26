import * as fs from "node:fs";
import { execSync } from "node:child_process";
import { exit } from "node:process";
import { question } from "readline-sync";

export const create = (x: string) => {
    const packages = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (!x[1]) {
        console.log("\x1b[31m[monra]\x1b[0m  Directory name is undefined (use: monra create <directory-name>)");
        exit()
    } else {
       if (x[2] == "-ts" || x[2] == "--typescript") {
        let name = question('\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (@'+monra?.name+'/'+x[1]+') ');
        let v = question('\n\x1b[2m[1/4]\x1b[0m \x1b[1mVerison:\x1b[0m (1.0.0) ');
        if (!name) name = "@"+monra?.name+"/"+x[1];
        if (!v) v = "1.0.0";
        fs.mkdirSync(monra?.directory+"/"+x[1]);
        fs.mkdirSync(monra?.directory+"/"+x[1]+"/src");
        fs.appendFileSync(monra?.directory+"/"+x[1]+"/src/index.ts", "")
        fs.appendFileSync(monra?.directory+"/"+x[1]+"/package.json", 
        JSON.stringify({
            name: name.toLowerCase(),
            main: "src/index.js",
            verison: v
        }))
        if (monra?.client == "yarn") {
            execSync("yarn add "+name)
        }

        if (monra?.client == "npm") {
            execSync("npm i "+name)
        }

        console.log("\n\x1b[32m[monra]\x1b[0m Create package!");
       } else {
        let name = question('\x1b[2m[1/2]\x1b[0m \x1b[1mPackage Name:\x1b[0m (@'+monra?.name+'/'+x[1]+') ');
        let v = question('\n\x1b[2m[2/2]\x1b[0m \x1b[1mVerison:\x1b[0m (1.0.0) ');
        if (!name) name = "@"+monra?.name+"/"+x[1];
        if (!v) v = "1.0.0";
        fs.mkdirSync(monra?.directory+"/"+x[1]);
        fs.mkdirSync(monra?.directory+"/"+x[1]+"/src");
        fs.appendFileSync(monra?.directory+"/"+x[1]+"/src/index.js", "")
        fs.appendFileSync(monra?.directory+"/"+x[1]+"/package.json", 
        JSON.stringify({
            name: name.toLowerCase(),
            main: "src/index.js",
            verison: v
        }))
        if (monra?.client == "yarn") {
            execSync("yarn add "+name)
        }

        if (monra?.client == "npm") {
            execSync("npm i "+name)
        }

        console.log("\n\x1b[32m[monra]\x1b[0m Create package!");
       }
    }
};