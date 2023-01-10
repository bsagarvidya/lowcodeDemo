import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, Input, List } from "components";
import { useNavigate } from "react-router-dom";

const AllBlogFilterModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/allblog");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[90%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-black_900_90 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[1290px] mb-[1090px] sm:mb-[580px] md:mb-[750px] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:p-[15px] md:p-[26px] p-[39px] sm:pl-[15px] sm:pr-[15px] rounded-radius30 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between md:ml-[18px] ml-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
              <Text
                className="flex-grow mb-[1px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                as="h4"
                variant="h4"
              >
                Filter News
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                onClick={handleNavigate15}
                alt="close"
              />
            </Row>
            <Column className="flex flex-col justify-start md:ml-[18px] ml-[27px] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[71%]">
              <Text
                className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Category News
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] rounded-radius10 w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[11%] not-italic text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillBluegray900"
                >
                  Sport
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[12%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Health
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[12%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Political
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[14%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Business
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[13%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Finance
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[9%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Life
                </Button>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-black_900 text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[19%]"
                  name="FrameThirteen"
                  placeholder="Entertainment"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillGray50"
                ></Input>
              </Row>
            </Column>
            <List
              className="sm:gap-[29px] md:gap-[37px] gap-[55px] grid min-h-[auto] sm:ml-[14px] md:ml-[18px] ml-[27px] sm:mt-[29px] md:mt-[37px] mt-[55px] sm:w-[100%] w-[48%]"
              orientation="vertical"
            >
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[94%]">
                <Text
                  className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  News Rating
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] rounded-radius10 w-[100%]">
                  <Button
                    className="cursor-pointer font-normal min-w-[22%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Hot Topic
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[24%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Most Seen
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[27%] not-italic text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillBluegray900"
                  >
                    The Craziest
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[17%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Fraud
                  </Button>
                </Row>
              </Column>
              <Column className="flex flex-col justify-start rounded-radius10 w-[100%]">
                <Text
                  className="text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  News post time
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] rounded-radius10 w-[100%]">
                  <Button
                    className="cursor-pointer font-normal min-w-[23%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Last 1 Hour
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[24%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Last 3 Hour
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[22%] not-italic text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillBluegray900"
                  >
                    This Week
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[23%] not-italic text-[18px] text-black_900 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    This Month
                  </Button>
                </Row>
              </Column>
            </List>
            <Button
              className="cursor-pointer font-semibold sm:mb-[3px] md:mb-[4px] mb-[6px] min-w-[15%] sm:ml-[14px] md:ml-[18px] ml-[27px] sm:mt-[29px] md:mt-[37px] mt-[55px] text-[18px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
              shape="RoundedBorder8"
              size="xl"
            >
              Apply Now
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default AllBlogFilterModal;
