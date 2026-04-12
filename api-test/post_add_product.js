import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("API Post Add a Product", () => {
  it("Verify API Successfully Add a Product", async () => {
    const randomName = faker.internet.username();
    console.log("random name : ", randomName);

    const response = await axios.post("https://dummyjson.com/products/add", {
      title: randomName,
    });
    console.log("Response : ", response.data);

    expect(response.status).to.eql(201);
    expect(response.data.title).to.eql(randomName);
  });
});
