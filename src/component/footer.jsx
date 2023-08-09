import facebook from "../../src/image/facebook.png";
import linkedin from "../../src/image/linkedin.png";
import insta from "../../src/image/instagram.jpg";
import twitter from "../../src/image/twitter.png";
export const Footer = () => {
  return (
    <div className="bg-[#13263E]  ss:px-[80px] inter pt-14 pb-6 text-white">
      <div className="w-[210px] h-[173px] md:hidden mb-4">
        <p className="text-[45px] ss:text-[62px] font-bold ">Anbuchi</p>
      </div>
      <div className=" grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 justify-items-center gap-12 sm:gap-4 text-[#13263E]">
        <div className="grid gap-4">
          <div className="w-[210px] h-[173px] hidden md:block">
            <p className="text-[58px] font-bold text-white">Anbuchi</p>
          </div>
          <h1 className="text-[20px] font-bold text-white">
            Address and contacts
          </h1>
          <div className="flex gap-2">
            <i class="uil uil-airplay text-white"></i>
            <p className="text-white">No(10). Maharbowga street Yangon</p>
          </div>
          <div className="flex gap-2">
            <i className="uil uil-envelope text-white"></i>
            <p className="text-white">anbuchi@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <i className="uil uil-phone text-white"></i>
            <p className="text-white">+959951575192</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[20px] font-bold">Events</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[20px] font-bold">Contact us</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[20px] font-bold">Partners</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-end justify-center mt-8 sm:mt-0 gap-4">
        <div className="h-[40px] w-[40px]">
          <img src={facebook} alt="" />
        </div>
        <div className="h-[40px] w-[40px]">
          <img src={linkedin} alt="" />
        </div>
        <div className="h-[40px] w-[40px]">
          <img src={insta} alt="" />
        </div>
        <div className="h-[40px] w-[40px]">
          <img src={twitter} alt="" />
        </div>
      </div>
      <span className="w-full h-1 mt-6 bg-white block"></span>
      <div className="flex justify-center mt-4 gap-1 ss:text-[16px] text-[10px]">
        <p>© Copyright 2023. Anbuchi Team |</p>
        <p className="border-b border-1 border-black">Terms of services</p>
        <p>|</p>
        <p className="border-b border-1 border-black">Privacy Policy</p>
      </div>
    </div>
  );
};
