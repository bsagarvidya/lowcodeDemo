import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  List,
  Button,
  Stack,
  PagerIndicator,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate36() {
    navigate("/allblog");
  }
  function handleNavigate37() {
    navigate("/sigleblog");
  }
  function handleNavigate38() {
    navigate("/sigleblog");
  }
  function handleNavigate39() {
    navigate("/sigleblog");
  }
  function handleNavigate40() {
    navigate("/allblog");
  }
  function handleNavigate43() {
    navigate("/sigleblog");
  }
  function handleNavigate44() {
    navigate("/allblog");
  }
  function handleNavigate45() {
    navigate("/sigleblog");
  }
  function handleNavigate46() {
    navigate("/sigleblog");
  }
  function handleNavigate47() {
    navigate("/sigleblog");
  }
  function handleNavigate48() {
    navigate("/allblog");
  }
  function handleNavigate49() {
    navigate("/sigleblog");
  }
  function handleNavigate50() {
    navigate("/allblog");
  }
  function handleNavigate51() {
    navigate("/sigleblog");
  }
  function handleNavigate52() {
    navigate("/sigleblog");
  }
  function handleNavigate53() {
    navigate("/sigleblog");
  }
  function handleNavigate54() {
    navigate("/allblog");
  }
  function handleNavigate55() {
    navigate("/sigleblog");
  }
  function handleNavigate56() {
    navigate("/sigleblog");
  }
  function handleNavigate57() {
    navigate("/sigleblog");
  }
  function handleNavigate58() {
    navigate("/sigleblog");
  }
  function handleNavigate59() {
    navigate("/sigleblog");
  }
  function handleNavigate60() {
    navigate("/sigleblog");
  }
  function handleNavigate61() {
    navigate("/allblog");
  }
  function handleNavigate62() {
    navigate("/register");
  }
  function handleNavigate63() {
    navigate("/login");
  }
  function handleNavigate64() {
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
                  onClick={handleNavigate64}
                  alt="search"
                />
                <Line className="bg-white_A700 sm:h-[14px] md:h-[18px] h-[26px] w-[1px]" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Text
                    className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body4"
                    onClick={handleNavigate63}
                  >
                    Login
                  </Text>
                  <Text
                    className="common-pointer font-normal not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body4"
                    onClick={handleNavigate62}
                  >
                    Register
                  </Text>
                </Row>
              </Row>
            </Row>
          </Row>
        </header>
        <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1292px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle5.png"
                  className="max-w-[100%] sm:w-[100%] w-[46%]"
                  alt="RectangleFive"
                />
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <div className="bg-bluegray_900 md:h-[11px] h-[15px] sm:h-[8px] my-[3px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                      <Text
                        className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hot Topic
                      </Text>
                    </Row>
                    <Text
                      className="font-bold leading-[normal] sm:mt-[12px] md:mt-[15px] mt-[23px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="font-semibold ml-[4px] text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-white_A700 text-[18px] font-inter">
                          -{" "}
                        </span>
                        <span className="text-white_A700 text-[18px] font-inter font-normal not-italic">
                          10 minutes ago
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                    <Text
                      className="flex-grow font-normal not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      variant="body4"
                    >
                      Read More
                    </Text>
                    <Img
                      src="images/img_arrow1.svg"
                      className="flex-shrink-0 max-w-[100%] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[11px] sm:mt-[5px] md:mt-[7px] w-[25%]"
                      alt="ArrowOne"
                    />
                  </Row>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
                <List
                  className="sm:gap-[29px] md:gap-[37px] gap-[55px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[66%]"
                  orientation="horizontal"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479.png"
                      className="sm:h-[45px] md:h-[58px] h-[84px] max-w-[100%] sm:w-[44px] md:w-[57px] w-[84px]"
                      alt="Rectangle1479"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_84X84.png"
                      className="sm:h-[45px] md:h-[58px] h-[84px] max-w-[100%] sm:w-[44px] md:w-[57px] w-[84px]"
                      alt="Rectangle1479 One"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                      <Text
                        className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        john kennedy won 3rd oscar trophy at los angles
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Los Angles, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[4px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 22 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </List>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle1479_1.png"
                    className="sm:h-[45px] md:h-[58px] h-[84px] max-w-[100%] sm:w-[44px] md:w-[57px] w-[84px]"
                    alt="Rectangle1479 Two"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="font-bold leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body5"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="font-normal ml-[4px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body5"
                      >
                        - 10 minutes ago
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1292px] ml-[auto] mr-[auto] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] rounded-radius8 w-[100%]">
              <Text
                className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h2"
                variant="h2"
              >
                Latest Release
              </Text>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                onClick={handleNavigate40}
                shape="RoundedBorder8"
                variant="FillBluegray900"
              >
                View All
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                  style={{ backgroundImage: "url('images/img_group38.png')" }}
                >
                  <Column className="bg-gradient  flex flex-col justify-end md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
                    <Button
                      className="cursor-pointer font-bold min-w-[17%] sm:ml-[225px] md:ml-[291px] ml-[423px] sm:mr-[4px] md:mr-[6px] mr-[9px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                      size="sm"
                      variant="FillDeeporangeA400"
                    >
                      Hot Topic
                    </Button>
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mr-[200px] md:mr-[258px] mr-[376px] sm:mt-[100px] md:mt-[130px] mt-[189px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Ukraine, 24 april 2022
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                  <Text
                    className="leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h4"
                    variant="h4"
                  >
                    Zelensky accuses Russia of worst crimes since WW2{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[35.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body4"
                  >
                    The Ukrainian leader says Russia must face an international
                    trial as he calls for the country to be thrown off the UN
                    Security Council.
                  </Text>
                </Column>
                <Button
                  className="flex items-center justify-center md:mt-[15px] min-w-[33%] mt-[23px] sm:mt-[12px] text-center w-[max-content]"
                  onClick={handleNavigate39}
                  rightIcon={
                    <Img
                      src="images/img_upload.svg"
                      className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                      alt="upload"
                    />
                  }
                  shape="RoundedBorder8"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[18px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                    Read More
                  </div>
                </Button>
              </Column>
              <List
                className="sm:gap-[26px] md:gap-[34px] gap-[50px] grid min-h-[auto] sm:w-[100%] w-[54%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_unsplashj5keq1.png"
                    className="max-w-[100%] sm:w-[100%] w-[44%]"
                    alt="unsplashj5kEQOne"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[54%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        New York, 19 april 2022
                      </Text>
                      <Column className="flex flex-col font-poppins items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                        <Text
                          className="leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Jhon Lorni has won 1st place in international match
                        </Text>
                        <Text
                          className="font-normal leading-[25.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          variant="body5"
                        >
                          this is his first victory in the international
                          olympics, so his name is quite explosive on the
                          international scene
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="flex items-center justify-center md:mt-[13px] min-w-[42%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate38}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_unsplashl2p8f.png"
                    className="max-w-[100%] sm:w-[100%] w-[44%]"
                    alt="unsplashL2p8f"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[54%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body4"
                      >
                        Amsterdam, 23 april 2022
                      </Text>
                      <Column className="flex flex-col font-poppins items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                        <Text
                          className="leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          The extinction of the Arabian turtle made the
                          government...
                        </Text>
                        <Text
                          className="font-normal leading-[25.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          variant="body5"
                        >
                          The jalabiya turtle is a very unique species because
                          it is thought to have existed from ancient times, but
                          has begun to become..
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="flex items-center justify-center md:mt-[13px] min-w-[42%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate37}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Row>
              </List>
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]">
            <Text
              className="font-semibold leading-[normal] sm:mx-[0] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[39%]"
              as="h2"
              variant="h2"
            >
              The Audience's choice of the Best Films
            </Text>
            <Stack className="h-[936px] sm:mt-[26px] md:mt-[34px] mt-[50px] relative w-[100%]">
              <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                  style={{ backgroundImage: "url('images/img_slider.png')" }}
                >
                  <Row className="bg-gradient1  flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[51px] p-[75px] sm:px-[15px] sm:py-[39px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mb-[142px] sm:mb-[75px] md:mb-[97px] sm:mt-[130px] md:mt-[168px] mt-[245px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="sm:h-[32px] md:h-[42px] h-[60px] max-w-[100%] mb-[103px] sm:mb-[54px] md:mb-[70px] sm:w-[31px] md:w-[41px] w-[60px]"
                        alt="arrowleft"
                      />
                      <PagerIndicator
                        className="h-[15px] md:mt-[101px] mt-[148px] sm:mt-[78px] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700_4f"
                        selectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                      />
                      <Button
                        className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center mb-[103px] sm:mb-[54px] md:mb-[70px] rotate-[180deg] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                        size="mdIcn"
                        variant="icbOutlineWhiteA700"
                      >
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[27px] sm:h-[15px] md:h-[19px] flex items-center justify-center"
                          alt="arrowright"
                        />
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
              <List
                className="absolute bottom-[0] sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] min-h-[auto] mx-[auto] sm:w-[100%] w-[90%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[15px] sm:pb-[15px] pb-[22px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle17.png"
                    className="max-w-[100%] rounded-radius10 w-[100%]"
                    alt="RectangleSeventeen"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Avengers Age of Ultron
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_7f tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[50%]"
                      alt="GroupFiftyOne"
                    />
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[15px] sm:pb-[15px] pb-[22px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle17_307X308.png"
                    className="max-w-[100%] rounded-radius10 w-[100%]"
                    alt="RectangleSeventeen One"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Captain Marvel
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_7f tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[50%]"
                      alt="GroupFiftyOne One"
                    />
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[15px] sm:pb-[15px] pb-[22px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle17_1.png"
                    className="max-w-[100%] rounded-radius10 w-[100%]"
                    alt="RectangleSeventeen Two"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Avengers End Game
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_7f tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[50%]"
                      alt="GroupFiftyOne Two"
                    />
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[15px] sm:pb-[15px] pb-[22px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle17_2.png"
                    className="max-w-[100%] rounded-radius10 w-[100%]"
                    alt="RectangleSeventeen Three"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Spiderman Far from Home
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_7f tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[47%]"
                      alt="GroupFiftyOne Three"
                    />
                  </Column>
                </Column>
              </List>
            </Stack>
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[9%] sm:mt-[26px] md:mt-[34px] mt-[50px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
              onClick={handleNavigate36}
              shape="RoundedBorder8"
              variant="FillBluegray900"
            >
              View All
            </Button>
          </Column>
          <Column className="bg-black_900 flex flex-col items-center justify-start mt-[120px] sm:mt-[63px] md:mt-[82px] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1291px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_background.png')",
                    }}
                  >
                    <Column className="bg-gradient2  flex flex-col items-center justify-end md:p-[30px] p-[45px] sm:px-[15px] sm:py-[23px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[119px] md:mt-[154px] mt-[225px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="bg-bluegray_900 md:h-[11px] h-[15px] sm:h-[8px] mt-[3px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                            <Text
                              className="font-normal mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body4"
                            >
                              Entertainment Topic
                            </Text>
                          </Row>
                          <Text
                            className="font-semibold leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            as="h2"
                            variant="h2"
                          >
                            Best Place for Vacation in Sydney
                          </Text>
                        </Column>
                        <Button
                          className="cursor-pointer font-semibold min-w-[44%] sm:mt-[26px] md:mt-[34px] mt-[50px] text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                          shape="RoundedBorder8"
                          variant="OutlineWhiteA700"
                        >
                          Read Now
                        </Button>
                      </Column>
                      <PagerIndicator
                        className="h-[15px] sm:mt-[29px] md:mt-[37px] mt-[55px] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700_4f"
                        selectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                      />
                    </Column>
                  </Column>
                </Column>
                <List
                  className="sm:gap-[23px] md:gap-[30px] gap-[45px] grid min-h-[auto] w-[35%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_84X121.png"
                      className="max-w-[100%] w-[28%]"
                      alt="Rectangle1479 Three"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold leading-[normal] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_2.png"
                      className="max-w-[100%] w-[28%]"
                      alt="Rectangle1479 Four"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold leading-[normal] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_3.png"
                      className="max-w-[100%] w-[28%]"
                      alt="Rectangle1479 Five"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold leading-[normal] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_4.png"
                      className="max-w-[100%] w-[28%]"
                      alt="Rectangle1479 Six"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold leading-[normal] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle1479_5.png"
                      className="max-w-[100%] w-[28%]"
                      alt="Rectangle1479 Seven"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold leading-[normal] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-white_A700_87 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </List>
              </Row>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
              style={{
                backgroundImage: "url('images/img_background_500X1440.png')",
              }}
            >
              <Column className="bg-gradient3  flex flex-col items-center justify-end md:p-[26px] p-[39px] sm:px-[15px] sm:py-[20px] w-[100%]">
                <Column className="flex flex-col items-center justify-start max-w-[1287px] ml-[auto] mr-[auto] md:mt-[103px] mt-[151px] sm:mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                        <div className="bg-deep_orange_A400 md:h-[11px] h-[15px] sm:h-[8px] mt-[3px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                        <Text
                          className="font-normal mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body4"
                        >
                          Life Topic
                        </Text>
                      </Row>
                      <Text
                        className="leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h1"
                        variant="h1"
                      >
                        St Pete's most beautiful beach in Florida
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[26%] sm:mt-[30px] md:mt-[39px] mt-[58px] text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder8"
                        variant="OutlineWhiteA700"
                      >
                        Read More
                      </Button>
                    </Column>
                    <Img
                      src="images/img_arrowright_60X60.svg"
                      className="sm:h-[32px] md:h-[42px] h-[60px] max-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[31px] md:w-[41px] w-[60px]"
                      alt="arrowright One"
                    />
                  </Row>
                  <PagerIndicator
                    className="h-[15px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[max-content]"
                    count={5}
                    activeCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-radius50 w-[15px] h-[15px] bg-white_A700_4f"
                    selectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                    unselectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                  />
                </Column>
              </Column>
            </Column>
          </Column>
          <List
            className="gap-[120px] sm:gap-[63px] md:gap-[82px] grid max-w-[1294px] min-h-[auto] ml-[auto] mr-[auto] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="vertical"
          >
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Entertaiment{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    onClick={handleNavigate50}
                    shape="RoundedBorder8"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </Row>
                <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pb-[17px] md:pb-[22px] pb-[33px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_246X418.png')",
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate47}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_1.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Input
                          className="font-bold p-[0] text-[12px] placeholder:text-white_A700 text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                          wrapClassName="md:ml-[183px] md:mr-[4px] md:mt-[4px] ml-[267px] mr-[6px] mt-[6px] sm:mt-[3px] sm:mx-[0] sm:w-[100%] w-[29%]"
                          name="language Three"
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate46}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_2.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Input
                          className="font-bold p-[0] text-[12px] placeholder:text-white_A700 text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                          wrapClassName="md:ml-[183px] md:mr-[4px] md:mt-[4px] ml-[267px] mr-[6px] mt-[6px] sm:mt-[3px] sm:mx-[0] sm:w-[100%] w-[29%]"
                          name="language Five"
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate45}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Political{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    onClick={handleNavigate44}
                    shape="RoundedBorder8"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </Row>
                <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pb-[17px] md:pb-[22px] pb-[33px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_247X418.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[21%] sm:ml-[159px] md:ml-[206px] ml-[300px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate43}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_3.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[21%] sm:ml-[159px] md:ml-[206px] ml-[300px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate56}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_4.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[21%] sm:ml-[159px] md:ml-[206px] ml-[300px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate55}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Sport{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    onClick={handleNavigate54}
                    shape="RoundedBorder8"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </Row>
                <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pb-[17px] md:pb-[22px] pb-[33px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_5.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[17%] sm:ml-[166px] md:ml-[214px] ml-[312px] sm:mr-[3px] md:mr-[4px] mr-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate53}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_6.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[17%] sm:ml-[166px] md:ml-[214px] ml-[312px] sm:mr-[3px] md:mr-[4px] mr-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate52}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_7.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[17%] sm:ml-[166px] md:ml-[214px] ml-[312px] sm:mr-[3px] md:mr-[4px] mr-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="flex items-center justify-center md:ml-[7px] md:mt-[13px] min-w-[37%] ml-[11px] mt-[20px] sm:ml-[5px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate51}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Health{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    onClick={handleNavigate61}
                    shape="RoundedBorder8"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </Row>
                <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pb-[17px] md:pb-[22px] pb-[33px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_8.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[19%] sm:ml-[164px] md:ml-[211px] ml-[308px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate60}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_9.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[19%] sm:ml-[164px] md:ml-[211px] ml-[308px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate59}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group38_10.png')",
                      }}
                    >
                      <Column className="bg-gradient  flex flex-col justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[19%] sm:ml-[164px] md:ml-[211px] ml-[308px] sm:mr-[4px] md:mr-[5px] mr-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-white_A700 tracking-ls011999999731779099 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
                        </Button>
                        <Text
                          className="font-normal ml-[1px] sm:mr-[143px] md:mr-[185px] mr-[269px] md:mt-[114px] mt-[167px] sm:mt-[88px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                      className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                      onClick={handleNavigate49}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                        Read More
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
            </Column>
          </List>
          <Column className="flex flex-col justify-start max-w-[1294px] ml-[auto] mr-[auto] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:px-[0] rounded-radius8 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between rounded-radius8 w-[100%]">
                <Text
                  className="font-semibold mb-[2px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Finance{" "}
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[10%] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  onClick={handleNavigate48}
                  shape="RoundedBorder8"
                  variant="FillBluegray900"
                >
                  View All
                </Button>
              </Row>
              <Line className="bg-black_900_7f h-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]" />
            </Column>
            <List
              className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pb-[17px] md:pb-[22px] pb-[33px] sm:w-[100%] w-[67%]"
              orientation="horizontal"
            >
              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group38_11.png')",
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
                  <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                    className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                    onClick={handleNavigate57}
                    rightIcon={
                      <Img
                        src="images/img_upload.svg"
                        className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                        alt="upload"
                      />
                    }
                    shape="RoundedBorder8"
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
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
                      backgroundImage: "url('images/img_group38_12.png')",
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
                  <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
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
                    className="flex items-center justify-center md:mt-[13px] min-w-[37%] mt-[20px] sm:mt-[10px] text-center w-[max-content]"
                    onClick={handleNavigate58}
                    rightIcon={
                      <Img
                        src="images/img_upload.svg"
                        className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                        alt="upload"
                      />
                    }
                    shape="RoundedBorder8"
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-normal not-italic text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                      Read More
                    </div>
                  </Button>
                </Column>
              </Column>
            </List>
          </Column>
          <Column className="bg-gray_900 flex flex-col items-center justify-start max-w-[1290px] ml-[auto] mr-[auto] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mx-[0] sm:px-[0] rounded-radius501 sm:w-[100%] w-[54%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="leading-[normal] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  Get the Latest Notifications and Info from Us
                </Text>
                <Text
                  className="font-normal leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[20px] md:mt-[26px] mt-[38px] not-italic text-center text-white_A700_b2 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body2"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled.
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-semibold min-w-[30%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[18px] text-bluegray_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                shape="CircleBorder26"
                size="xl"
                variant="OutlineBluegray900"
              >
                Subscribe Now
              </Button>
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

export default HomepagePage;
