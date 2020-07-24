/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import Header from '../containers/Header'
import Hero from '../containers/Hero'
import{ BrowserRouter, Route, Switch} from 'react-router-dom';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: rgb(245, 245, 245);
`

const Home: FunctionComponent = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Hero />
        <HomeContainer>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch> */}
        </HomeContainer>
      </div>
    </BrowserRouter>
    
    
  );
}

export default Home;
