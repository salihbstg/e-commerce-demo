import SelectedProducts from "./SelectedProducts";

const CartInfo = ({ selectedProduct }) => {
  return (
    <div className="cursor-pointer">
      <div className="flex px-6 justify-between border-b py-1 border-black ">
        <div>
          <span>Ürün</span>
        </div>
        <div>
          <span>Fiyat</span>
        </div>
      </div>
      <div>
        {selectedProduct.map((data, index) => {
          return (
            <SelectedProducts
              title={data.title}
              price={data.price}
              key={index}
            ></SelectedProducts>
          );
        })}
      </div>
    </div>
  );
};

export default CartInfo;
