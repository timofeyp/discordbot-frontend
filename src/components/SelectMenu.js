import React from 'react'
import Select from 'react-select'
import Calendar from './Calendar'
import axios from 'axios'
import connect from 'react-redux/es/connect/connect'
import { getDiscordUsers } from '../actions/discordUsers'
import { CHANGE_REQUEST_CONDITIONS_AUTHORS } from '../actions/requestConditions'
import '../styles/Select.css'


const customStyles = {
  container: (provided, state) => ({
    width: '-webkit-fill-available' , display: 'inline-block', backgroundColor: '#fbfbfb', border: '2px solid #dcdcdc', borderRadius: '5px'
  }),
  input: (provided, state) => ({
    width: 'auto' , minHeight: '26px', maxHeight: '26px'
  }),
  control: (styles) => (
    { ...styles, backgroundColor: '#fcfcfc', border: 'none', width: 'auto' , boxShadow: 'none', justifyContent: 'center', borderColor: 'black',  minHeight: '26px', maxHeight: '26px'}
  ),
  option: (styles) => (
    { ...styles, backgroundColor: '#fcfcfc', border: 'none', width: 'auto' , boxShadow: 'none',  justifyContent: 'center'}
  ),
  menu: (styles) => (
    { ...styles, backgroundColor: '#fcfcfc', border: 'none', width: 'auto' , boxShadow: 'none',  justifyContent: 'center'}
  )


}

class SelectMenu extends React.Component {
  state = {
    selectedOption: null,
    options: []
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.discordUsers !== this.props.discordUsers) {
      const newOptions = nextProps.discordUsers.map(user => ({value: user._id, label: user.name}))
      this.setState({ options: newOptions })
    }
  }

  handleChange = async (selectedOption) => {
   // await this.props.onGetReports({ sort: { created: -1 } })
    this.setState({ selectedOption })
    let filterArr = selectedOption.map(option => option.value)
    this.props.onFilterChange(filterArr)
  }
  render() {
    const { selectedOption } = this.state;

    return (
        <Select
          placeholder={'Выбрать пользователей'}
          styles={customStyles}
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
          isMulti={true}
        />
    );
  }
}

export default connect(
  state => ({
    discordUsers: state.discordUsers,
    requestConditions: state.requestConditions
  }),
  dispatch => ({
    onFilterChange: (filterArr) => {
      dispatch({ type: CHANGE_REQUEST_CONDITIONS_AUTHORS, payload: filterArr })
    }
  })
)(SelectMenu)