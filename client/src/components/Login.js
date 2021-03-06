import React, { Component } from 'react';
import { Header, Segment, Form, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

const styles ={
  topLogo: {
    color :'purple',
    size: '60px',
    textAlign:'center'
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
      <div>
        <div>

          <h1 style={styles.topLogo}><span><Icon name='paw' size='big'/></span>Yippr</h1>
          <h2 style={styles.topLogo}>World's first dog social media site</h2>
        </div>
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

    </div>

    );
  }
}

export default connect()(Login);
