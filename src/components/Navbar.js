import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, Tab, Col, Row, NavDropdown, MenuItem } from 'react-bootstrap'
import '../styles/Navbar.css'
import Login from './Login'
import { connect } from 'react-redux'
import Calendar from './Calendar'
import SelectMenu from './SelectMenu'
import Settings from './Settings'
import OutsideClickHandler from 'react-outside-click-handler'


class Navibar extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef()
  }
  state = {
    key: null
  }
  handleSelect = (key) => {
    this.setState({ key })
  }
  render () {
    if (this.props.auth) {
      return (
        <OutsideClickHandler onOutsideClick={() => this.setState({key : null})
        }
        >
          <Navbar ref='navbar' fluid fixedTop className={'form'}>

            <Tab.Container
              activeKey={this.state.key}
              onSelect={this.handleSelect}
              id="tabs-with-dropdown"
            >
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav className={"delete-border1"} bsStyle="tabs">
                    <NavItem eventKey="first">Параметры поиска</NavItem>
                    <NavDropdown onClick={() => this.setState({key : null})} eventKey="3" title="Навигация" >
                      <MenuItem eventKey="3.1">Отчеты</MenuItem>
                      <MenuItem eventKey="3.2">Настройки</MenuItem>
                      <MenuItem divider />
                      <Login/>
                    </NavDropdown>
                  </Nav>
                </Col>
                <Col  sm={12}>
                  <Tab.Content  animation>
                    <Tab.Pane eventKey="first"><div className={'tab-pane-first'}><Calendar/><div id={'select-menu'}><SelectMenu/></div></div></Tab.Pane>
                    <Tab.Pane eventKey="second"><SelectMenu/></Tab.Pane>
                    <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>
                    <Tab.Pane eventKey="3.2"><div className={'tab-pane-first'}><Settings id={'select-menu'}/></div></Tab.Pane>
                    <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                    <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </Navbar>
        </OutsideClickHandler>
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
  })
)(Navibar)
