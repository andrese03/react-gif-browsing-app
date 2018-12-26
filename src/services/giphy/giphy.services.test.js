import { searchGIFS } from './giphy.services';

test('fetchs 24 gifs', async () => {
  const result = await searchGIFS();
  expect(result.data.length).toBe(24);
});
