import { AppDispatch } from '../types'

export const SELECT_THEME = 'SELECT_THEME'

export const setTheme = (payload: string) => (dispatch: AppDispatch) => {
  dispatch({ type: SELECT_THEME, payload })
}
