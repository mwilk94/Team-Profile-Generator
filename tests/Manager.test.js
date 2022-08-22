const Manager = require('../lib/Manager.js');
const manager = new Manager('Ash', 'ash111', 'merkisha94@gmail.com', 1234567890);

describe('Manager', () => {
  describe('constructor', () => {
    it('should create an Manager object', () => {
      expect(manager.name).toEqual('Ash');
      expect(manager.id).toEqual('ash111');
      expect(manager.email).toEqual('merkisha94@gmail.com');
      expect(manager.officeNumber).toEqual(1234567890);
    });
  });

  describe('getOfficeNumber', () => {
    it('should get officeNumber property', () => {
      expect(manager.getOfficeNumber()).toEqual(1234567890);
    });
  });

  describe('getRole', () => {
    it('should get Manager role', () => {
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});