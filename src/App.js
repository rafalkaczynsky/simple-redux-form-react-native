import React from 'react';
import { Provider } from 'react-redux';
import  store  from './store';

//COMPONENTS

import FormView from './windows/contactPage';

/**
 * MAIN COMPONENT - APP
 */
class App extends React.Component{

    render(){
        return(
		<Provider store={store}>
            <FormView/>
		</Provider>
        );
    }
}


export default App;