import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Button, Input } from "components";

const SearchModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[90%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-black_900_90 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[1290px] sm:mb-[292px] md:mb-[377px] mb-[549px] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:p-[15px] md:p-[28px] p-[41px] sm:pl-[15px] sm:pr-[15px] rounded-radius30 w-[100%]">
            <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                <Text
                  className="flex-grow mb-[1px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                  as="h4"
                  variant="h4"
                >
                  Search News
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close"
                />
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] w-[100%]">
                <Text
                  className="font-normal not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Search News here...
                </Text>
                <Line className="bg-black_900_7f h-[1px] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col justify-start mb-[4px] md:ml-[13px] ml-[19px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[71%]">
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
                  name="items"
                  placeholder="Entertainment"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillGray50"
                ></Input>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default SearchModal;
