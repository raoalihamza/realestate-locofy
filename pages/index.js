import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";

const LandingPage = () => {
  return (
    <main className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <Header />
      <HeroSection />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <div className="self-stretch flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
        <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
          <div className="flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img
                className="relative w-11 h-11"
                alt=""
                src="/houseline1.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  REIS
                </div>
                <div className="relative text-sm leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
              <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
                Contact Us
              </div>
              <div className="relative leading-[24px]">Call : +123 400 123</div>
              <div className="relative leading-[24px] flex items-end w-[312px]">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className="relative leading-[24px] text-gray-700">
                Email: example@mail.com
              </div>
            </div>
            <div className="w-[304px] flex flex-row items-center justify-between">
              <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-[21.67px]"
                  alt=""
                  src="/social-media-logo.svg"
                />
              </a>
              <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo1.svg"
                />
              </a>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <a className="[text-decoration:none] relative w-5 h-5 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </a>
              </div>
              <a className="[text-decoration:none] rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo2.svg"
                />
              </a>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <a className="[text-decoration:none] relative w-5 h-5 overflow-hidden shrink-0">
                  <img
                    className="absolute h-[62.5%] w-[99.98%] top-[16.67%] right-[0.02%] bottom-[20.83%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Features
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Home
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Become a Host
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Pricing
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Blog
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Contact
              </a>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">Company</div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                About Us
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Press
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Contact
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Careers
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Blog
              </a>
            </div>
          </div>
          <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Team and policies
            </div>
            <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Terms of servies
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Privacy Policy
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Security
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
