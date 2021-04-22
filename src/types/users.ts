export interface UserState {
  users: any[],
  loading: boolean,
  error: null | string
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROE = 'FETCH_USERS_ERROE'
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS
}
interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: any[]
}
interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROE,
  payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
