const manager = require("../lib/manager");
const employee = require("../lib/employee");
const { test } = require("jest-circus");
const { expect } = require("@jest/globals");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new manager("Coffee", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
