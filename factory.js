import { faker } from "@faker-js/faker";
import path from "path";
import fs from "fs";

const array = []

async function generatePartners() {
  for (let index = 0; index < 20; index++) {
    const partner = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      birthDate: faker.date.birthdate()
    }
    array.push(partner)
  }
}

async function saveData() {
  const data = {
    partners: array
  }
  fs.writeFileSync(path.resolve("partners/db.json"), JSON.stringify(data))
}

Promise.all([
  await generatePartners(),
  await saveData()
])


