import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory"
import axios from 'axios'

const history = createBrowserHistory()

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/get-reports-secure')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOOK CATALOG &nbsp;
              {localStorage.getItem('jwtToken') &&
              <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
              </thead>
              <tbody>
              {this.state.books.map(book =>
                <tr>
                  <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;