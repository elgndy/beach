import React  from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singelroom from './pages/Singelroom';
import Error from './pages/Error';
import {Route , Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
const App = () => {
    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={Singelroom} />
        <Route exact component={Error} />
        </Switch>
        </>
    )
}

export default App;
