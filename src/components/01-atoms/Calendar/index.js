import React from 'react';
import { connect } from 'react-redux';

import momentPropTypes from 'react-moment-proptypes';
import Week from './Week';
import DateDisplay from './DateDisplay';
import DayNames from './DayNames';
import calendar from '../../../utils/calendar';
import { selectDate } from '../../../actions';
import styles from './styles.scss';
import { calendar as config } from './config';

const style = {
  minWidth: `${config.minWidth}px`,
};

const forwardDate = selectedDate => {
  const date = selectedDate.clone().add(1, 'month').startOf('month');
  console.log(date.format('YYYY-MM-DD'));
  return date;
}
const backDate = selectedDate => selectedDate.clone().subtract(1, 'month').startOf('month');

const Calendar = ({ selectedDate, handleForwardClick, handleBackClick }) => (
  <div
    className={styles.calendar}
    style={style}
  >
    <DateDisplay date={selectedDate} handleForwardClick={handleForwardClick} handleBackClick={handleBackClick} />
    <DayNames />
    {calendar(selectedDate)
        .map((week, index) => <Week key={index} week={week} />)}
  </div>
);

Calendar.propTypes = {
  selectedDate: momentPropTypes.momentObj,
};

const mapDispatchToProps = dispatch => ({
  handleForwardClick: date => () => dispatch(selectDate(forwardDate(date))),
  handleBackClick: date => () => dispatch(selectDate(backDate(date))),
});

export default connect(null, mapDispatchToProps)(Calendar);
