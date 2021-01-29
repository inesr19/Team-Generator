const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Sets employee role string", () => {
  const valueRole = 'Manager';
  const employee = new Manager("Ines", 1, "awesome@gmail.com", valueRole);
  expect(employee.getRole()).toBe(valueRole);
});

test("Sets the manager's office number", () => {
  const valueNumber = 1;
  const employee = new Manager("Ines", 1, "awesome@gmail.com", valueNumber);
  expect(employee.officeNumber).toBe(valueNumber);
});

