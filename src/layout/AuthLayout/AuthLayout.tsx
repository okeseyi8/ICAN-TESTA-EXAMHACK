import { useEffect,  } from "react";

import "./Auth.css";
import AOS from 'aos'
import 'aos/dist/aos.css'



const AuthLayout = ({ children }: LayoutProps) => {
    useEffect(() => {
    AOS.init({
           
      once: true,        
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div className="w-full flex h-screen ">
      <div className='w-[50%] auth  bg-[url("/images/ican-img-01.jpg")]'>
        <div className="auth-content mt-[70px] ml-[50px]">
          <h1 className="font-bold text-[36px]  orb tracking-[8px] text-[var(--primary-color)] ">
            TESTA
          </h1>
          <div className="text-[#fff]   mt-[260px] flex flex-col justify-center">
            <h1 data-aos="fade-up" data-aos-delay="300" className="font-bold text-[64px]">Get Started Now</h1>
            <h3 data-aos="fade-up" data-aos-delay="500"  className="font-medium text-3xl">Create an account or Login</h3>
          </div>
        </div>
      </div>
      <div className="w-[50%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
