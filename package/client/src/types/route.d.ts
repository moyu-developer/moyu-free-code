import { ReactNode } from 'react'

export interface RouteMenu {
  name?: string;
  icon?: ReactNode
}

export interface Route {
  name: string;
  path: string;
  component: string;
  menu?: RouteMenu;
  locale?: string;
  auth?: string;
  routes?: Route[]
}
