import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button, Tab, Col, Row, Tabs, NavDropdown, MenuItem } from 'react-bootstrap'
import '../styles/Navbar.css'
import Login from './Login'
import { connect } from 'react-redux'
import Calendar from './Calendar'
import SelectMenu from './SelectMenu'

class Navibar extends Component {
  state = {
    key: null
  }

  handleSelect = (key) => {
    this.setState({ key })
  }

  render () {
    if (this.props.auth) {
      return (
        <Navbar fluid fixedTop className={'form'}>


          {/*<Tabs*/}

          {/*>*/}
            {/*<Tab eventKey={1} title="Tab 1">*/}
              {/*Tab 1 content*/}
            {/*</Tab>*/}
            {/*<Tab eventKey={2} title="Tab 2">*/}
              {/*Tab 2 content*/}
            {/*</Tab>*/}
            {/*<Tab eventKey={3} title="Tab 3" disabled>*/}
              {/*Tab 3 content*/}
            {/*</Tab>*/}
          {/*</Tabs>*/}
          {/*<Nav>*/}
            {/*<NavDropdown onClick={() => this.setState({key : null})} eventKey="3" title="Навигация" id="nav-dropdown-within-tab">*/}
              {/*<MenuItem eventKey="3.1">Отчеты</MenuItem>*/}
              {/*<MenuItem eventKey="3.2">Настройки</MenuItem>*/}
              {/*<MenuItem divider />*/}
              {/*<MenuItem eventKey="3.4"><Login /></MenuItem>*/}
            {/*</NavDropdown>*/}

          {/*</Nav>*/}





          <Tab.Container
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="tabs-with-dropdown"
          >
            <Row className="clearfix">
              <Col sm={12}>
                <Nav bsStyle="tabs">
                  <NavItem eventKey="first">Даты</NavItem>
                  <NavItem eventKey="second">Пользователи</NavItem>
                  <NavDropdown onClick={() => this.setState({key : null})} eventKey="3" title="Навигация" >
                    <MenuItem eventKey="3.1">Отчеты</MenuItem>
                    <MenuItem eventKey="3.2">Настройки</MenuItem>
                    <MenuItem divider />
                    <Login/>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first"><Calendar/></Tab.Pane>
                  <Tab.Pane eventKey="second"><SelectMenu/></Tab.Pane>
                  <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>
                  <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
                  <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                  <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </Navbar>
      )
    } else {
      return (
        <Navbar className={'form'}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>DISCORD BOT MENU</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className='form'>
            <Login />
          </Nav>
        </Navbar>
      )
    }
  }
}

export default connect(
  state => ({
    auth: state.auth.loggedIn
  }),
  dispatch => ({
    // onAddTrack: (trackName) => {
    //   dispatch({ type: 'ADD_TRACK', payload: trackName });
    // }
  })
)(Navibar)
