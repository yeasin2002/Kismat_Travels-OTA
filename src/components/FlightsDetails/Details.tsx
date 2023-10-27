import React from "react";

const Details = () => {
  return (
    <>
      <div className="w-full rounded-md border border-gray-300 p-2 ">
        <p>New Delhi to Mumbai , 26 Oct</p>
        <hr />
        <div>
          <div className="my-6 flex  ">
            <span className="mr-2 h-6 w-6 bg-teal-500"></span>
            <p>SpiceJet SG </p>
            <p className="mx-2">|</p>
            <p>8709 </p>
          </div>

          <div className="grid grid-cols-1  gap-x-10 lg:grid-cols-2 ">
            <div>
              <div className=" my-4 flex w-full flex-col  items-center  justify-between gap-x-2 space-y-6 lg:flex-row">
                <div>
                  <div className="flat-center items-center  ">
                    <p className="text-2xl font-bold text-gray-800">19:05</p>
                    <p className="text-sm font-bold text-gray-700">Thu, 26 Oct 23</p>
                  </div>
                  <div className="flat-center mt-3">
                    <p className="font-light"> Terminal 3</p>
                    <p className="font-light">New Delhi, India</p>
                  </div>
                </div>
                <div className="flat-center justify-center ">
                  <p>02 h 20 m</p>
                  <span className="inline-block h-1 w-20 rounded-full bg-teal-400 lg:w-full "></span>
                  <p>non stop</p>
                </div>
                <div>
                  <div className="flat-center">
                    <p className="text-2xl font-bold text-gray-800">19:05</p>
                    <p className="text-sm font-bold text-gray-700">Thu, 26 Oct 23</p>
                  </div>
                  <div className="flat-center mt-3">
                    <p className="font-light"> Terminal 3</p>
                    <p className="font-light">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-around">
              <div className="">
                <p>BAGGAGE :</p>
                <p>ADULT</p>
              </div>
              <div className="">
                <p>CHECK IN :</p>
                <p>15 Kgs (1 piece only)</p>
              </div>
              <div className="">
                <p>CABIN :</p>
                <p>7 Kgs (1 piece only)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
