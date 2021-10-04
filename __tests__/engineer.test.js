const { expect } = require("@jest/globals");
const { test } = require("jest-circus");
const engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubAccount";
    const e = new engineer("Coffee", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
    const testValue = "engineer";
    const e = new engineer("Coffee", 1, "test@test.com", "GitHubAccount");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
    const testValue = "GitHubAccount";
    const e = new engineer("Coffee", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});