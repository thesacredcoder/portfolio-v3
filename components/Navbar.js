import { MenuAlt4Icon, ArrowSmUpIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const NavBarContent = ({ setActive, active }) => {
  const tl = gsap.timeline({ paused: true });
  useEffect(() => {
    tl.from(".fullNav", {
      y: "-100%",
      opacity: 0,
      display: "none",
      duration: 2,
    });
    active === false ? tl.reversed(1) : tl.play();
  }, [active]);

  const handleClick = () => {
    setActive(false);
    tl.to(".fullNav", { y: "-100%", duration: 2 });
    tl.play();
  };

  return (
    <div className="h-screen w-full px-16 py-4 fullNav">
      <div className="w-full flex justify-end">
        <ArrowSmUpIcon
          className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer text-white"
          onClick={handleClick}
        />
      </div>
      <div className="text-xl md:text-4xl lg:text-7xl font-josefin font-bold md:space-y-4 lg:space-y-8">
        <h1 className="navlinks">
          <a href="#" className="hover:text-secondary-200 cursor-pointer">
            Ab<span className="text-secondary-200 hover:text-white">o</span>ut
          </a>
        </h1>
        <h1 className="navlinks cursor-pointer">
          {/* <a href="#">
          </a> */}
          Pro<span className="text-secondary-200">je</span>cts
        </h1>
        <h1 className="navlinks">
          <a href="#">
            Con<span className="text-secondary-200">t</span>act
          </a>
        </h1>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div>
      {!active ? (
        <div className="filter backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4 max-w-md md:max-w-2xl lg:max-w-7xl mx-auto text-white">
            <h1 className="text-2xl md:text-3xl lg:text-3xl leading-normal cursor-pointer">
              Akash.
            </h1>
            <MenuAlt4Icon
              className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      ) : (
        <NavBarContent setActive={setActive} active={active} />
      )}
    </div>
  );
}
