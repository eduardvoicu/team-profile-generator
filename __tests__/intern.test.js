const { test, expect } = require("@jest/globals");
const intern = require("../lib/intern");

test("Can set school via constructor", () => {
    const testValue = "UIC";
    const e = new intern("Coffee", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
    const testValue = "intern";
    const e = new intern("Coffee", 1, "test@test.com", "UIC");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UIC";
    const e = new intern("Coffee", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});