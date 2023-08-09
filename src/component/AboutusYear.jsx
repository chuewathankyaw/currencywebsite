import aboutus1 from '../image/about1.jpg'
import aboutus2 from '../image/about2.jpg'

export const AboutusYear = () => {
    return (
      <>
        <div className="ss:mx-36 my-10">
          <div className="sm:flex  gap-10 items-center ">
            <div className=" basis-1/2 mb-5 sm:mb-0 ">
              <img
                src={aboutus1}
                className="hover:rounded-[50px] duration-300 "
                alt=""
              />
            </div>
            <p className="font-medium	  md:font-semibold text-justify basis-1/2 text-[#13263E] text-[12px] md:text-[16px]">
              <span className="text-2xl md:text-4xl font-bold mr-2">L</span>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="sm:flex gap-10 mt-10 items-center">
            <p className="hidden md:block font-medium	  md:font-semibold text-justify basis-1/2 text-[#13263E] text-[12px] md:text-[16px]">
              <span className="text-2xl md:text-4xl font-bold mr-2">L</span>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="basis-1/2 mb-5 sm:mb-0">
              <img
                src={aboutus2}
                className="hover:rounded-[50px] duration-300 "
                alt=""
              />
            </div>
            <p className=" md:hidden font-medium	  md:font-semibold text-justify basis-1/2 text-[#13263E] text-[12px] md:text-[16px]">
              <span className="text-2xl md:text-4xl font-bold mr-2">L</span>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="grid justify-items-center grid-cols-1 ss:grid-cols-2 lg:grid-cols-4 gap-5 my-36">
          <div className="grid items-center gap-5 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.6)] hover:shadow-none hover:bg-[#13263E] hover:text-white duration-300 py-8 px-4 group w-[200px] h-[200px]">
            <p className="text-center text-[40px] font-bold">2023</p>
            <span className="w-full h-[1px] bg-black block group-hover:bg-white"></span>
            <p className="text-center text-[20px] ">Year of founded</p>
          </div>
          <div className="grid items-center gap-5 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.6)] hover:shadow-none hover:bg-[#13263E] hover:text-white duration-300 py-8 px-4 group w-[200px] h-[200px]">
            <p className="text-center text-[40px] font-bold">2023</p>
            <span className="w-full h-[1px] bg-black block group-hover:bg-white"></span>
            <p className="text-center text-[20px] ">Year of founded</p>
          </div>
          <div className="grid items-center gap-5 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.6)] hover:shadow-none hover:bg-[#13263E] hover:text-white duration-300 py-8 px-4 group w-[200px] h-[200px]">
            <p className="text-center text-[40px] font-bold">2023</p>
            <span className="w-full h-[1px] bg-black block group-hover:bg-white"></span>
            <p className="text-center text-[20px] ">Year of founded</p>
          </div>
          <div className="grid items-center gap-5 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.6)] hover:shadow-none hover:bg-[#13263E] hover:text-white duration-300 py-8 px-4 group w-[200px] h-[200px]">
            <p className="text-center text-[40px] font-bold">2023</p>
            <span className="w-full h-[1px] bg-black block group-hover:bg-white"></span>
            <p className="text-center text-[20px] ">Year of founded</p>
          </div>
        </div>
      </>
    );
}