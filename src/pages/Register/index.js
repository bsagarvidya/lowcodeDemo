import React from "react";

import { Column, Row, Text, Img, Line, Input, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/login");
  }
  function handleNavigate23() {
    navigate("/login");
  }
  function handleNavigate24() {
    navigate("/search");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1292px] md:ml-[33px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h2"
                variant="h2"
              >
                Neuzy
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[119px] ml-[173px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%] common-row-list">
                <ul className="flex flex-row items-center justify-center">
                  <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Sport
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Health
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Political
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Business
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Finance
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Life
                    </a>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Entertainment
                    </a>
                  </li>
                </ul>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[147px] ml-[214px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                <Img
                  src="images/img_search.svg"
                  className="common-pointer sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  onClick={handleNavigate24}
                  alt="search"
                />
                <Line className="bg-white_A700 sm:h-[14px] md:h-[18px] h-[26px] w-[1px]" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Text
                    className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body4"
                    onClick={handleNavigate23}
                  >
                    Login
                  </Text>
                  <Text
                    className="font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body4"
                  >
                    Register
                  </Text>
                </Row>
              </Row>
            </Row>
          </Row>
        </header>
        <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[595px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h1"
              variant="h1"
            >
              Let's join as Neuzy friends
            </Text>
            <Text
              className="font-normal leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] not-italic text-black_900_7f text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[96%]"
              as="h6"
              variant="h6"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </Text>
          </Column>
          <Column className="bg-white_A700 border border-bluegray_900 border-solid flex flex-col items-center justify-start max-w-[529px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:p-[15px] md:p-[35px] p-[52px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Column className="flex flex-col items-center justify-start mb-[4px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[95%]">
              <Text
                className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h2"
                variant="h2"
              >
                Neuzy
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] rounded-radius10 w-[100%]">
                <Column className="flex flex-col font-poppins items-center justify-start pt-[4px] rounded-radius10 w-[100%]">
                  <Column className="flex flex-col justify-start rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 tracking-ls007 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      variant="body4"
                    >
                      Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[13px] sm:mt-[6px] w-[100%]"
                      type="text"
                      name="Input"
                      placeholder="Enter your Name"
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBlack900"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 tracking-ls007 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      variant="body4"
                    >
                      Email
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                      type="email"
                      name="Input One"
                      placeholder="Enter your email"
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBlack900"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 tracking-ls007 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      variant="body4"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                      type="password"
                      name="Input Two"
                      placeholder="Enter your password"
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBlack900"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 tracking-ls007 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      variant="body4"
                    >
                      Confirm Password
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                      type="password"
                      name="Input Three"
                      placeholder="Enter your password"
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBlack900"
                    ></Input>
                  </Column>
                </Column>
                <Button
                  className="cursor-pointer font-medium font-poppins sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                  shape="RoundedBorder8"
                  size="2xl"
                  variant="FillBluegray900"
                >
                  Register
                </Button>
                <Text
                  className="common-pointer font-inter font-normal sm:ml-[26px] md:ml-[34px] ml-[50px] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body4"
                  onClick={handleNavigate22}
                >
                  <span className="text-black_900 text-[14px]">
                    Do you already have an account??{" "}
                  </span>
                  <span className="text-bluegray_900 text-[14px]">
                    Login Now
                  </span>
                </Text>
              </Column>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1294px] ml-[auto] mr-[auto] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:pb-[18px] md:pb-[23px] pb-[34px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Hot Topic News{" "}
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </Row>
                <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
              </Column>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[26px] md:mt-[33px] mt-[49px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_13.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Input
                          className="font-bold p-[0] text-[12px] placeholder:text-white_A700 text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                          wrapClassName="md:ml-[183px] md:mr-[4px] md:mt-[4px] ml-[267px] mr-[6px] mt-[6px] sm:mt-[3px] sm:mx-[0] sm:w-[100%] w-[29%]"
                          name="language One"
                          placeholder="Entertaiment "
                        ></Input>
                        <Text
                          className="font-normal mb-[1px] sm:mr-[142px] md:mr-[183px] mr-[267px] md:mt-[111px] mt-[162px] sm:mt-[86px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                      <Text
                        className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </Column>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[14px] min-w-[37%] ml-[12px] mt-[21px] sm:ml-[6px] sm:mt-[11px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_15.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[21%] sm:ml-[150px] md:ml-[194px] ml-[282px] sm:mr-[11px] md:mr-[14px] mr-[21px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
                        </Button>
                        <Text
                          className="font-normal mb-[1px] sm:mr-[142px] md:mr-[183px] mr-[267px] md:mt-[111px] mt-[162px] sm:mt-[86px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                      <Text
                        className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </Column>
                    <Button
                      className="flex items-center justify-center md:ml-[8px] md:mt-[14px] min-w-[37%] ml-[12px] mt-[21px] sm:ml-[6px] sm:mt-[11px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_14.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[21%] sm:ml-[159px] md:ml-[206px] ml-[300px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillOrangeA700"
                        >
                          Finance
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                      <Text
                        className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </Column>
                    <Button
                      className="flex items-center justify-center md:mt-[14px] min-w-[37%] mt-[21px] sm:mt-[11px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
          <footer className="mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]">
            <Column className="bg-black_900 flex flex-col items-center justify-end sm:p-[15px] md:p-[41px] p-[60px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1290px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                    <Text
                      className="text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Neuzy
                    </Text>
                    <Text
                      className="font-normal leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body4"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[10px] sm:pt-[5px] md:pt-[6px] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                      <Text
                        className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        World
                      </Text>
                      <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              variant="body5"
                            >
                              Politcts
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Health
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Business
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Tech
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Entertaiment
                            </a>
                          </li>
                        </ul>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Text
                        className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        Tech
                      </Text>
                      <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              variant="body5"
                            >
                              Siance
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Magazine
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Start up
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Crypto
                            </a>
                          </li>
                        </ul>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                      <Text
                        className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        Life
                      </Text>
                      <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              variant="body5"
                            >
                              Food
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Style
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Sport
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Movie
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Music
                            </a>
                          </li>
                        </ul>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Text
                        className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        Magezine
                      </Text>
                      <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              variant="body5"
                            >
                              Fasion
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Blogger
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              People
                            </a>
                          </li>
                        </ul>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text
                        className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        Other
                      </Text>
                      <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              variant="body5"
                            >
                              About
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Contact us
                            </a>
                          </li>
                          <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Terms & Conditions
                            </a>
                          </li>
                        </ul>
                      </Column>
                    </Column>
                  </Row>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[28px] md:mt-[36px] mt-[53px] w-[100%]">
                  <Line className="bg-white_A700 h-[1px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                    <Text
                      className="flex-grow font-normal mt-[4px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      variant="body4"
                    >
                      Copyright © Neuzy | All Rights Reserved
                    </Text>
                    <Img
                      src="images/img_group20875.svg"
                      className="flex-shrink-0 max-w-[100%] w-[9%]"
                      alt="Group20875"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default RegisterPage;
