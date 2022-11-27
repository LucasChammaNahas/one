export interface IAppState {
  isLoggedIn: boolean,
  user?: Object,
  isLoading: boolean,
}

export interface IAction {
  type: string,
  payload: any,
}