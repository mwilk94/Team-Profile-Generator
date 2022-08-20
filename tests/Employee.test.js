const Employee = require('../lib/Employee.js');
const employee = new Employee('Merkisha', 'mwilk94', 'merkisha94@gmail.com');

describe('Employee', () => {
  describe('constructor', () => {
    it('create an Employee object', () => {
      expect(employee.name).toEqual('Merkisha');
      expect(employee.id).toEqual('mwilk94');
      expect(employee.email).toEqual('merkisha94@gmail.com');
    });
  });

  describe('getName', () => {
    it('retrieves employee name', () => {
      expect(employee.getName()).toEqual('Merkisha');
    });
  });

  describe('getId', () => {
    it('retrieves employee id', () => {
      expect(employee.getId()).toEqual('mwilk94');
    });
  });

  describe('getEmail', () => {
    it('retrieves employee email', () => {
      expect(employee.getEmail()).toEqual('merkisha94@gmail.com');
    });
  });

  describe('getRole', () => {
    it('retrieves employee role', () => {
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});