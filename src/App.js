import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter,Route,Routes } from 'react-router';



function App() {
  return (
    <BrowserRouter>
    <div >

      <Layout>
        <Routes>
          <Route path="/" element={<BurgerBuilder/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
