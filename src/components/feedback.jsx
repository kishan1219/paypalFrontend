import React from 'react';

const Feedback = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-x-5 items-center bg-[#faf8f5] w-[300px] sm:w-[600px] lg:w-[800px] mx-auto mt-14 lg:mt-16 mb-16 lg:mb-44 text-[#003087] p-6 text-base">
   <div className='w-[260px] sm:w-[360px]'>

    <h1 className="font-bold mb-4">How are we doing?</h1>
    <p>Help improve the <span className='text-base font-bold'>
    PayPal Help Center experience
    </span>  with some quick feedback.</p>
   </div>
    <button className="bg-[#003087] rounded-full text-white text-base font-normal py-2 px-4 shadow-sm hover:bg-opacity-75">Take the survey</button>
  </div>
  );
};

export default Feedback;
