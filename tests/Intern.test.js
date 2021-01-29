const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("Sets employee role as 'Intern", () => {
    const valueRole = 'Intern';
    const employee = new Intern("Ines", 1, "awesome@gmail.com", valueRole);
  expect(employee.getRole()).toBe(valueRole);
});

test('Return school name (string)', () => {
    const valueSchool = 'UofO'
    const employee = new Intern("Ines", 1, "awesome@gmail.com", valueSchool);
  expect(employee.getSchool()).toBe(valueSchool);
});