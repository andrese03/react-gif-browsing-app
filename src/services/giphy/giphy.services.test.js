import { searchGIFS } from './giphy.services';

test('fetchs 25 gifs', async () => {
  const result = await searchGIFS();
  expect(result.data.length).toBe(25);
});
