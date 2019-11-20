import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {Alert} from './components/Alert';
import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import {ModalState} from './context/modal/ModalState';


function App() {
  return (
    <FirebaseState>
      <ModalState>
        <AlertState>
          <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
              <Alert/>
              <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/about'} exact component={About}/>
              </Switch>
            </div>
          </BrowserRouter>
        </AlertState>
      </ModalState>
    </FirebaseState>
  );
}

export default App;
