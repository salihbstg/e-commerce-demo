const SelectedProducts = ({ title, price }) => {
  return (
    <div className="flex px-6 justify-between mt-2" onClick={event=>event.target.className==="child"?event.target.parentElement.remove():event.target.remove()}>
      <span className="child">{title}</span>
      <span className="child">{price}₺</span>
    </div>
  );
};

export default SelectedProducts;
