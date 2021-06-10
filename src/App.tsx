import React from 'react';
import {Provider} from 'react-redux';
// import Count from "./entity/count/count";
import store from './config/store';
import HTNavigation from "./shared/navigation/HT-navigation";

const App = () => {
    return (
        <Provider store={store}>
            {/*<Count/>*/}
            <HTNavigation/>
        </Provider>
    )
}

export default App;
