const ShoppingCart = ({count}) => {
  return (
    <>
      <i className="fa-solid text-white fa-cart-shopping text-2xl"></i>
        {count!==0 ? <span className="absolute top-0 right-0 translate-y-[-50%] translate-x-[140%] text-white">{count}</span> : null}
    </>
  )
}

export default ShoppingCart
