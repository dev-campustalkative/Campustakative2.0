"use client";

import Container from "../Container";
import Join from "./Join";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="py-4 ">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Menu />
            <Join />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
