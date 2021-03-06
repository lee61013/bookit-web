import { createAction } from 'redux-actions'

import {
  POPULATE_MEETING_CREATE_FORM,
  POPULATE_MEETING_EDIT_FORM,
  CREATE_MEETING_CANCEL,
  CLOSE_MEETING_DIALOG,
  RESET_UI,
  SELECT_DATE,
  SELECT_DATE_SUCCEEDED,
  OPEN_CANCELLATION_DIALOG,
  CLOSE_CANCELLATION_DIALOG,
  OPEN_INVITE_USER_DIALOG,
  CLOSE_INVITE_USER_DIALOG,
  OPEN_REMOVE_USER_DIALOG,
  CLOSE_CONFIRMATION_DIALOG,
} from './actionTypes'

export const populateMeetingCreateForm =
  createAction(POPULATE_MEETING_CREATE_FORM, (room, meeting) => ({
    room,

    // TODO: Change this name, for the love of god.
    // Should be something like `hoursFromMidnight`.
    // Example data: Clicking on 8pm produces {meeting: 20.0}, which is crapola-town, obvs.
    meeting,
  }))

export const populateMeetingEditForm =
  createAction(POPULATE_MEETING_EDIT_FORM, meeting => ({ meeting }))

export const cancelMeetingRequest = createAction(CREATE_MEETING_CANCEL)

export const closeMeetingDialog = createAction(CLOSE_MEETING_DIALOG)

export const resetUi = createAction(RESET_UI)

export const selectDate = createAction(SELECT_DATE, date => ({ date }))

export const selectDateSucceeded = createAction(SELECT_DATE_SUCCEEDED, date => ({ date }))

export const openCancellationDialog = createAction(OPEN_CANCELLATION_DIALOG)

export const closeCancellationDialog = createAction(CLOSE_CANCELLATION_DIALOG)

export const openInviteUserDialog = createAction(OPEN_INVITE_USER_DIALOG)

export const closeInviteUserDialog = createAction(CLOSE_INVITE_USER_DIALOG)

export const openRemoveUserDialog = createAction(OPEN_REMOVE_USER_DIALOG)

export const closeConfirmationDialog = createAction(CLOSE_CONFIRMATION_DIALOG)
