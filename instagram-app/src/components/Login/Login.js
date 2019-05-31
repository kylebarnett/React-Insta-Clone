import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      password: props.password,
      handleChange: props.handleChange
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.props.handleChange}
            name='username'
            value={this.props.username}
          />
          <input
            onChange={this.props.handleChange}
            name='password'
            value={this.props.username}
          />
        </form>
      </div>
    )
  }
}

export default Login