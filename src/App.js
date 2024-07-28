import {Route} from 'react-router-dom'

import Home from './components/Home'
import NewTransaction from './components/NewTransaction'

import './App.css'

const transactions = [
  {
    id: 1,
    date: '02/17/2020',
    description: 'Credited to Office Account',
    type: 'credit',
    amount: 5000,
  },
  {
    id: 2,
    date: '02/18/2020',
    description: 'Snacks Party',
    type: 'debit',
    amount: 500,
  },
  {
    id: 3,
    date: '02/18/2020',
    description: 'Printing sheets for office documents',
    type: 'debit',
    amount: 285,
  },
  {
    id: 4,
    date: '02/20/2020',
    description: 'Misc Expenses',
    type: 'debit',
    amount: 3000,
  },
]

const App = () => (
  <>
    <Route exact path="/" component={<Home transactionData={transactions} />} />
    <Route path="/new" component={NewTransaction} />
  </>
)

export default App
