import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type ThemeReducerAction = {
  payload: boolean
  type: 'TOGGLE_DARK_MODE'
}
export declare type AuthReducerAction = {
  payload: boolean
  type: 'USER_LOGIN'
}