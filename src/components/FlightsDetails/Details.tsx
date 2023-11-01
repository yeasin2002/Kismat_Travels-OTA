import airways from "$assets/temp/qatar-airways.jpg";
import Image from "next/image";

const Details = () => {
  return (
    <>
      <div className="w-full rounded-md border border-gray-300 p-2 ">
        <p className="px-2 py-4">New Delhi to Mumbai , 26 Oct</p>
        <hr />
        <div className="p-4">
          <div className="flex items-center space-x-2 ">
            <Image src={airways} alt="Picture of the airways" className="h-10 w-10 rounded-sm" />
            <span>
              <p className="text-base font-semibold">Qatar Airways</p>
              <p className="text-xs">QR-123</p>
            </span>
          </div>

          <div className="space-y-4 ">
            <div>
              <div className=" my-4 flex w-full flex-col  items-center   justify-between gap-x-2 space-y-6 lg:flex-row">
                <div>
                  <div className="flat-center items-center   ">
                    <p className="text-xl font-semibold text-gray-800">19:05</p>
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
                    <p className="text-xl font-semibold text-gray-800">19:05</p>
                    <p className="text-sm font-bold text-gray-700">Thu, 26 Oct 23</p>
                  </div>
                  <div className="flat-center mt-3">
                    <p className="font-light"> Terminal 3</p>
                    <p className="font-light">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <div className="">
                <p className="ticketExtraDetailsTitle">BAGGAGE :</p>
                <p className="ticketExtraDetailsItem">ADULT</p>
              </div>
              <div className="">
                <p className="ticketExtraDetailsTitle">CHECK IN :</p>
                <p className="ticketExtraDetailsItem">15 Kgs (1 piece only)</p>
              </div>
              <div className="">
                <p className="ticketExtraDetailsTitle">CABIN :</p>
                <p className="ticketExtraDetailsItem">7 Kgs (1 piece only)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

