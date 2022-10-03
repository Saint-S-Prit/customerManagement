import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Customer from './customer/Customer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEditCustomer from './customer/AddEditCustomer';
function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Customer />}/>
        <Route path='/AddEditCustomer' element={<AddEditCustomer />}/>
        <Route path='/AddEditCustomer/:id' element={<AddEditCustomer />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
