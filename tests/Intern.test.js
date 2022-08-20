const Intern = require('../lib/Intern.js');
const intern = new Intern('Merk', 'merk111', 'merkisha94@gmail.com', 'Polk State Collegiate');

describe('Intern', () => {
  describe('constructor', () => {
    it('should create an Intern object', () => {
      expect(intern.name).toEqual('Merk');
      expect(intern.id).toEqual('merk111');
      expect(intern.email).toEqual('merkisha94@gmail.com');
      expect(intern.school).toEqual('Polk State Collegiate');
    });
  });

  describe('getSchool', () => {
    it('should get school information', () => {
      expect(intern.getSchool()).toEqual('Polk State Collegiate');
    });
  });

  describe('getRole', () => {
    it('should get Manager role', () => {
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});