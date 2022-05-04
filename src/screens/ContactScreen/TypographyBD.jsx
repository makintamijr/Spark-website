import React from "react";
import Typography from "../../components/common/Typography/Typography";
import { CopyBlock, dracula } from "react-code-blocks";

const TypographyBD = () => {
  const codeTypo = `<Typography variant={"h1"}>h1. Heading</Typography>`;
  const language = "jsx";
  return (
    <>
      <Typography variant={"h3"}>Typography</Typography>
      <Typography variant={"body1"}>
        Use Typography to present your design and content as clearly and
        efficiently as possible
      </Typography>

      <div className="contact-component">
        <Typography variant={"h6"}>Component</Typography>
        <Typography variant={"body1"}>
          {" "}
          The Typography component makes it easy to apply a default set of font
          weights and sizes
        </Typography>

        <div className="component-box">
          <Typography variant={"h1"}>h1. Heading</Typography>
          <Typography variant={"h2"}>h2. Heading</Typography>
          <Typography variant={"h3"}>h3. Heading</Typography>
          <Typography variant={"h4"}>h4. Heading</Typography>
          <Typography variant={"h5"}>h5. Heading</Typography>
          <Typography variant={"h6"}>h6. Heading</Typography>
          <Typography variant={"body1"}>
            body1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, praesentium?
          </Typography>
          <Typography variant={"body1"}>
            body2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, praesentium?
          </Typography>
        </div>
        <div className="component-box">
          <CopyBlock text={codeTypo} language={language} theme={dracula} />
        </div>
      </div>
    </>
  );
};

export default TypographyBD;
