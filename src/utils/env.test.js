import { ENVIRONMENT } from './env';

describe('env.js', () => {
  test('should be the testing environment', () => {
    expect(ENVIRONMENT).toEqual('test');
  });
});
