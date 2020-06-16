import Validator from '../Validator';

test.each([
  ['qq-__wyyyyy', true],
  ['!!!', false],
  ['__qq-__wyyyyy', false],
  ['111qq-__wyyyyy', false],
  ['-qq-__wyyyyy', false],
  ['qq-__wyyyyy__', false],
  ['qq-__wyyyyy111', false],
  ['qq-__wyyyyy---', false],
  ['qq-uil0906__wyyyyy', false],
  ['qq-__6yyyy', true],
])('get result', (username, expected) => {
  const validator = new Validator();
  const result = validator.validateUsername(username);
  expect(result).toBe(expected);
});
