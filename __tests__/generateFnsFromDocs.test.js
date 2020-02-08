const testDocs = require('./testDocs.js');
const generateFnsFromDocs = require('../generateFnsFromDocs');

describe('generateFnsFromDocs', () => {
  describe('fn signature', () => {
    it('should throw with a non array input', () => {
      expect(generateFnsFromDocs).toThrow('docs array is required');
    });
    it('should take an array and return an object', () => {
      expect(generateFnsFromDocs([])).toEqual({});
    });
  })
})