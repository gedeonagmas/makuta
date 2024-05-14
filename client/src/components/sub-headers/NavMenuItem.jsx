import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const NavMenuItem = ({
  nav,
  setIsSideNavOpen,
  isSubMenuOpen,
  setIsSubMenuOpen,
}) => {
  // side nav toggler
  const sideNavToggler = () => {
    const mainSideNav = document.getElementById("main-side-nav");
    if (mainSideNav?.classList.contains("w-[0vw]")) {
      mainSideNav?.classList.remove("w-[0vw]");
      mainSideNav?.classList.add("w-[100vw]");
      setIsSideNavOpen(true);
    } else {
      mainSideNav?.classList.add("w-[0vw]");
      mainSideNav?.classList.remove("w-[100vw]");
      setIsSideNavOpen(false);
    }
  };

  // sub menu toggler
  const subMenuToggler = (nav) => {
    const subMenuListContainer = document.getElementById('sub-menu-list-container')
    if (isSubMenuOpen) {
      if (isSubMenuOpen === nav.navText) {
        // setIsSubMenuOpen(null);
        subMenuListContainer?.classList.toggle('hidden')
      } else {
        setIsSubMenuOpen(nav.navText);
      }
    } else {
      setIsSubMenuOpen(nav.navText);
    }
  };

  return (
    <>
      {nav.subMenus ? (
        <>
          <li
            className={`cursor-pointer w-[35%] sm:w-auto flex items-center justify-between gap-x-2 main-link-hover-effect relative ${isSubMenuOpen === nav.navText ? 'after:w-full font-semibold' : ''}`}
            onClick={() => {
              subMenuToggler(nav);
            }}
          >
            <span>{nav.navText}</span>
            {isSubMenuOpen === nav.navText ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}

            {isSubMenuOpen === nav.navText ? (
              <motion.div
                initial={{ scale: 0.75 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.35 }}
                id="sub-menu-list-container"
                className={`absolute whitespace-nowrap py-[5%] px-[25%] font-normal w-fit left-0 top-[100%] bg-white shadow-lg z-[150] rounded-sm ${
                  isSubMenuOpen === nav.navText ? "" : "hidden"
                }`}
              >
                <ul className="p-[3%] ">
                  {nav?.subMenus.map((menu, index) => (
                    <li key={index} className="my-1 px-10 transition-all ease-in-out duration-300 hover:bg-gray-300">
                      <NavLink to={`/${menu.path}`} onClick={() => {
                        sideNavToggler()
                      }}>{menu?.subMenuText}</NavLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <></>
            )}
          </li>
        </>
      ) : (
        <li className={`main-link-hover-effect w-max sm:w-auto ${isSubMenuOpen === nav.navText ? 'after:w-full font-semibold' : ''}`}>
          <NavLink
            to={`/${nav?.path}`}
            onClick={() => {
              sideNavToggler();
              setIsSubMenuOpen(nav.navText);
            }}
          >
            {nav.navText}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavMenuItem;
