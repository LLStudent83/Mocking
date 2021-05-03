import getLevel from '../getLevel';
import fetchdata from '../fetchData';

jest.mock('../fetchData');
test('return fetchData', () => {
  fetchdata.mockReturnValue('{}');
  getLevel(1);
  expect(fetchdata).toBeCalledWith('https://server/user/1');
});


test('check if in getLevel', () => {
  const response = {
    status: 'ok',
    level: 20,
  };
  fetchdata.mockReturnValue(response);
  getLevel(1);
  expect(getLevel()).toBe('Ваш текущий уровень: 20');
});
