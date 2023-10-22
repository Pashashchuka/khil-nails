import { FC } from 'react'

import { PATHS } from './paths'

import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/404Page'

interface Routes {
  path: string
  component: FC
}

export const routes: Routes[] = [
  {
    path: PATHS.ERROR_PAGE,
    component: ErrorPage,
  },
  {
    path: PATHS.HOME_PAGE,
    component: HomePage,
  },
]
