import { useEffect } from "react";

// import "./Auth.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AuthLayout = ({ children }: LayoutProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="w-full flex flex-col  lg:flex-row lg:min-h-screen  ">
      <div className="lg:w-[50%]  relative overflow-hidden">
        <img
          src="/images/icanloginimg.png"
          alt="ICAN background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <div className="relative z-[2] lg:mt-[70px] mt-5 lg:ml-[50px] ml-[25px]">
          <h1 className="font-bold text-[36px] orb tracking-[8px] text-[var(--primary-color)]">
            TESTA
          </h1>

          <div className="text-white lg:mt-[260px]  my-[30px] flex flex-col justify-center ">
            <h1
              data-aos="fade-up"
              data-aos-delay="300" 
              className="font-bold lg:text-[64px] text-[30px]"
            >
              Get Started Now
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-delay="500"
              className="font-medium lg:text-3xl text-[20px]"
            >
              Create an account or Login
            </h3>
          </div>
        </div>
      </div>

      <div className="lg:w-[50%] rounded-t-2xl lg:rounded-none z-50 -mt-4 lg:mt-0 bg-white ">{children}</div>
    </div>
  );
};

export default AuthLayout;
