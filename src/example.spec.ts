import Example from './example';

describe('Example', () => {
  describe('adds', () => {
    it('adds two numbers', async () => {
      const example = new Example();
      const sum = example.add(1, 2);

      expect(sum).toStrictEqual(3);
    });
  });
});
