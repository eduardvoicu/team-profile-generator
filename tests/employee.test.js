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

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new employee("Coffee", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new employee("Coffee", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Eduard";
    const e = new employee("Coffee", testValue);
    expect(e.getName()).toBe(testValue);
});



