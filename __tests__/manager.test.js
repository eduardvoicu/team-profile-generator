const manager = require("../lib/manager");
const employee = require("../lib/employee");
const { test, expect } = require("@jest/globals");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new manager("Coffee", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return 'Manager'", () => {
    const testValue = "manager";
    const e = new manager("Coffee", 1, "test@test.com", 100, testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 1000000;
    const e = new manager("Coffee", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

