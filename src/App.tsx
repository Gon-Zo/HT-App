import React from 'react';
import {Provider} from 'react-redux';
// import Count from "./entity/count/count";
import store from './config/store';
import RootStackNavigation from "./shared/navigation/root-navigation";

const App = () => {
    return (
        <Provider store={store}>
            {/*<Count/>*/}
            <RootStackNavigation/>
        </Provider>
    )
}

export default App;
