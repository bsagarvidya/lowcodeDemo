import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Input,
  Grid,
  Button,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const AllBlogPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/search");
  }
  function handleNavigate25() {
    navigate("/sigleblog");
  }
  function handleNavigate26() {
    navigate("/sigleblog");
  }
  function handleNavigate27() {
    navigate("/allblogfilter");
  }
  function handleNavigate28() {
    navigate("/register");
  }
  function handleNavigate29() {
    navigate("/login");
  }
  function handleNavigate32() {
    navigate("/sigleblog");
  }
  function handleNavigate33() {
    navigate("/sigleblog");
  }
  function handleNavigate34() {
    navigate("/sigleblog");
  }
  function handleNavigate35() {
    navigate("/sigleblog");
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
                    onClick={handleNavigate21}
                    alt="search"
                  />
                  <Line className="bg-white_A700 sm:h-[14px] md:h-[18px] h-[26px] w-[1px]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate29}
                    >
                      Login
                    </Text>
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                      onClick={handleNavigate28}
                    >
                      Register
                    </Text>
                  </Row>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[635px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-semibold leading-[normal] sm:mx-[0] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[76%]"
                as="h2"
                variant="h2"
              >
                Read the latest news from around the world
              </Text>
              <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[37px] md:mt-[48px] mt-[70px] pl-[10px] sm:pl-[5px] md:pl-[6px] rounded-radius15 w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-black_900 text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  wrapClassName="md:my-[8px] my-[13px] sm:mx-[0] sm:my-[6px] sm:w-[100%] w-[82%]"
                  name="FrameTwentyThree"
                  placeholder="Search New here..."
                  size="lg"
                  variant="FillGray50"
                ></Input>
                <Line className="bg-black_900_87 sm:h-[21px] md:h-[27px] h-[38px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[11px] md:my-[14px] my-[21px] w-[1px]" />
                <Column className="bg-gray_50 flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius15 sm:w-[100%] w-[18%]">
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] my-[11px] sm:my-[5px] md:my-[7px] sm:px-[0] sm:w-[100%] w-[99%]"
                    onClick={handleNavigate27}
                  >
                    <Text
                      className="flex-grow font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      as="h6"
                      variant="h6"
                    >
                      Filter
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="trash"
                    />
                  </Row>
                </Column>
              </Row>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1292px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                <Column className="flex flex-col items-center justify-start sm:pb-[12px] md:pb-[15px] pb-[23px] w-[100%]">
                  <Grid className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
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
                          onClick={handleNavigate26}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                            <Input
                              className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                              name="language One"
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
                          onClick={handleNavigate25}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                            backgroundImage: "url('images/img_group38_13.png')",
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
                          onClick={handleNavigate35}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                          onClick={handleNavigate34}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                            <Input
                              className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                              name="language Four"
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
                          onClick={handleNavigate33}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <Column className="bg-gradient  flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] w-[100%]">
                            <Input
                              className="font-bold p-[0] text-[10px] placeholder:text-white_A700 text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:ml-[121px] ml-[177px] mr-[2px] mt-[2px] sm:mx-[0] sm:w-[100%] w-[36%]"
                              name="language Five"
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
                          onClick={handleNavigate32}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder8"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[12px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                            Read More
                          </div>
                        </Button>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer font-semibold sm:h-[19px] md:h-[25px] h-[35px] ml-[10px] sm:ml-[5px] md:ml-[6px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[18px] md:w-[24px] w-[35px]"
                    shape="RoundedBorder5"
                    variant="FillBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold sm:h-[19px] md:h-[25px] h-[35px] ml-[10px] sm:ml-[5px] md:ml-[6px] text-[14px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[18px] md:w-[24px] w-[35px]"
                    shape="RoundedBorder5"
                    variant="FillGray100"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold sm:h-[19px] md:h-[25px] h-[35px] ml-[10px] sm:ml-[5px] md:ml-[6px] text-[14px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[18px] md:w-[24px] w-[35px]"
                    shape="RoundedBorder5"
                    variant="FillGray100"
                  >
                    3
                  </Button>
                  <Button
                    className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[18px] md:w-[24px] w-[35px]"
                    shape="icbRoundedBorder5"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_user.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Img
                    src="images/img_arrowright_15X15.svg"
                    className="md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:mr-[11px] mr-[16px] sm:mr-[8px] md:w-[10px] w-[15px] sm:w-[7px]"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      New Released
                    </Text>
                    <Text
                      className="font-semibold text-black_900_90 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Hot Topic
                    </Text>
                    <Text
                      className="font-semibold text-black_900_90 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Popular
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_900 h-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[38%]" />
                </Column>
                <List
                  className="font-poppins sm:gap-[11px] md:gap-[14px] gap-[21px] grid min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[19px] pb-[1px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashg0gb14.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashG0gbFourteen"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashoj0zey.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashoj0zeY"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashlndpi8.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashLNdpiEight"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashjsubkj.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashJsuBKj"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashtvllfy.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashTVllFy"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_unsplashy5pg8z.png"
                      className="sm:h-[35px] md:h-[45px] h-[65px] max-w-[100%] mt-[1px] sm:w-[34px] md:w-[44px] w-[65px]"
                      alt="unsplashy5PG8Z"
                    />
                    <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </List>
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

export default AllBlogPage;
