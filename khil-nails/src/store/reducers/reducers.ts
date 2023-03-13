import { SELECT_THEME } from '../actions'

interface ISelectTheme {
  type: typeof SELECT_THEME
  payload: string
}

type AllActionTypes = ISelectTheme

interface IinitialState {
  theme: string
}

const initialState = {
  theme: 'light',
}

const users = (
  state: IinitialState = initialState,
  action: AllActionTypes,
): IinitialState => {
  switch (action.type) {
    case SELECT_THEME: {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default:
      return state
  }
}

export default users
