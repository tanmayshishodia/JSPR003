const assert = require("assert").strict;
const luhn = require("../index.js");

describe("luhn", function() {
  describe("#validate()", function() {
    it("should accept valid Visa test number", function() {
      assert.ok(luhn.validate("4012-8888-8888-1881"));
    });
    it("should accept valid MasterCard test number", function() {
      assert.ok(luhn.validate("5105-1051-0510-5100"));
    });
    it("should accept valid Amex test number", function() {
      assert.ok(luhn.validate("3714-496353-98431"));
    });
    it("should reject invalid numbers", function() {
      assert.equal(luhn.validate("1234-5678-9101-2131"), false);
    });
  });
});