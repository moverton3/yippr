import React, { Component } from 'react';
import { Header, Form, Label, TextArea, Button, Segment } from 'semantic-ui-react';
import { Router } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1'>Create Your Bio</Header>
        <Form>
          <Label>Profile Image</Label>
          <Form.Input placeholder="URL goes here" />
          <Label>Description</Label>
          <TextArea placeholder="Description Goes Here" />
        </Form>
        <Button secondary>Add Bio</Button>
      </Segment>
    );
  }
}

export default Home;
