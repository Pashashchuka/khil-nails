import { AppStateType } from '../types'

export const selectTheme = (state: AppStateType): string => {
  return state.users.theme
}
