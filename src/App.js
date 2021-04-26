import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProduct from './Admin/product/AddProduct';
import EditProduct from './Admin/product/EditProduct';
import ProductList from './Admin/product/ProductList';
import EditCustomer from './Admin/customer/EditCustomer';
import Customer from './Admin/customer/Customer'
import DropList from './Driver/driverHomePage/DropList'
import Order from './Customer/currentOrder/Order'
import Products from './Customer/products/Products';
import Trolly from './Customer/trolly/Trolly';
import LoginPage from './Other/LoginPage'
import CustomerRegistration from './Other/CustomerRegistration';
import Admins from './Admin/admin/Admins';
import Drivers from './Admin/driver/Drivers';
import EditAdmins from './Admin/admin/EditAdmins';
import EditDrivers from './Admin/driver/EditDrivers';
import AddAdmin from './Admin/admin/AddAdmin';
import AddDriver from './Admin/driver/AddDrivers';
import AddCustomer from './Admin/customer/AddCustomer';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          {/* Customer */}
          <Route path="/CustomerRegistration" component={CustomerRegistration} />
          <Route path="/Products" component={Products} />
          <Route path="/Trolly" component={Trolly} />
          <Route path="/Order" component={Order} />

          {/* Admin */}
          <Route path= "/CustomerList" component={Customer} />
          <Route path= "/EditCustomer" component={EditCustomer} />
          <Route path="/AddCustomer" component={AddCustomer}/>
          <Route path= "/ProductList" component={ProductList} />
          <Route path= "/EditProduct" component={EditProduct} />
          <Route path= "/AddProduct" component={AddProduct} />
          <Route path="/AdminList" component={Admins} />
          <Route path="/EditAdmin" component={EditAdmins}/>
          <Route path="/AddAdmin" component={AddAdmin} />
          <Route path="/DriverList" component={Drivers} />
          <Route path="/EditDriver" component={EditDrivers}/>
          <Route path="/AddDriver" component={AddDriver}/>

          {/* Driver */}
          <Route path= "/Droplist" component={DropList} />
        </Switch>      
    </div>
    </Router>
  );
}

export default App;
