'use strict';

const fp = require('../lib/fp.js');

describe('fp.test.js', () => {
  describe('tests for fp.map', () => {
    test('fp.map should return a new array with the callback function applied on the original elements unless there are errors', () => {
      expect(fp.map(
        n => n * 2, [1, 2, 3]
      )).toEqual([2, 4, 6]);
    });
    test('throw an exception if NOT an array', () => {
      expect(() => {
        fp.map((n => n * 2),
          'This is a string, NOT an array');
      }).toThrow();
    });
  });