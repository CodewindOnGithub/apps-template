import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { User } from '@authentication/models';
import * as UserActions from './user.actions';

export const USER_FEATURE_KEY = 'authentication-user';

export interface State extends EntityState<User> {
  selectedId?: string | number; // which User record has been selected
  loaded: boolean; // has the User list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = userAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) =>
    userAdapter.upsertMany(user, { ...state, loaded: true })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
