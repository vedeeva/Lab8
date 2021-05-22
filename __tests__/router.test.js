import {pushToHistory} from '../scripts/router.js';

describe('push to history', () => {
    test('settings', () => {
        expect(pushToHistory('settings', 0).state).toEqual({ page: 'settings' });
    });
  
    test('entry', () => {
        expect(pushToHistory('entry', 1).state).toEqual({page: 'entry1'});
      });

    test('length', () => {
        expect(pushToHistory('entry', 2).length).toEqual(history.length);
    });
    test('default', () => {
        expect(pushToHistory('', 3).state).toEqual({});
    });
  });
