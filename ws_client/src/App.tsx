import React, { FunctionComponent } from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import { useReducer, useEffect } from 'react';
import { ACTIONS, initialState, reducer, StoreContext} from './context'


const App: FunctionComponent = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    if (localStorage.getItem("token") === null){
      localStorage.setItem("token", '');
      dispatch({
        type: ACTIONS.SET_TOKEN,
        payload: '' 
      });
    }
    else {
      dispatch({
        type: ACTIONS.SET_TOKEN,
        payload: String(localStorage.getItem("token")) 
      });
      dispatch({
        type: ACTIONS.SET_USER_NAME,
        payload: String(localStorage.getItem("username")) 
      });
    }
  }, [state.token])

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="App">
        { state.token ? <Home/> : <Login /> }
      </div>
    </StoreContext.Provider>
  );
}

export default App;
