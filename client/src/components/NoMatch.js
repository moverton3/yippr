import React, { Component } from 'react';
import { Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles ={
  fullpage: {
    color :'#FAE35E',
  }
}


class NoMatch extends Component {

  render() {
    return (

      <Container color='brown'>
        <Header as='h1' textAlign='center'>
          You can't find dogs here. Go back home!
          </Header>
        <Button>
          <Link to='/'> Home</Link>
        </Button>

      </Container>
    );
  }
}

export default NoMatch;
