import React from 'react';
import { connect } from 'react-redux';
import { getUsers, postLogin } from './redux/actions/users';

class App extends React.Component {

  componentDidMount() {
    this.props.getUser();
    const login = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }
    this.props.doLogin(login);
  }

  render() {
    return (
      <div>
        {this.props.users}
        <ul>
          {this.props.allUsers.map(el => (
            <li key={el.id}>
              {el.name} - {el.username}
              <ul>
                <li>{el.email}</li>
              </ul>
            </li>
          ))}
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
    getUser: () => { dispatch(getUsers()) },
    doLogin: (login) => { dispatch(postLogin(login)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
