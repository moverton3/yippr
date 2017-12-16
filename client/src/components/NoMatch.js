import React, { Component } from 'react';
import { Header, Container, Button, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class NoMatch extends Component {


  render() {
    return (
      <div>
              <Header as='h1' textAlign='center'>
              You can't find dogs here. Go back home!
                <br />
              <Button>
                <Link to='/'> Home</Link>
              </Button>
              </Header>
      </div>
    );
  }
}

export default NoMatch;
