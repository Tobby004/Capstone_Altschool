import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import UpdatedDesignLogo from "components/UpdatedDesignLog";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ScissorPage = () => {
  const navigate = useNavigate();

  // Define navigation handlers
  const handleSignupClick = () => navigate('/signup');
  const handleLoginClick = () => navigate('/login');

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleFeaturesButtonClick = () => {
      const featuresSection = document.getElementById('features-section');
    
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return (
  <>
  <div className="flex flex-col font-gilroysemibold items-start justify-start mx-auto w-auto sm:w-full md:w-full">
      <div className="bg-white-A700 flex flex-col gap-14 items-center justify-start w-full">
        <div className="md:h-[404px] h-[551px] max-w-[1150px] mx-auto md:px-5 relative w-full">
          <Img
            className="absolute h-[404px] hidden inset-x-[0] mx-auto top-[0]"
            src="images/img_aurora.svg"
            alt="aurora" />
          <div className="absolute bottom-[0] flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto w-auto">
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <div className="font-kanit h-[200px] relative w-full">
                <Text
                  className="leading-[96.00px] m-auto text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-full"
                  size="txtKanitSemiBold48">
                  <span className="text-gray-900 font-gilroybold font-normal">
                    {" "}
                    Optimize Your Online Experience with Our Advanced
                  </span>
                  <span className="text-blue-700 font-gilroybold font-normal">
                    {" "}
                    URL Shortening
                  </span>
                  <span className="text-gray-900 font-gilroybold font-normal">
                    {" "}
                    Solution
                  </span>
                </Text>
                <Img
                  className="absolute bottom-[6%] h-[19px] inset-x-[0] mx-auto"
                  src="images/img_vector3.svg"
                  alt="vectorThree" />
              </div>
              <Text
                className="leading-[28.00px] max-w-[781px] md:max-w-full text-center text-gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Personalize your shortened URLs to align with your brand
                identity. Utilize custom slugs, branded links, and domain
                customization options to reinforce your brand presence and
                enhance user engagement.
              </Text>
            </div>
            <div className="flex flex-row gap-14 items-center justify-start w-auto">
              <Button className="cursor-pointer h-11 text-base text-center w-[142px]" onClick={handleSignupClick}>
                Sign Up
              </Button>
              <a
                href="javascript:"
                className="text-base text-blue-A700 w-auto"
              >
                <Text size="txtGilroySemiBold16">Learn more</Text>
              </a>
            </div>
          </div>
          
          <header className="absolute flex md:flex-col flex-row font-gilroybold md:gap-10 gap-[140px] inset-x-[0] items-center justify-center mx-auto top-[2%] w-full">
            <UpdatedDesignLogo className="flex flex-row gap-2 items-start justify-start p-2 w-auto" />
            <ul className="flex sm:flex-1 sm:flex-col flex-row font-gilroymedium gap-10 sm:hidden items-start justify-start w-auto sm:w-full common-row-list">
              <li>
                <a href="javascript:" className="text-blue-A700 text-lg">
                  <Text size="txtGilroyMedium18BlueA700">My URLs</Text>
                </a>
              </li>
              <li>
              <div className="flex flex-row items-start justify-center">
              <a href="#features-section" onClick={toggleDropdown} className="flex flex-row items-start justify-center cursor-pointer">
  <Text className="hover:text-blue-A700 text-gray-900 text-lg" size="txtGilroyMedium18">Features</Text>
  <Img className="h-6 ml-1 w-6" src="images/img_arrowdown.svg" alt="arrowdown" />
</a>

      </div>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:text-blue-A700 text-gray-900 text-lg"
                >
                  <Text size="txtGilroyMedium18">Pricing</Text>
                </a>
              </li>
              <li>
                <a href="javascript:"
                  className="hover:text-blue-A700 text-gray-900 text-lg"
                >
                  <Text size="txtGilroyMedium18">Analytics</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:text-blue-A700 text-gray-900 text-lg"
                >
                  <Text size="txtGilroyMedium18">FAQs</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row font-gilroysemibold gap-6 items-center justify-start w-auto">
              <a href="javascript:"
                className="text-base text-blue-A700 w-auto">
                <button onClick={handleLoginClick} className="txtGilroySemiBold16">Log in</button></a>
              <Button className="cursor-pointer h-11 text-base text-center w-[142px]">
                Try for free
              </Button>
            </div>
          </header>
          
        </div>
        <div className="bg-white-A700 flex flex-col font-gilroybold md:gap-10 gap-32 items-center justify-start pb-[130px] w-full">
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 gap-[120px] items-center justify-center md:px-10 sm:px-5 px-[140px] py-[60px] w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="leading-[48.00px] max-w-[337px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtGilroyBold40">
                <span className="text-gray-900 font-gilroybold text-left font-normal">
                  <>
                    One Stop.
                    <br />
                    Four
                  </>
                </span>
                <span className="text-blue-700 font-gilroybold text-left font-normal">
                  {" "}
                  Possibilities
                </span>
                <span className="text-gray-900 font-gilroybold text-left font-normal">
                  .
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-end w-auto md:w-full">
              <div className="flex flex-row gap-[72px] items-start justify-center px-1 w-auto">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtGilroySemiBold32"
                  >
                    3M
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtGilroyMedium16"
                  >
                    Active users
                  </Text>
                </div>
                <div className="flex flex-col gap-1 h-[100px] md:h-auto items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtGilroySemiBold32"
                  >
                    60M
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[123px] md:max-w-full text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Links & QR codes created
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[72px] items-start justify-center px-1 w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                        size="txtGilroySemiBold32"
                      >
                        1B
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[143px] md:max-w-full text-base text-gray-900"
                        size="txtGilroyMedium16"
                      >
                        Clicked & Scanned connections
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtGilroySemiBold32"
                  >
                    300k
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtGilroyMedium16"
                  >
                    App Integrations
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-start justify-start max-w-[1202px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-end justify-start w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row font-gilroybold gap-4 items-center justify-start w-auto sm:w-full">
                <Line className="bg-gradient  h-12 sm:h-px sm:w-full w-px" />
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
                  size="txtGilroyBold40"
                >
                  <span className="text-gray-900 font-gilroybold text-left font-normal">
                    Why choose{" "}
                  </span>
                  <span className="text-blue-700 font-gilroybold text-left font-normal">
                    Scissors
                  </span>
                </Text>
              </div>
              <Text
                className="leading-[28.00px] max-w-[370px] md:max-w-full text-base text-gray-900"
                size="txtGilroyMedium16">
                Scissors is the hub of everything that has to do with your link
                management. We shorten your URLs, allow you creating custom ones
                for your personal, business, event usage. Our swift QR code
                creation, management and usage tracking with advance analytics
                for all of these is second to none.{" "}
              </Text>
            </div>
            <div id="features-section">
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-7 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <Link to="/url-shortening">
    <Img className="h-14 w-14" src="images/img_clock.svg" alt="clock" />
  </Link>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                      size="txtGilroySemiBold32"
                    >
                      URL Shortening
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[340px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Scissor allows you to shorten URLs of your business,
                      events. Shorten your URL at scale, URL redirects.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <Link to="/custom-urls">
    <Img className="h-14 w-14" src="images/img_user.svg" alt="user" />
  </Link>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                      size="txtGilroySemiBold32"
                    >
                      Custom URLs
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[340px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      With Scissor, you can create custom URLs, with the length
                      you want! A solution for socials and businesses.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                 <Link to="/qr-code-generation">
                <Img
                    className="h-14 w-14"
                    src="images/img_floatingicon.svg"
                    alt="floatingicon" />
                    </Link>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                      size="txtGilroySemiBold32"
                    >
                      QR Codes
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[340px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Generate QR codes to your business, events. Bring your
                      audience and customers to your doorstep with this scan and
                      go solution.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <Link to="/analytics">
                  <Img
                    className="h-14 w-14"
                    src="images/img_close.svg"
                    alt="close" />
                    </Link>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                      size="txtGilroySemiBold32"
                    >
                      Data Analytics
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[340px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Receive data on the usage of either your shortened URL,
                      custom URLs or generated QR codes. Embedded to monitor
                      progress.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-gilroymedium md:gap-10 gap-[68px] items-center justify-start p-[42px] md:px-10 sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
            <Line className="bg-gradient  h-12 sm:h-px sm:w-full w-px" />
            <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 w-auto"
                size="txtGilroyBold40"
              >
                <span className="text-gray-900 font-gilroybold font-normal">
                  A{" "}
                </span>
                <span className="text-blue-700 font-gilroybold font-normal">
                  price perfect
                </span>
                <span className="text-gray-900 font-gilroybold font-normal">
                  {" "}
                  for your needs.
                </span>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[556px] md:max-w-full text-base text-center text-gray-900"
                size="txtGilroyMedium16"
              >
                From catering for your personal, business, event, socials needs,
                you can be rest assured we have you in mind in our pricing.
              </Text>
            </div>
          </div>
          <div className="sm:h-[614px] h-[627px] md:h-[924px] max-w-[1088px] mx-auto relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[330px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-blue-700 border-solid flex flex-1 flex-col gap-[34px] items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Basic
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start mb-5 w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 w-auto"
                        size="txtGilroyBold40"
                      >
                        Free
                      </Text>
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtGilroyMedium20"
                      >
                        Free plan for all users
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="unlimitedurlsho_One"
                        id="unlimitedurlsho_One"
                        label="Unlimited URL Shortening"
                      ></CheckBox>
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="basiclinkanalyt_One"
                        id="basiclinkanalyt_One"
                        label="Basic Link Analytics"
                      ></CheckBox>
                      <CheckBox
                        className="text-black-900 text-center text-sm"
                        inputClassName="mr-[5px]"
                        name="customizablesho_One"
                        id="customizablesho_One"
                        label="Customizable Short Links"
                      ></CheckBox>
                      <CheckBox
                        className="text-black-900 text-center text-sm"
                        inputClassName="mr-[5px]"
                        name="standardsupport_One"
                        id="standardsupport_One"
                        label="Standard Support"
                      ></CheckBox>
                      <CheckBox
                        className="text-black-900 text-center text-sm"
                        inputClassName="mr-[5px]"
                        name="adsupported"
                        id="adsupported"
                        label="Ad-supported"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue-700 border-solid flex flex-1 flex-col gap-[34px] justify-start sm:ml-[0] p-[26px] sm:px-5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="md:ml-[0] ml-[53px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Teams
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start mb-4 md:ml-[0] ml-[59px] mr-[39px] w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 w-auto"
                        size="txtGilroyBold40"
                      >
                        <span className="text-gray-900 font-gilroybold font-normal">
                          $25/
                        </span>
                        <span className="text-gray-900 font-gilroybold font-normal">
                          month
                        </span>
                      </Text>
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtGilroyMedium20"
                      >
                        Share with up to 10 users
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="teamcollaborati_One"
                        id="teamcollaborati_One"
                        label="Team Collaboration"
                      ></CheckBox>
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="userrolesandper_One"
                        id="userrolesandper_One"
                        label="User Roles and Permissions"
                      ></CheckBox>
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="enhancedsecurit_One"
                        id="enhancedsecurit_One"
                        label="Enhanced Security"
                      ></CheckBox>
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="apiaccess"
                        id="apiaccess"
                        label="API Access"
                      ></CheckBox>
                      <CheckBox
                        className="text-center text-gray-900 text-sm"
                        inputClassName="mr-[5px]"
                        name="dedicatedaccoun_One"
                        id="dedicatedaccoun_One"
                        label="Dedicated Account Manager"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute bg-gradient1  flex flex-col gap-6 h-full inset-[0] items-start justify-center m-auto p-[65px] md:px-10 sm:px-5 rounded-[12px] shadow-bs w-[38%]">
              <Text
                className="mt-[29px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtGilroyMedium24WhiteA700"
              >
                Professional
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start mb-[83px] w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                    size="txtGilroyBold40WhiteA700"
                  >
                    <span className="text-white-A700 font-gilroybold font-normal">
                      $15/
                    </span>
                    <span className="text-white-A700 font-gilroybold font-normal">
                      month
                    </span>
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl w-auto"
                    size="txtGilroyMedium20WhiteA700"
                  >
                    Ideal for business creators
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-[215px] sm:w-full">
                  <CheckBox
                    className="text-center text-sm text-white-A700"
                    inputClassName="mr-[5px]"
                    name="enhancedlinkana_One"
                    id="enhancedlinkana_One"
                    label="Enhanced Link Analytics"
                  ></CheckBox>
                  <CheckBox
                    className="text-center text-sm text-white-A700"
                    inputClassName="mr-[5px]"
                    name="custombrandeddo_One"
                    id="custombrandeddo_One"
                    label="Custom Branded Domains"
                  ></CheckBox>
                  <CheckBox
                    className="text-center text-sm text-white-A700"
                    inputClassName="mr-[5px]"
                    name="advancedlinkcus_One"
                    id="advancedlinkcus_One"
                    label="Advanced Link Customization"
                  ></CheckBox>
                  <CheckBox
                    className="text-center text-sm text-white-A700"
                    inputClassName="mr-[5px]"
                    name="prioritysupport_One"
                    id="prioritysupport_One"
                    label="Priority Support"
                  ></CheckBox>
                  <CheckBox
                    className="text-center text-sm text-white-A700"
                    inputClassName="mr-[5px]"
                    name="adfreeexperienc_One"
                    id="adfreeexperienc_One"
                    label="Ad-free Experience"
                  ></CheckBox>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-gilroysemibold gap-3 items-start justify-start mb-[70px] w-auto sm:w-full">
            <Button
              className="cursor-pointer h-12 rounded-[24px] text-base text-center w-[200px]"
              variant="outline"
            >
              Get Custom Pricing
            </Button>
            <Button className="cursor-pointer h-12 rounded-[24px] text-base text-center w-[200px]">
              Select Pricing
            </Button>
          </div>
        </div>
        <div className="bg-gradient1  font-gilroymedium h-[523px] sm:h-[579px] md:px-5 relative w-full">
          <Img
            className="absolute h-[523px] inset-y-[0] my-auto object-cover right-[0]"
            src="images/img_group2.png"
            alt="groupTwo" />
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-center left-[0] my-auto p-5 w-[68%]"
            style={{ backgroundImage: "url('images/img_group1.png')" }}
          >
            <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start my-[62px] p-[42px] md:px-10 sm:px-5 rounded-[12px] w-[51%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Input
                  name="frame1000001653"
                  placeholder="Paste URL here..."
                  className="md:h-auto p-0 placeholder:text-blue-A400 sm:h-auto text-left text-xs w-full"
                  wrapClassName="w-full"
                  size="sm"
                ></Input>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-auto sm:w-full">
                  <SelectBox
                    className="h-12 text-left text-sm w-[52%] sm:w-full"
                    placeholderClassName="text-blue-A400"
                    indicator={<Img
                      className="h-1.5 outline-blue-A400 outline-[1px] outline w-3"
                      src="images/img_arrowdown_blue_a400.svg"
                      alt="arrow_down" />}
                    isMulti={false}
                    name="dropdown"
                    options={dropdownOptionsList}
                    isSearchable={false}
                    placeholder="Choose Domain"
                    color="blue_A400"
                    variant="outline" />
                  <Input
                    name="frame1000001654"
                    placeholder="Type Alias here"
                    className="md:h-auto p-0 placeholder:text-blue-A400 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-[46%] sm:w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col font-gilroysemibold gap-3 items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center rounded-[24px] w-[392px]"
                  rightIcon={<Img
                    className="h-4 mt-px ml-3.5"
                    src="images/img_television.svg"
                    alt="television" />}
                  color="blue_700"
                  size="sm"
                >
                  <div className="text-left text-sm">Trim URL</div>
                </Button>
                <div className="flex flex-col font-gilroymedium items-center justify-start p-2.5 w-[392px] sm:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[373px] md:max-w-full text-blue-A200 text-sm"
                    size="txtGilroyMedium14"
                  >
                    <span className="text-blue-A200 font-gilroymedium text-left font-normal">
                      By clicking TrimURL, I agree to the
                    </span>
                    <span className="text-blue-A200 font-gilroymedium text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-blue-A400 font-gilroybold text-left font-normal">
                      Terms of Service, Privacy Policy
                    </span>
                    <span className="text-blue-A200 font-gilroymedium text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-blue-A400 font-gilroymedium text-left font-normal">
                      and Use of Cookies.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 font-gilroybold md:h-[1085px] sm:h-[1118px] h-[1153px] md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto top-[4%] w-auto">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Line className="bg-gradient  h-12 w-px" />
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
                size="txtGilroyBold40"
              >
                FAQs
              </Text>
            </div>
            <div className="flex flex-col font-gilroymedium gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                <div className="flex flex-row gap-6 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-gray-900 text-xl w-auto"
                    size="txtGilroyMedium20"
                  >
                    How does URL shortening work?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_minus.svg"
                    alt="minus" />
                </div>
                <Text
                  className="leading-[32.00px] max-w-[792px] md:max-w-full text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </Text>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <List
                className="flex flex-col gap-[31px] items-center justify-between w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-full">
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      Is it necessary to create an account to use the URL
                      shortening service?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      Are the shortened links permanent? Will they expire?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      Are there any limitations on the number of URLs I can
                      shorten?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      Can I customize the shortened URLs to reflect my brand or
                      content?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      Can I track the performance of my shortened URLs?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex md:flex-col flex-row gap-6 h-[70px] md:h-auto items-center justify-center w-full">
                    <Text
                      className="leading-[32.00px] max-w-[740px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyMedium20"
                    >
                      How secure is the URL shortening service? Are the
                      shortened links protected against spam or malicious
                      activity?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[793px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-end justify-between w-full">
                    <Text
                      className="flex items-center justify-start text-gray-900 text-xl w-auto"
                      size="txtGilroyMedium20"
                    >
                      What is a QR code and what can it do?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[792px] w-full">
                  <div className="flex md:flex-col flex-row gap-6 h-[70px] md:h-auto items-center justify-center w-full">
                    <Text
                      className="flex leading-[32.00px] max-w-[742px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Is there an API available for integrating the URL
                      shortening service into my own applications or websites?
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus" />
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
              </List>
            </div>
          </div>
          <Img
            className="absolute h-[859px] left-[0] object-cover top-[0]"
            src="images/img_group3_859x349.png"
            alt="groupThree_One" />
          <Img
            className="absolute bottom-[0] h-[439px] object-cover right-[0]"
            src="images/img_group2_439x374.png"
            alt="groupTwo_One" />
        </div>
        <div className="bg-gradient1  h-[299px] sm:h-[598px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[299px] md:h-auto object-cover"
                src="images/img_group3_299x667.png"
                alt="groupThree_Two" />
              <Img
                className="h-[299px] md:h-auto object-cover"
                src="images/img_group2_299x578.png"
                alt="groupTwo_Two" />
            </div>
          </div>
          <div className="absolute bottom-[18%] flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto w-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[615px]"
              size="txtGilroyBold40WhiteA700"
            >
              Revolutionizing Link Optimization
            </Text>
            <Button
              className="cursor-pointer font-gilroysemibold h-12 rounded-[24px] text-base text-center w-[200px]"
              color="blue_700"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
          <footer className="bg-white-A700 flex font-gilroybold items-center justify-center md:px-5 w-full">
            <div className="md:h-[1264px] h-[541px] sm:h-[561px] mt-5 relative w-full">
              <div className="absolute flex md:flex-col flex-row gap-6 h-max inset-y-[0] items-start justify-center my-auto right-[14%] w-auto">
                <div className="flex flex-col gap-14 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Why Scissor ?
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Scissor 101
                          <br />
                          Integrations & API
                          <br />
                          Pricing
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Blog
                          <br />
                          Resource Library
                          <br />
                          Developers
                          <br />
                          App Connectors
                          <br />
                          Support
                          <br />
                          Trust Center
                          <br />
                          Browser Extension
                          <br />
                          Mobile App
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[31px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Solutions
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Social Media
                          <br />
                          Digital Marketing
                          <br />
                          Customer Service
                          <br />
                          For Developers
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Features
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-center justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Branded Links
                          <br />
                          Mobile Links
                          <br />
                          Campaign
                          <br />
                          Management &<br />
                          Analytics
                          <br />
                          QR Code generation
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-14 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Products
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Link Management
                          <br />
                          QR Codes
                          <br />
                          Link-in-bio
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtGilroyBold16"
                    >
                      Legal
                    </Text>
                    <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-gray-900_01"
                        size="txtGilroyMedium16Gray90001"
                      >
                        <>
                          Privacy Policy
                          <br />
                          Cookie Policy
                          <br />
                          Terms of Service
                          <br />
                          Acceptable Use Policy
                          <br />
                          Code of Conduct
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-6 w-auto">
                  <Text
                    className="text-base text-gray-900_02 w-[73px]"
                    size="txtGilroyBold16"
                  >
                    Company
                  </Text>
                  <div className="flex flex-col font-gilroymedium items-start justify-start w-auto">
                    <Text
                      className="leading-[24.00px] text-base text-gray-900_01"
                      size="txtGilroyMedium16Gray90001"
                    >
                      <>
                        About Scissor
                        <br />
                        Careers
                        <br />
                        Partners
                        <br />
                        Press
                        <br />
                        Contact
                        <br />
                        Reviews
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-8 items-start justify-start left-[14%] top-[14%] w-auto">
                <UpdatedDesignLogo
                  className="flex flex-row gap-2 items-start justify-start p-2 w-auto"
                  musicimage="images/img_settings.svg" />
                <div className="flex flex-row gap-6 items-start justify-start px-2 w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ifisocialtwitter.svg"
                    alt="ifisocialtwitte" />
                  <Img className="h-6 w-6" src="images/img_info.svg" alt="info" />
                  <Img
                    className="h-6 w-6"
                    src="images/img_ifisociallinkedin.svg"
                    alt="ifisociallinked" />
                  <Img
                    className="h-6 w-6"
                    src="images/img_ifisocialfacebook.svg"
                    alt="ifisocialfacebo" />
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-gilroymedium h-[358px] items-center justify-end p-[39px] sm:px-5 right-[0] w-[38%]"
                style={{
                  backgroundImage: "url('images/img_group2_439x374.png')",
                }}
              >
                <div className="flex flex-row gap-2 items-center justify-center mt-[260px] px-3 w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtGilroyMedium14Gray90001"
                  >
                    Term of Service
                  </Text>
                  <div className="bg-gray-900_01 h-3 w-[1%]"></div>
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtGilroyMedium14Gray90001"
                  >
                    Security
                  </Text>
                  <div className="bg-gray-900_01 h-3 w-[1%]"></div>
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtGilroyMedium14Gray90001"
                  >
                    ⓒ Scissor 2023
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[541px] inset-y-[0] left-[0] my-auto object-cover"
                src="images/img_group3_859x349.png"
                alt="groupThree_Three" />
                </div>
              </footer>
      </div>
      </div>
    </>
  );
};
export default ScissorPage;