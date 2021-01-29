const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("Sets employee role as 'Engineer", () => {
    const valueRole = 'Engineer';
    const employee = new Engineer("Ines", 1, "awesome@gmail.com", valueRole);
  expect(employee.getRole()).toBe(valueRole);
});

test('Generates github username', () => {
    const valueUsername = 'inesr19'
    const employee = new Engineer("Ines", 1, "awesome@gmail.com", valueUsername);
    expect(employee.getGithub()).toBe(valueUsername);
});