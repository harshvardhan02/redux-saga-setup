import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './redux/actions/users'

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends React.Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        {this.props.users}
        <ul>
          {}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.name,
    allUsers: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => { dispatch(getUsers()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
