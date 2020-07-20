import React, { FunctionComponent } from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import { useReducer, useEffect } from 'react';
import { ACTIONS, initialState, reducer, StoreContext} from './context'


const App: FunctionComponent = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    if (localStorage.getItem("token") === undefined){
      localStorage.setItem("token", '');
      dispatch({
        type: ACTIONS.SET_TOKEN,
        payload: false 
      });
    }
    else {
      dispatch({
        type: ACTIONS.SET_TOKEN,
        payload: Boolean(localStorage.getItem("token")) 
      });
    }
    
  }, [state.token])

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="App">
        { console.log(state.token ) }
        { state.token ? <Home/> : <Login /> }
      </div>
    </StoreContext.Provider>
  );
}

export default App;
