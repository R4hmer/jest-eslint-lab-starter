const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("Utility Functions", () => {

  describe("capitalizeWords", () => {
    test("capitalizes each word in a normal string", () => {
      expect(capitalizeWords("hello world")).toBe("Hello World");
      expect(capitalizeWords("this is a test")).toBe("This Is A Test");
    });

    test("works with empty string", () => {
      expect(capitalizeWords("")).toBe("");
    });

    test("works with single-word strings", () => {
      expect(capitalizeWords("javascript")).toBe("Javascript");
    });

    test("works with special characters", () => {
      expect(capitalizeWords("hello-world")).toBe("Hello-World");
      expect(capitalizeWords("good_morning")).toBe("Good_Morning");
    });
  });

  describe("filterActiveUsers", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
      { name: "Charlie", isActive: true }
    ];

    test("returns only active users", () => {
      expect(filterActiveUsers(users)).toEqual([
        { name: "Alice", isActive: true },
        { name: "Charlie", isActive: true }
      ]);
    });

    test("returns empty array if no active users", () => {
      const allInactive = [
        { name: "Dan", isActive: false },
        { name: "Eve", isActive: false }
      ];
      expect(filterActiveUsers(allInactive)).toEqual([]);
    });

    test("returns empty array if input is empty", () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  describe("logAction", () => {
    test("generates a log string for valid inputs", () => {
      const log = logAction("login", "Alice");
      expect(log).toMatch(/User Alice performed login at .+/);
    });

    test("handles empty strings as inputs", () => {
      const log = logAction("", "");
      expect(log).toMatch(/User  performed  at .+/);
    });

    test("handles missing inputs", () => {
      const log = logAction();
      expect(log).toMatch(/User undefined performed undefined at .+/);
    });
  });

});


