import fetchdata from '../fetchData';

test('fetchData throw', () => {
  expect(() => fetchdata('url')).toThrow();// почему то пишет что fetchdata не выбрасывает ошибку хотя должна
});
