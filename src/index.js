import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorkers'
import Login from './components/Login'
import Register from './components/Register'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker()

App.use(function(err, req, res, next) {
  console.log(err);

  if (req.app.get('env') !== 'development') {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json(err);
});