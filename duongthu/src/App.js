import logo from './logo.svg';
import './App.css';
import Product from './Product';
import './style.css';

function App() {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="App">
        <Product
          img="https://tse2.mm.bing.net/th?id=OIP.0FnCORUy9FIkG8vu7XPIUQHaHa&pid=Api&P=0&h=180"
          name="New product"
          desc="The new product of Nike"
          price="$200"
        />
       <Product
          img="https://tse2.mm.bing.net/th?id=OIP.0FnCORUy9FIkG8vu7XPIUQHaHa&pid=Api&P=0&h=180"
          name="New product"
          desc="The new product of Nike"
          price="$200"
        />
          <Product
          img="https://tse2.mm.bing.net/th?id=OIP.0FnCORUy9FIkG8vu7XPIUQHaHa&pid=Api&P=0&h=180"
          name="New product"
          desc="The new product of Nike"
          price="$200"
        />
        <Product
        img="https://tse2.mm.bing.net/th?id=OIP.0FnCORUy9FIkG8vu7XPIUQHaHa&pid=Api&P=0&h=180"
        name="New product"
        desc="The new product of Nike"
        price="$200"
        />
        
      </div>
    </div>
  );
}
export default App;