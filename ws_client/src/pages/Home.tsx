/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import Header from '../containers/Header'
import{ BrowserRouter, Route, Switch} from 'react-router-dom'
import List from './List'
import Add from './Add'


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
        <HomeContainer>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={Add} />
          </Switch>
        </HomeContainer>
      </div>
    </BrowserRouter>
    
  );
}

export default Home;
