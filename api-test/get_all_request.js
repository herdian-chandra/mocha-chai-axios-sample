import axios from "axios";
import { expect } from "chai";

describe("API Get All of Products", () => {
  it("Verify API Return All of Products", async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log("Response : ", response.data);

    expect(response.status).to.eql(200);
  });
});
