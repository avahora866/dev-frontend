import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProduct from './Admin/AddProduct';
import EditProduct from './Admin/EditProduct';
import ProductList from './Admin/product/ProductList';
import CustomerEdit from './Admin/editCustomer/CustomerEdit';
import Customer from './Admin/customer/Customer'
import DropList from './Driver/driverHomePage/DropList'
import Order from './Customer/currentOrder/Order'
import Products from './Customer/products/Products';
import Trolly from './Customer/trolly/Trolly';
import EmployeeRegistration from './Other/empReg-C,D/EmployeeRegistration'
import LoginPage from './Other/loginPage/LoginPage'
import Type from './Other/typeOfUser/Type'
import CustomerRegistration from './Other/customerReg/CustomerRegistration';

function App() {
  return (
    <Router>
    <div className="App">
      {/* Stopped making the routing path at the admin edit customer stage
      as im not sure how to go about it - may need to learn more about router input.
      Same problem for the edit products - could still do add products though*/}
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Type" component={Type} />
          <Route path="/CustomerRegistration" component={CustomerRegistration} />
          <Route path="/Products" component={Products} />
          <Route path="/Trolly" component={Trolly} />
          <Route path="/Order" component={Order} />
          <Route path= "/EmployeeRegistration" component={EmployeeRegistration} />
          <Route path= "/Customers" component={Customer} />
          <Route path= "/EditCustomer" component={CustomerEdit} />
          <Route path= "/ProductList" component={ProductList} />
          <Route path= "/EditProducts" component={EditProduct} />
          <Route path= "/AddProducts" component={AddProduct} />
          <Route path= "/Droplist" component={DropList} />
        </Switch>

      {/* <DropList /> */}
      
    </div>
    </Router>
  );
}

export default App;
