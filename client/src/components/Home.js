import React, { Component } from 'react';
import { Header, Form, Label, TextArea, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios';


class Home extends Component {

  state = { bio: { profile_image: '', description: ''} };

  handleImgChange = (e) => {
    this.setState({ bio: { profile_image: e.target.value, description: this.state.bio.description } })
  }
  handleDescChange = (e) => {
    this.setState( { bio: { profile_image: this.state.bio.profile_image,
                            description: e.target.value} })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/bios', {bio: this.state.bio})
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    return (

      <Segment>
        <Header as='h1'>Create Your Bio</Header>
        <Form onSubmit={this.handleSubmit}>
          <Label>Profile Image</Label>
          <Form.Input placeholder="URL goes here" id="profile_image" onChange={this.handleImgChange} />
          <Label>Description</Label>
          <TextArea placeholder="Description Goes Here" id="description" onChange={this.handleDescChange} />
          <Button secondary type='submit'>Add Bio</Button>
          <Link to={'/bio'}>
          <Button secondary>Go To Page</Button>
          </Link>
        </Form>

      </Segment>
    );
  }
}

export default Home;
