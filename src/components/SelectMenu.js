import React from 'react'
import Select from 'react-select'
import Calendar from './Calendar'
import axios from 'axios'
import connect from 'react-redux/es/connect/connect'
import { getDiscordUsers } from '../actions/discordUsers'

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

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
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
    onGetDiscordUsers: () => dispatch(getDiscordUsers())
  })
)(SelectMenu)