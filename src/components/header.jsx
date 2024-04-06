import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const [data, setData] = useState({});
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 765 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const toggleNav = () => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data.json");
        setData(response.data.header);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header>
      <div className="bg-white font-paypal-open shadow-md flex justify-between items-center px-[20px] sm:px-[30px] md:px-[50px]  py-6">
        <div className="flex items-center justify-evenly gap-x-10 text-base font-medium text-[#001C64]">
       <a href="/">   <img src={data.logo} alt="Logo" className="h-8 w-auto" /> </a>
          {data.links &&
            data.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="hidden lg:flex hover:text-gray-800"
              >
                {link.text}
              </a>
            ))}
        </div>
        <div className=" flex items-center space-x-4 text-lg font-medium">
          <button className="hidden lg:flex btnClass text-[#003087] hover:text-[#0070e0] border-[#003087] border-2 hover:border-[#0070e0] hover:border-2">
            {data.login}
          </button>
          <button className="hidden lg:flex btnClass text-white w-[130px] bg-[#001C64] hover:bg-[#005EA6]">
            {data.signup}
          </button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={toggleNav}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      {openNav ? (
        <div className="w-full shadow-md bg-white">
          {data.links &&
            data.links.map((link) => (
              <div key={link.id} className="w-full">
                <a
                  key={link.id}
                  href={link.url}
                  className="flex mx-6 py-3 text-[#001C64] hover:text-[#0070e0] border-b-2 border-gray-300"
                >
                  {link.text}
                </a>
              </div>
            ))}
          <div className="flex gap-4 mx-6 py-3">
            <button className="btnClass flex btnClass text-[#003087] hover:text-[#0070e0] border-[#003087] border-2 hover:border-[#0070e0] hover:border-2">
              {data.login}
            </button>
            <button className="flex btnClass text-white w-[130px] bg-[#001C64] hover:bg-[#005EA6]">
              {data.signup}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
