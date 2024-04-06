import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [data, setData] = useState({});
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="w-full font-paypal-open bg-white shadow-md flex flex-col justify-between px-[20px] sm:px-[30px] md:px-[50px] py-6 text-sm font-medium">
      <div>
        <img width={"155"} height={"40"} alt="logo" src="/PaypalLogo.png" />
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 border-b-2 pb-4">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-x-6 gap-2  mb-4 md:mb-0">
          {data.footer &&
            data.footer[0]?.footerTopLinks &&
            data.footer[0].footerTopLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-[#001C64] text-sm font-bold"
              >
                {link.text}
              </a>
            ))}
        </div>
        <img
          alt="usa logo"
          width={"25"}
          height={"auto"}
          src={data.footer && data.footer[0]?.logo}
          className="max-w-[30%]"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 pt-4">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-x-6 gap-2  mb-4 md:mb-0">
          {data.bottomFooter &&
            data.bottomFooter[0]?.links &&
            data.bottomFooter[0].links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-[#001C64] text-sm font-bold"
              >
                {link.text}
              </a>
            ))}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap md:items-center gap-4 ">
          <div>
            <p className="text-[#545d68] text-sm ">© 1999–{currentYear}</p>
          </div>
          <div className="flex items-center flex-wrap gap-x-6">
            {data.bottomFooter &&
              data.bottomFooter[0]?.linksTwo &&
              data.bottomFooter[0].linksTwo.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="text-[#001C64] text-sm font-bold"
                >
                  {link.text}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
