import "./App.css";
import Card from "./Components/Card/Card";
import { Data } from "./Data/Products";
import Nav from "./Components/Nav";
import { useState } from "react";
import CartInfo from "./Components/Info/CartInfo";
function App() {
  const [count, setCount] = useState(Number(0));
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <>
      <Nav count={count}></Nav>
      <div className="flex gap-6 justify-center">
        {Data.map((data, index) => (
          <Card
            setSelectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
            count={count}
            setCount={setCount}
            url={data.url}
            title={data.title}
            description={data.description}
            key={index}
            price={data.price}
          ></Card>
        ))}
      </div>
      {selectedProduct.length === 0 ? (
        ""
      ) : (
        <div className="mt-3 flex justify-end w-3/4 mx-auto ">
          <div className="w-56  bg-white min-h-[200px] me-8 mt-4">
            <CartInfo selectedProduct={selectedProduct}></CartInfo>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
