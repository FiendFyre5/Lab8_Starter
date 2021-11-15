// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// valid phone number
//2 true
test('verify numbers match', () => {
  expect(functions.isPhoneNumber('123-456-7990')).toBe(true);
});
test('verify numbers match', () => {
    expect(functions.isPhoneNumber('123-486-7990')).toBe(true);
  });
  test('verify numbers match', () => {
    expect(functions.isPhoneNumber('123456khbk')).toBe(false);
  });

test('verify numbers match', () => {
        expect(functions.isPhoneNumber('1234867990')).toBe(false);
      });

// valid email
//2 true
test('verify emails', () => {
    expect(functions.isEmail('alok@yahoo.com')).toBe(true);
});
test('verify emails', () => {
    expect(functions.isEmail('alok@gmail.com')).toBe(true);
});
test('verify emails', () => {
    expect(functions.isEmail('9754w86438')).toBe(false);
});

test('verify emails', () => {
expect(functions.isEmail('hkvkvkv!vkhvkhvk')).toBe(false);
});

// valid email
//2 true
test('verify password', () => {
    expect(functions.isStrongPassword('letter_12')).toBe(true);
});
test('verify password', () => {
    expect(functions.isStrongPassword('Password_1234')).toBe(true);
});
test('verify passwor', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});
test('verify passwor', () => {
    expect(functions.isStrongPassword('12')).toBe(false);
});

//valid date
test('verify date', () => {
    expect(functions.isDate('12/12/2012')).toBe(true);
});
test('verify date', () => {
    expect(functions.isDate('13/13/2012')).toBe(true);
});
test('verify date', () => {
    expect(functions.isDate('12/122012')).toBe(false);
});
test('verify date', () => {
    expect(functions.isDate('abkjbk')).toBe(false);
});

//valid hexcode
test('verify hexcode', () => {
    expect(functions.isHexColor('#334')).toBe(true);
});
test('verify hexcode', () => {
    expect(functions.isHexColor('#334567')).toBe(true);
});
test('verify hexcode', () => {
    expect(functions.isHexColor('#34')).toBe(false);
});
test('verify hexcode', () => {
    expect(functions.isHexColor('#aaaaa')).toBe(false);
});