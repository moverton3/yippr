import React, { Component } from 'react'
import { Button, Segment, Card, Container, Image } from 'semantic-ui-react'
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
    <Container>
      <Segment>
        <Card fluid color='violet'>
          <Image src={this.state.image}/>
            <Card.Content>
              <h2 className='text-center'>
                Bio
              </h2>
              <Card.Description>
                {this.state.description}
              </Card.Description>
            </Card.Content>
          </Card>
        <Button inverted color='violet'>
          <Link to={'/barks'}>View All Barks</Link>
        </Button>
      </Segment>
    </Container>
    )
  }


}

export default Bio
