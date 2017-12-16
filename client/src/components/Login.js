import React, { Component } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

const styles ={
  topLogo: {
    color :'purple',
    

  }
}



class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
<<<<<<< HEAD

=======
      <div>
      <h1 style={styles.topLogo}>Yipper</h1>
>>>>>>> Add changes to login.
      <Segment inverted color='teal'>

        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label className="text-white" htmlFor='email'>Email</label>
            <input
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label className="text-white" htmlFor='password'>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button basic color="violet" type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
<<<<<<< HEAD

=======
    </div>
>>>>>>> Add changes to login.
    );
  }
}

export default connect()(Login);
