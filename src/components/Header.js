import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = (props) => {
  return (
    <>
      <Navbar oncartShowHandler={props.onCartShowButtonHandler} />
      <Hero />
    </>
  );
};

export default Header;
