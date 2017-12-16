import React, { Component } from 'react';
import { Form, Button, Label, List } from 'semantic-ui-react'

class Barks extends Component{
  state = { barks: [], newBark: "" }

  handleChange = (e) => {
    console.log("bark")
    this.setState({ newBark: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ barks: [...this.state.barks, this.state.newBark]})
  }

  displayBarks = () => {
    return this.state.barks.map( bark => {
      return(
        <List.Item>
          {bark}
        </List.Item>
      )
    })
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            New Bark
          </Label>
          <Form.Input placeholder="Whats going on?" onChange={this.handleChange} />
          <Button secondary>Bark!</Button>
        </Form>
        <h1>Barks Go Here</h1>
        <ul>
          {this.displayBarks()}
        </ul>
      </div>
    )
  }
}

export default Barks
