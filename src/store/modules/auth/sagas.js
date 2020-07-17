import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/auth/login', {
    email,
    password,
  });
  console.log(response.data);
  const { access_token } = response.data;

  yield put(signInSuccess(access_token));
  console.log(response.data);
  history.push('dashboard');
  console.log('ok');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
