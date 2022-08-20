const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Keisha', 'keisha111', 'merkisha94@gmail.com', 'mwilk94');

describe('Engineer', () => {
  describe('constructor', () => {
    it('should create an Engineer object', () => {
      expect(engineer.name).toEqual('Keisha');
      expect(engineer.id).toEqual('keisha111');
      expect(engineer.email).toEqual('merkisha94@gmail.com');
      expect(engineer.github).toEqual('mwilk94');
    });
  });

  describe('getGithub', () => {
    it('should get github information', () => {
      expect(engineer.getGithub()).toEqual('mwilk94');
    });
  });

  describe('getRole', () => {
    it('should get Engineer role', () => {
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});

