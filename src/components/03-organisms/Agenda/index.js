import React from 'react'
import PropTypes from 'prop-types'

import momentPropTypes from 'react-moment-proptypes'

import roomTimelineNames from '../../01-atoms/RoomTimelineNames'
import timelineLabelList from '../../01-atoms/TimelineLabelList'
import CurrentTimeIndicator from '../../01-atoms/CurrentTimeIndicator'

import RoomTimeline from '../../02-molecules/RoomTimeline'

import styles from './styles.scss'

export const renderRoomTimelines = (rooms, meetings, populateMeetingCreateForm, meetingFormIsActive) => rooms.map(room => (
  <RoomTimeline
    key={room.name}
    meetings={meetings.filter(meeting => meeting.roomId === room.id)}
    room={{
      email: room.id,
      name: room.name,
    }}
    populateMeetingCreateForm={populateMeetingCreateForm}
    meetingFormIsActive={meetingFormIsActive}
  />
))

const Agenda = ({ meetings, rooms, populateMeetingCreateForm, meetingFormIsActive }) => (
  <div className={styles.agenda}>
    <div className={styles.column}>
      { roomTimelineNames(rooms) }
    </div>
    <div className={[styles.column, styles.timeline].join(' ')} id="timelines">
      { timelineLabelList() }
      { renderRoomTimelines(rooms, meetings, populateMeetingCreateForm, meetingFormIsActive) }
      <CurrentTimeIndicator />
    </div>
  </div>
  )

Agenda.propTypes = {
  populateMeetingCreateForm: PropTypes.func.isRequired,
  meetings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userMeetingId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      start: momentPropTypes.momentObj.isRequired,
      end: momentPropTypes.momentObj.isRequired,
      duration: PropTypes.number.isRequired,
      isOwnedByUser: PropTypes.bool.isRequired,
      owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
      roomName: PropTypes.string.isRequired,
      roomId: PropTypes.string.isRequired,
    })
  ).isRequired,
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  meetingFormIsActive: PropTypes.bool.isRequired,
}

export default Agenda
