import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import Button from '../../01-atoms/Button/index'
import styles from './styles.scss'

const UserForm = ({
  user,
  handleSubmit,
  invalid,
 }) => (
   <div className={styles.form}>
     <div className={styles.invite}>Add Users</div>
     <div className={styles.section}>Enter user information</div>
     <form
       onSubmit={(event) => {
         event.preventDefault()
         handleSubmit(user)
       }}
     >
       <Field floatingLabelFixed
         validate={value => value && !/@/.test(value) ? 'Invalid email address' : undefined}
         floatingLabelText="E-mail address" name="email" component={TextField} />
       <Button disabled={invalid} type="submit" content="Add user" />
     </form>
   </div>
 )

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}

export default UserForm
