const {expect} = require ('chai');
const alternatingCase = require('../alternatingCase');

describe('alternatingCase', () => {
  it ('returns a single uppercase letter when given a single lowercase letter', () => {
    expect(alternatingCase('h')).to.equal('H');
  });
  it ('returns a string with alternating case when given a string with no spaces', () => {
    expect(alternatingCase('he')).to.equal('He');
    expect(alternatingCase('hello')).to.equal('HeLlO');
  });
  it ('returns a string with alternating case when given a string with one space', () => {
    expect(alternatingCase('hello world')).to.equal('HeLlO wOrLd');
    expect(alternatingCase('hi student')).to.equal('Hi StUdEnT');
  });
  it ('returns a string with alternating case when given a string with one comma', () => {
    expect(alternatingCase('hello, world')).to.equal('HeLlO, wOrLd');
  });
  it ('returns a string with alternating case when given an all uppercase string', () => {
    expect(alternatingCase('HELLO WORLD')).to.equal('HeLlO wOrLd');
  });
});
