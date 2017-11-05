import { InformationModalAction } from '../actions';
import { InformationModalState } from '../types/index';
import { DISMISS_MODAL } from '../constants/index';

const INFORMATION_MODAL_C_NAME = 'informationModal';
function createCookie(name: string, value: string) {
  const date = new Date();
  date.setTime(date.getTime() + (30 * 1000));
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}${expires}; path=/`;
}
function getCookie(name: string) {
  if (document.cookie.length > 0) {
      let start = document.cookie.indexOf(`${name}=`);
      if (start !== -1) {
          start = start + name.length + 1;
          let end = document.cookie.indexOf(';', start);
          if (end === -1) {
              end = document.cookie.length;
          }
          (console).log('document.cookie.substring(start, end)', document.cookie.substring(start, end));
          return document.cookie.substring(start, end);
      }
  }
  return undefined;
}
export const informationModalInitialState = {
  show: getCookie(INFORMATION_MODAL_C_NAME) !== 'false'
};
export function informationModal(
  state: InformationModalState = informationModalInitialState,
  action: InformationModalAction
): InformationModalState {
  switch (action.type) {
    case DISMISS_MODAL:
      createCookie(INFORMATION_MODAL_C_NAME, 'false');
      return { ...state, show: false };
    default:
  }
  return state;
}

export default informationModal;