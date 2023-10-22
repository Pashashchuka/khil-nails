import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectTheme } from '../../store/selectors'
import { setTheme } from '../../store/actions'
import { useAppDispatch } from '../../store'

export const useThemeSwitcher = () => {
  const dispatch = useAppDispatch()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(next))
  }

  const checked = theme === 'dark'

  return {
    checked,
    handleThemeChange,
  }
}
