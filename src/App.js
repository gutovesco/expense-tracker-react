import React from 'react';
import './App.css';
import {Header} from './components/header';
import {Balance} from './components/balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/transactionList';
import {AddTransaction} from './components/addTransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
