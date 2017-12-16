import React, { Component } from 'react';
import { Form,
         Button,
         Label,
         List,
         Container,
         Header,
         Icon,
         Segment,
       } from 'semantic-ui-react'
import axios from 'axios'

const square = { width: 175, height: 175 }

class Barks extends Component{
  state = { barks: [], newBark: "" }

  handleChange = (e) => {
    console.log("bark")
    this.setState({ newBark: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/barks', { content: this.state.newBark})
    .then(res => {
      this.setState({ barks: [...this.state.barks, res.data.content]})
    })
  }

  deleteItem = () => {
    console.log('delete')
  }

  displayBarks = () => {
    return this.state.barks.map( bark => {
      return(
        <List.Item>
          {bark} <br />
          <Button onClick={this.deleteItem}>
            Delete
          </Button>

        </List.Item>
      )
    })
  }

  render(){
    return(
    <Container>
      <div>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Label color="violet">
              <Header as="h1" color="white">
                <Icon name='paw' />
                New Bark
              </Header>
          </Label>
          <Segment>
          <Form.Input placeholder="Whats going on?" onChange={this.handleChange} />
          <Button secondary>Bark!</Button>
        </Segment>
        </Form>
        <h1>Barks Go Here</h1>
        <ul>
          {this.displayBarks()}
        </ul>
      </div>
    </Container>
    )
  }
}

export default Barks
