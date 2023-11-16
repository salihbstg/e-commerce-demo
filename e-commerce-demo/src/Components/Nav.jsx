import ShoppingCart from "./ShoppingCart/ShoppingCart";

const Nav = ({count}) => {
   
  return (
    <div className="flex justify-between w-2/3 mx-auto items-center mt-2 mb-10">
      <div>
        <h1 className="text-3xl font-bold">Workshop</h1>
      </div>
      <div className="flex justify-center items-center relative">
        <ShoppingCart count={count}></ShoppingCart>
      </div>
    </div>
  );
};

export default Nav;
