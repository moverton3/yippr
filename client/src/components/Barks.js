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
        <List bulleted>
        <List.Item>
          <h3>{bark}</h3>
          <Button size='mini' inverted color='red' onClick={this.deleteItem}>
            <Icon link name='delete' />
            Delete
          </Button>
        <br />
        </List.Item>
      </List>
      )
    })
  }

  render(){
    return(
    <Container>
      <div>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Label circular color="teal">
              <h1>
                <Icon name='paw' />
                New Bark
                <Icon name='paw' />
              </h1>
          </Label>
          <Segment inverted color='violet' secondary>
          <Form.Input placeholder="Whats going on?" onChange={this.handleChange} />
          <Button inverted>Bark!</Button>
        </Segment>
        </Form>
        <h1>Recent Barks</h1>
        <ul>
          {this.displayBarks()}
        </ul>
      </div>
    </Container>
    )
  }
}

export default Barks
