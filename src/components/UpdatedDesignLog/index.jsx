import React from "react";

import { Img, Line, Text } from "components";

const UpdatedDesignLogo= (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-6 w-6" alt="music" src={props?.musicimage} />
        <Line className="bg-blue-A700 h-6 w-0.5" />
        <Text
          className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl w-[99px]"
          size="txtGilroyBold24"
        >
          {props?.scissortext}
        </Text>
      </div>
    </>
  );
};

UpdatedDesignLogo.defaultProps = {
  musicimage: "images/img_music.svg",
  scissortext: "SCISSOR",
};

export default UpdatedDesignLogo;
