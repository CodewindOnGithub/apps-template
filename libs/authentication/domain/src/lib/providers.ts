import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { UserEffects } from './+state/user/user.effects';
import { reducer, USER_FEATURE_KEY } from './+state/user/user.reducer';

export const provideAuthenticationDomain = () => [
  provideState(USER_FEATURE_KEY, reducer),
  provideEffects([UserEffects]),
];
