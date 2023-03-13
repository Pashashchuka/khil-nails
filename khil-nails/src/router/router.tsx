import { FC, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { routes } from './routes'
import { useAppDispatch } from '../store'
import { setTheme } from '../store/actions'

export const Router: FC = () => {
  const dispatch = useAppDispatch()

  const theme = (localStorage.getItem('theme') as string) || 'light'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    dispatch(setTheme(theme))
  }, [dispatch, theme])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
