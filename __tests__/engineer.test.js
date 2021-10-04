const { expect } = require("@jest/globals");
const { test } = require("jest-circus");
const engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubAccount";
    const e = new engineer("Coffee", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});
