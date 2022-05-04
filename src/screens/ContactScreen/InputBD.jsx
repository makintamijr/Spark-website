import React from "react";
import Typography from "../../components/common/Typography/Typography";
import Input from "../../components/common/Input/Input";
import { CopyBlock, dracula } from "react-code-blocks";

const InputBD = () => {
  const codeTypo = `<Input placeholder="Input" />`;
  const language = "jsx";
  return (
    <>
      <div className="component-2-box">
        <Typography variant={"h3"}>Input</Typography>
        <Typography variant={"body1"}>
          Input lets users enter and edit text.
        </Typography>

        <div className="contact-component comp-2">
          <Typography variant={"h6"}>Basic Input</Typography>
          <Typography variant={"body1"}>
            {" "}
            The Input component is a fully customizable input tag with an
            in-built design and system control from your forms.
          </Typography>

          <div className="component-box links-box">
            <Input placeholder="Input" />
            <CopyBlock text={codeTypo} language={language} theme={dracula} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBD;
