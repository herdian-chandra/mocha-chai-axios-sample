import axios from "axios";
import { expect } from "chai";

describe("API Delete a Product", () => {
  it("Verify API Successfully Delete a Product", async () => {
    const response = await axios.delete("https://dummyjson.com/products/100");
    console.log("Response : ", response.data);

    expect(response.status).to.eql(200);
  });
});
