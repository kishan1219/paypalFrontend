import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const helpTopics = [
  { id: 1, text: "PayPal Help Guides" },
  { id: 2, text: "Payments & Transfers" },
  { id: 3, text: "Disputes & Limitations" },
  { id: 4, text: "My Account" },
  { id: 5, text: "My Wallet" },
  { id: 6, text: "Login & Security" },
  { id: 7, text: "Seller Tools" },
];
const commonQuestions = [
  { id: 1, text: "How do I open a case with a seller?" },
  { id: 2, text: "I forgot my password. How do I reset it?" },
  { id: 3, text: "Why is my payment on hold or unavailable?" },
  { id: 4, text: "I want my money back. Can I cancel a payment?" },
  {
    id: 5,
    text: "Why am I receiving emails from PayPal when I don't have an account?",
  },
  {
    id: 6,
    text: "How do I report an unauthorized transaction or account activity?",
  },
  { id: 7, text: "Why is the payment I sent pending? Can I cancel it?" },
  { id: 8, text: "How do I request a refund?" },
  { id: 9, text: "Why was my payment declined?" },
  { id: 10, text: "How do I change the name on my PayPal account?" },
];
const FAQ = () => {
  // State to manage active button index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1050px] grid justify-center mx-auto">
      {/* Button banner start here */}

      <div className="grid w-full md:w-[700px] place-items-center rounded-full p-1 bg-gray-200 mx-auto">
        <div className="flex w-full divide-gray-800 row">
          <button
            className={`align-middle select-none text-center transition-all text-xs py-4 px-6 ${
              activeIndex === 0
                ? "bg-white font-bold text-[#005EA6] focus:opacity-[0.85] focus:shadow-none opacity-[0.85]"
                : "bg-transparent text-[#001435]"
            } block w-full rounded-full border-none`}
            type="button"
            onClick={() => setActiveIndex(0)}
          >
            Personal Help
          </button>
          <button
            className={`align-middle select-none  text-center transition-all text-xs py-4 px-6 ${
              activeIndex === 1
                ? "bg-white text-[#005EA6] focus:opacity-[0.85] focus:shadow-none font-bold opacity-[0.85]"
                : "bg-transparent text-[#001435] "
            } block w-full rounded-full border-none`}
            type="button"
            onClick={() => setActiveIndex(1)}
          >
            Business Help
          </button>
          <button
            className={`align-middle select-none text-center transition-all text-xs py-4 px-6 ${
              activeIndex === 2
                ? "bg-white text-[#005EA6] focus:opacity-[0.85] focus:shadow-none font-bold opacity-[0.85]"
                : "bg-transparent text-[#001435] "
            } block w-full rounded-full border-none`}
            type="button"
            onClick={() => setActiveIndex(2)}
          >
            Technical Help
          </button>
        </div>
      </div>
      {/* Button banner end here */}
      <div className="w-full flex flex-col justify-center sm:flex-row gap-6 mt-8 text-base mx-auto">
        <div className=" max-h-[245px] mx-auto sm:mx-0 ">
          <ul className="hidden sm:grid ">
            <li className="bg-blue-200  text-[#005EA6] font-bold w-[250px] px-2 py-2 border-l-4 border-blue-500">
              common questions
            </li>

            {helpTopics.map((item) => (
              <li
                key={item.id}
                className="text-[#001435] px-2 py-3 font-medium"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid justify-center mx-auto pl-2 sm:pl-0">
          <h3 className="text-xl text-[#001435] font-bold py-2">
            Common Questions
          </h3>
          <ul className="lg:text-xl text-blue-500 font-bold">
            {commonQuestions.map((faq) => (
              <li className="py-2" key={faq.id}>
                <h3>{faq.text}</h3>
              </li>
            ))}
          </ul>
        </div>
        <Card className="mt-6 w-[325px] h-[300px] bg-blue-100">
          <CardBody className="grid justify-center items-center text-center py-12 gap-6">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-0 font-bold"
            >
              Get customized help with your account and access your message
              center
            </Typography>
            <Button className="flex justify-center items-center w-[100px] mx-auto h-12 rounded-3xl text-[#003087]  hover:text-[#0070e0] border-[#003087] border-2 hover:border-[#0070e0] hover:border-2">
              Login
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
