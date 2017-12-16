import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Bio extends Component {
  state = { image: '', description: ''}

  componentDidMount(){
    axios.get('/api/bios')
      .then( res =>{
        this.setState({ image: res.data.profile_image, description: res.data.description})
      })
      .catch ( err => {
        console.log(err)
      })
  }
  render(){
    return(
      <Segment>
        <img src={this.state.image} height="300px" width="400px" alt=""/>
        {this.state.description}
        <Button>
        <Link to={'/barks'}>View All Barks</Link>
        </Button>
      </Segment>
    )
  }


}

export default Bio
