import React from 'react'
import Select from 'react-select'
import Calendar from './Calendar'
import axios from 'axios'
import connect from 'react-redux/es/connect/connect'
import { getDiscordUsers } from '../actions/discordUsers'
import { getReports } from '../actions/reports'
import { FILTER_REPORTS_BY_NAME } from '../actions/reports'


class SelectMenu extends React.Component {
  state = {
    selectedOption: null,
    options: []
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.discordUsers !== this.props.discordUsers) {
      const newOptions = nextProps.discordUsers.map(user => ({value: user.name, label: user.name}))
      this.setState({ options: newOptions })
    }
  }

  handleChange = async (selectedOption) => {
    await this.props.onGetReports()
    this.setState({ selectedOption })
    let filterArr = selectedOption.map(option => option.value)
    this.props.onFilter(filterArr)
    console.log(`Option selected:`, selectedOption)
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
          isMulti={true}
        />
        <Calendar />
      </div>
    );
  }
}

export default connect(
  state => ({
    discordUsers: state.discordUsers
  }),
  dispatch => ({
    onGetReports: () => getReports(dispatch),
    onGetDiscordUsers: () => dispatch(getDiscordUsers()),
    onFilter: (filterArr) => {
      dispatch({ type: FILTER_REPORTS_BY_NAME, payload: filterArr })
    }
  })
)(SelectMenu)