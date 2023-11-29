import "./style1.css";
import Product from "./Product";
function App1() {
  return (
    <div className="App1">
      <h2>PRODUCT</h2>
      <div className="App2">
        <Product
          img="https://static.wixstatic.com/media/9d8ed5_6b6be1c97d1949c2b48bbdd68069ee35~mv2.jpg/v1/fill/w_1000,h_563,al_c/9d8ed5_6b6be1c97d1949c2b48bbdd68069ee35~mv2.jpg"
          name="Product's Name"
          desc="description about the product"
          price="$250"
        />
      </div>
    </div>
  );
}
export default App1;
