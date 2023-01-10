import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Input,
  Button,
  List,
  CheckBox,
} from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/register");
  }
  function handleNavigate14() {
    navigate("/search");
  }
  function handleNavigate18() {
    navigate("/");
  }
  function handleNavigate19() {
    navigate("/forgotpassword");
  }
  function handleNavigate20() {
    navigate("/register");
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
                    onClick={handleNavigate14}
                    alt="search"
                  />
                  <Line className="bg-white_A700 sm:h-[14px] md:h-[18px] h-[26px] w-[1px]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Text
                      className="font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Login
                    </Text>
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate13}
                    >
                      Register
                    </Text>
                  </Row>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1365px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                <Text
                  className="leading-[normal] md:ml-[51px] ml-[75px] sm:mx-[0] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[86%]"
                  as="h1"
                  variant="h1"
                >
                  Welcome back, there is the latest news today !!
                </Text>
                <Stack className="h-[394px] sm:mt-[41px] md:mt-[53px] mt-[78px] relative w-[100%]">
                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:pb-[12px] md:pb-[15px] pb-[23px] md:pl-[15px] sm:pl-[15px] pl-[23px] sm:pr-[0] right-[3%] sm:w-[100%] w-[97%]">
                    <Column className="flex flex-col items-center justify-start md:ml-[209px] ml-[304px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                            <Input
                              className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                              name="language"
                              placeholder="Entertaiment "
                            ></Input>
                            <Text
                              className="font-semibold mb-[4px] mt-[108px] sm:mt-[57px] md:mt-[74px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </Column>
                        <Button
                          className="flex items-center justify-center md:mt-[11px] min-w-[45%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                            Read More
                          </div>
                        </Button>
                      </Column>
                    </Column>
                    <List
                      className="sm:gap-[185px] md:gap-[239px] gap-[348px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:ml-[10px] md:ml-[13px] ml-[20px] w-[33%]"
                      orientation="horizontal"
                    >
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_background_181X308.png')",
                            }}
                          >
                            <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                              <Input
                                className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                                wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                                name="language Two"
                                placeholder="Entertaiment "
                              ></Input>
                              <Text
                                className="font-semibold mb-[4px] md:mr-[117px] mr-[171px] sm:mr-[91px] mt-[108px] sm:mt-[57px] md:mt-[74px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body6"
                              >
                                Ukraine, 24 april 2022
                              </Text>
                            </Column>
                          </Column>
                          <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                            <Text
                              className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              variant="body4"
                            >
                              Zelensky accuses Russia of worst crimes since WW2{" "}
                            </Text>
                            <Text
                              className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              variant="body6"
                            >
                              The Ukrainian leader says Russia must face an
                              international trial as he calls for the country to
                              be thrown off the UN Security Council. Lorem ipsom
                              dolor
                            </Text>
                          </Column>
                          <Button
                            className="flex items-center justify-center md:mt-[11px] min-w-[45%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_upload_white_A700.png"
                                className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                                alt="upload"
                              />
                            }
                            shape="RoundedBorder8"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                              Read More
                            </div>
                          </Button>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                            <Input
                              className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                              name="language Three"
                              placeholder="Entertaiment "
                            ></Input>
                            <Text
                              className="font-semibold mb-[4px] mt-[108px] sm:mt-[57px] md:mt-[74px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-inter font-semibold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </Column>
                        <Button
                          className="flex items-center justify-center md:mt-[11px] min-w-[45%] mt-[16px] sm:mt-[8px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                            Read More
                          </div>
                        </Button>
                      </Column>
                    </List>
                  </Row>
                  <Button
                    className="absolute flex sm:h-[32px] md:h-[42px] h-[60px] inset-y-[0] items-center justify-center my-[auto] rotate-[180deg] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    size="mdIcn"
                    variant="icbOutlineWhiteA700"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[27px] sm:h-[15px] md:h-[19px] flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_900 border-solid flex flex-col items-center md:ml-[66px] ml-[96px] sm:mx-[0] my-[4px] sm:p-[15px] md:p-[30px] p-[45px] sm:w-[100%] w-[39%]">
                <Column className="flex flex-col items-center justify-start mb-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Neuzy
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                    <Column className="flex flex-col font-poppins items-center justify-start pt-[3px] w-[100%]">
                      <Column className="flex flex-col justify-start rounded-radius10 w-[100%]">
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
                          name="Input One"
                          placeholder="Enter your password"
                          shape="RoundedBorder10"
                          size="xl"
                          variant="OutlineBlack900"
                        ></Input>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                        <CheckBox
                          className="font-medium text-[16px] text-black_900 tracking-ls008 md:tracking-ls11 sm:tracking-ls11"
                          inputClassName="h-[24px] mr-[5px] w-[24px]"
                          name="H4"
                          label="Remember me?"
                        ></CheckBox>
                        <Text
                          className="common-pointer font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-black_900 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body2"
                          onClick={handleNavigate19}
                        >
                          Forgot password
                        </Text>
                      </Row>
                    </Column>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-poppins sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 tracking-ls008 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      onClick={handleNavigate18}
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillBluegray900"
                    >
                      Login
                    </Button>
                    <Text
                      className="common-pointer font-inter font-normal sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate20}
                    >
                      <span className="text-black_900 text-[14px]">
                        Don't have an account?{" "}
                      </span>
                      <span className="text-bluegray_900 text-[14px]">
                        Register here
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

export default LoginPage;
