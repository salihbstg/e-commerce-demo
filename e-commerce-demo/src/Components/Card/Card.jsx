const Card = ({ url, title, description, price, setCount, count ,setSelectedProduct,selectedProduct }) => {
  return (
    <div className={`bg-white text-black rounded-xl p-4 flex flex-col items-center gap-3`}>
      <div>
        <span className="font-bold">{price}₺</span>
      </div>
      <div className="w-56 border border-black">
        <img src={url} alt="" className="w-full h-36" />
      </div>
      <div className="flex gap-3 flex-col items-center">
        <h3 className="text-center font-bold">{title}</h3>
        <span>{description}</span>
        <button
          onClick={(event) => {
            setCount(count + 1);
            setSelectedProduct([...selectedProduct,{title:title,price:price}]);
            event.target.disabled=true;
            event.target.className="bg-gray-300 w-36 p-3";
          }}
          className="w-36 rounded-2xl bg-gray-600 p-3 hover:bg-slate-500 transition-all"
        >
          Sepete ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
