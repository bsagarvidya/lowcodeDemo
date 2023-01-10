import React from "react";

import { Column, Row, Text, Img, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/register");
  }
  function handleNavigate1() {
    navigate("/login");
  }
  function handleNavigate2() {
    navigate("/search");
  }
  function handleNavigate7() {
    navigate("/updatepassword");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
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
                    onClick={handleNavigate2}
                    alt="search"
                  />
                  <Line className="bg-white_A700 sm:h-[14px] md:h-[18px] h-[26px] w-[1px]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate1}
                    >
                      Login
                    </Text>
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate}
                    >
                      Register
                    </Text>
                  </Row>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1291px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                <Text
                  className="leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  You forgot your password? calm down we will help
                </Text>
                <Text
                  className="font-normal leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[88%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_900 border-solid flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[33px] p-[49px] sm:w-[100%] w-[41%]">
                <Column className="flex flex-col items-center justify-start mb-[3px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[93%]">
                  <Text
                    className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Neuzy
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] pt-[3px] rounded-radius10 w-[100%]">
                    <Column className="flex flex-col font-poppins justify-start rounded-radius10 w-[100%]">
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
                        name="Input"
                        placeholder="Enter your email"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBlack900"
                      ></Input>
                    </Column>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-poppins sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      onClick={handleNavigate7}
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillBluegray900"
                    >
                      Reset Password
                    </Button>
                    <Text
                      className="font-inter font-normal sm:ml-[26px] md:ml-[34px] ml-[50px] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
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
            </Row>
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
      </Column>
    </>
  );
};

export default ForgotPasswordPage;
