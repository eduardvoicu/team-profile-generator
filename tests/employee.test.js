const { expect } = require("@jest/globals");
const { test } = require("jest-circus");
const employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Eduard";
    const e = new employee(name);
    expect(e.name).toBe(name);
});