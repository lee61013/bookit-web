import React from 'react'
import { shallow } from 'enzyme'

import moment from 'moment'

import RecentlyAddedUsersTable from '.'
import styles from './styles.scss'

describe('<RecentlyAddedUsersTable />', () => {
  it('renders', () => {
    const wrapper = shallow(<RecentlyAddedUsersTable />)
    expect(wrapper).toBeTruthy()
  })

  it('shows a user added within the current week', () => {
    const user = {
      name: 'Testy McTesterson',
      email: 'test@test.com',
      location: 'Testerton',
      team: 'Testing',
      active: true,
      dateAdded: moment(),
    }
    const wrapper = shallow(<RecentlyAddedUsersTable users={[user, { ...user, dateAdded: moment().subtract(2, 'weeks')}]} />)
    expect(wrapper.find('tr').length).toBe(1)
  })

  it('shows a non-active user added within the current week as "Pending"', () => {
    const user = {
      name: 'Testy McTesterson',
      email: 'test@test.com',
      location: 'Testerton',
      team: 'Testing',
      active: false,
      dateAdded: moment(),
    }
    const wrapper = shallow(<RecentlyAddedUsersTable users={[user]} />)
    expect(wrapper.find(`.${styles.pending}`).text()).toEqual('(Pending)')
  })

  it('does not show a user that is missing the `dateAdded` "hidden" property', () => {
    const user = {
      name: 'Testy McTesterson',
      email: 'test@test.com',
      location: 'Testerton',
      team: 'Testing',
      active: true,
    }
    const wrapper = shallow(<RecentlyAddedUsersTable users={[user]} />)
    expect(wrapper.find('tr').length).toBe(0)
  })
})