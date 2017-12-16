import React, { Component } from 'react';
import { Header, Container, Button, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles={
  top: {
    marginTop :'200px',

  }
}


class NoMatch extends Component {


  render() {
    return (
      <div style={styles.top}>
              <Header as='h1' textAlign='center'>
              You can't find dogs here. Go back home!
                <br />
              <Button basic color="violet" type='submit'>
                <Link to='/'> Home</Link>
              </Button>
              </Header>
      </div>
    );
  }
}

export default NoMatch;
