import { takeEvery } from 'redux-saga/effects'
import { fetchMeetings, createMeeting, editMeeting, cancelMeeting } from './meetings'
import { login, logout } from './auth'
import selectDate from './selectDate'
import { userInvite, userRemove } from './users'

import {
  LOGIN_START,
  LOGOUT,
  MEETINGS_FETCH_START,
  MEETING_CREATE_START,
  CANCEL_MEETING_START,
  MEETING_EDIT_START,
  SELECT_DATE,
  USER_INVITE_START,
  USER_REMOVE_START,
} from '../actions/actionTypes'

function* rootSaga() {
  yield takeEvery(MEETINGS_FETCH_START, fetchMeetings)
  yield takeEvery(MEETING_CREATE_START, createMeeting)
  yield takeEvery(MEETING_EDIT_START, editMeeting)
  yield takeEvery(LOGIN_START, login)
  yield takeEvery(LOGOUT, logout)
  yield takeEvery(CANCEL_MEETING_START, cancelMeeting)
  yield takeEvery(SELECT_DATE, selectDate)
  yield takeEvery(USER_INVITE_START, userInvite)
  yield takeEvery(USER_REMOVE_START, userRemove)
}

export default rootSaga
