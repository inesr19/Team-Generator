const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Sets the manager's office number", () => {
  const value = 1;
  const employee = new Manager("Ines", 1, "awesome@gmail.com", value);
  expect(employee.officeNumber).toBe(value);
});