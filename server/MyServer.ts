import { PrismaClient } from "../prisma/myclient";
import { copyFileSync } from "fs";
import {join} from "path";

try {
    copyFileSync(join(__dirname, "../prisma/myclient/schema.prisma"), "./schema.prisma");
}catch (e){

}

const client = new PrismaClient();

async function main() {

    const users = await client.user.findMany();

    console.log(users);
}
main()


    //https://github.com/wmgtech/carpathia-data/