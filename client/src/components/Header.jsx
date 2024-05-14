// sub header components
import HeaderTop from "./sub-headers/HeaderTop";
import HeaderBottom from "./sub-headers/HeaderBottom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[300] bg-white">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
