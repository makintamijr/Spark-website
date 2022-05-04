import React from "react";
import Typography from "../../components/common/Typography/Typography";
import Image from "../../components/common/Image/Image";
import img from "../../img/hlm-img2.png";
import { CopyBlock, dracula } from "react-code-blocks";

const ImageBD = () => {
  const codeTypo = `<Image src={img} />`;
  const language = "jsx";
  return (
    <>
      <div className="component-2-box">
        <Typography variant={"h3"}>Image</Typography>
        <Typography variant={"body1"}>
          Use to display images on the application
        </Typography>

        <div className="contact-component comp-2">
          <Typography variant={"h6"}>Basic Image</Typography>
          <Typography variant={"body1"}>
            {" "}
            The Image component is same as img tag in html only it has an
            in-built scss wit every settings applied.
          </Typography>

          <div className="component-box img-box">
            <Image src={img} />
            <CopyBlock text={codeTypo} language={language} theme={dracula} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBD;
