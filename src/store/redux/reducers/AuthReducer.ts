import { AuthReducerAction } from '../../types'

declare type State = {
    isLogin: boolean
}

const INITIAL_STATE: State = {
  isLogin: false
}

export default (state = INITIAL_STATE, action: AuthReducerAction) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        isLogin: !state.isLogin,
      }
    default:
      return state
  }
}
