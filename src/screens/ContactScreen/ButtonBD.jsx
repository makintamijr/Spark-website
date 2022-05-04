import React from "react";
import Typography from "../../components/common/Typography/Typography";
import Button from "../../components/common/Button/Button";
import { CopyBlock, dracula } from "react-code-blocks";

const ButtonBD = () => {
  const codeTypo = `<Button variant="contained">CONTAINED</Button>
  <Button variant="outlined">OUTLINED</Button>`;
  const language = "jsx";
  return (
    <>
      <div className="component-2-box">
        <Typography variant={"h3"}>Button</Typography>
        <Typography variant={"body1"}>
          Allows users to take actions, and make choices, with a single tap
        </Typography>

        <div className="contact-component comp-2">
          <Typography variant={"h6"}>Basic button</Typography>
          <Typography variant={"body1"}>
            {" "}
            The Button comes with two different variants: contained, and
            outlined.
          </Typography>

          <div className="component-box button-box">
            <div className="button">
              <Button variant="contained">CONTAINED</Button>
              <Button variant="outlined">OUTLINED</Button>
            </div>

            <CopyBlock text={codeTypo} language={language} theme={dracula} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonBD;
