import { useState } from "react";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import Typography from "../../components/common/Typography/Typography";
import "./Contact.scss";

const Contact = () => {
  //
  const [isOpen, setIsOpen] = useState(false);
  //
  return (
    <>
      <Typography variant={"h1"}>spark!</Typography>
      <Button variant={"outlined"} onClick={() => setIsOpen(!isOpen)}>
        opendrawer
      </Button>
      <Input type="text" placeholder="myinput" />
      {/* <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <div>
          <Button variant={"contained"} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Typography variant={"body1"}>The Drawer Content</Typography>
          <input type={"text"} />
        </div>
      </Drawer> */}
    </>
  );
};

export default Contact;
