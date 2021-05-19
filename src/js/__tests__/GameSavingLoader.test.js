import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader.load() return promise', () => GameSavingLoader.load().then((data) => {
  expect(data).toEqual(new GameSaving('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
}));
