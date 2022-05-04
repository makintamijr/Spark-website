import React from "react";
import Typography from "../../components/common/Typography/Typography";
import Link from "../../components/common/Link/Link";
import { CopyBlock, dracula } from "react-code-blocks";

const LinksBD = () => {
  const codeTypo = `<Link href="">Link</Link>`;
  const language = "jsx";
  return (
    <>
      <div className="component-2-box">
        <Typography variant={"h3"}>Links</Typography>
        <Typography variant={"body1"}>
          The Link component allows you to easily customize anchor elements with
          your theme colors and typography styles.
        </Typography>

        <div className="contact-component comp-2">
          <Typography variant={"h6"}>Basic Links</Typography>
          <Typography variant={"body1"}>
            {" "}
            The Link component is a customizable anchor elements with its
            in-build styling and easy to use for a uniform look on your
            applications.
          </Typography>

          <div className="component-box links-box">
            <Link href="">Link</Link>
            <CopyBlock text={codeTypo} language={language} theme={dracula} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksBD;
