import React from 'react';
import './App.css';
import {Header} from './components/header';
import {Balance} from './components/balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/transactionList';
import {AddTransaction} from './components/addTransaction';

let Context = React.createContext();

function App() {
  let [currentUser, setCurrentUser] = React.useState('');
  return (
  <Context.Provider value={{ currentUser }}>
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        <LoginScreen onLogin={() => setCurrentUser({ name: "Juquinha"})}/>
        <ShowMessage/>
      </div>
    </div>
  </Context.Provider>
  );
}

function LoginScreen({onLogin}){
  return(
    <button onClick={ onLogin }>Login</button>
  )
}

function ShowMessage(){
  let { currentUser } = React.useContext(Context);
  return(
    <div>
      <p> Welcome { currentUser.name } </p>
    </div>
  )
}
export default App;
