const Employee = require('../lib/Employee');

test("render new employee (object)", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});