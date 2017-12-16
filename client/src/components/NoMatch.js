import React, { Component } from 'react';
import { Header, Container, Button, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class NoMatch extends Component {


  render() {
    return (
      <div>
          <Segment basic>
            <Grid verticalAlign="middle" centered columns={2}>
              <Header as='h1' textAlign='center'>
              You can't find dogs here. Go back home!
                <br />
              <Button>
                <Link to='/'> Home</Link>
              </Button>
              </Header>
            </Grid>
          </Segment>

      </div>
    );
  }
}

export default NoMatch;
