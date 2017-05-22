import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import DateTimePicker from '../DateTimePicker/index';
import Button from '../../01-atoms/Button/index';
import ErrorMessages from '../ErrorMessages';
import styles from './styles.scss';
// TODO: replace Cancel button with svg asset.
const images = require.context('../../../assets/images', true);

const meetingTitleStyle = { fontSize: '18px', fontWeight: '100' };

const MeetingEditor = ({
  handleSubmit,
  handleCancel,
  invalid,
  errors = {},
  meeting,
  room,
  validationErrors = {},
  visibleErrorMessages,
 }) =>
 (<div className={styles.editor}>
   <img src={images('./close-desktop.png')} className={styles.cancel} onClick={handleCancel} alt="X" />
   <div className={styles.room}>Book {room.name} Room</div>
   <form
     onSubmit={(event) => {
       event.preventDefault();
       handleSubmit(meeting, room);
     }}
   >
     <Field floatingLabelFixed floatingLabelText="Event name" name="title" component={TextField} errorText={errors.title} style={meetingTitleStyle} />
     <DateTimePicker locale="en-US" name="start" label="Start" />
     <DateTimePicker name="end" label="End" />
     <Button disabled={invalid} type="submit" content="Bookit" />
     <ErrorMessages messages={validationErrors} allowableMessages={visibleErrorMessages} />
   </form>
 </div>);

MeetingEditor.propTypes = {
  invalid: PropTypes.bool,
  errors: PropTypes.shape({}),
  validationErrors: PropTypes.shape({}),
  visibleErrorMessages: PropTypes.arrayOf(PropTypes.string),
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  meeting: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.date,
    end: PropTypes.date,
  }),
  room: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default MeetingEditor;