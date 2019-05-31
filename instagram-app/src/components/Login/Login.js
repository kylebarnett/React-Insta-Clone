import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.props.handleLoginChange}
            name='username'
            value={this.props.username}
          />
          <input
            onChange={this.props.handleLoginChange}
            name='password'
            value={this.props.password}
          />
        </form>
        <button
          onClick={this.props.login}
        >Login</button>
      </div>
    )
  }
}

export default Login