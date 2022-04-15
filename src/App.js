
import './App.css';
import Basic from './components/form';
import Table from './components/Table';
import  FriendList from './components/feildArray';
import {  Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
        <main>
            <Switch>
                <Route path="/" component={Basic} exact />
                <Route path="/table" component={Table} />
                <Route path="/example" component={FriendList} />
            </Switch>
        </main>
     {/* <Basic /> */}
    </div>
  );
}

export default App;
