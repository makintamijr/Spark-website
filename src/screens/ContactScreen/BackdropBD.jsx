import React from "react";
import Typography from "../../components/common/Typography/Typography";
import Modal from "../../components/common/Modal/Modal";
import useModal from "../../hooks/useModal";
import { CopyBlock, dracula } from "react-code-blocks";

const BackdropBD = ({ onClick }) => {
  const { isModalOpen, close, open } = useModal();
  const codeTypo = `import Modal from "../../components/common/Modal/Modal";
  import useModal from "../../hooks/useModal";
  <div>
            <Button variant="contained" onClick={open}>
              Open Backdrop
            </Button>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet
            </Typography>

            {isModalOpen && (
              <Modal isModalOpen={isModalOpen} handleClose={close}>
                <Typography variant={"h6"}>
                  The modal with the backdrop
                </Typography>
              </Modal>
            )}
            </div>`;
  const language = "jsx";
  return (
    <>
      <div className="component-2-box">
        <Typography variant={"h3"}>Backdrop & Modal</Typography>
        <Typography variant={"body1"}>
          The backdrop component is used to provide emphasis on a particular
          element or parts of it, while the modal component provides a solid
          foundation for creating dialogs, popovers, lightboxes, or whatever
          else.
        </Typography>

        <div className="contact-component comp-2">
          <Typography variant={"h6"}>Basic Backdrop & Modal</Typography>
          <Typography variant={"body1"}>
            {" "}
            The backdrop signals to the user of a state change within the
            application and can be used for creating loaders, dialogs, and more.
            In its simplest form, the backdrop component will add a dimmed layer
            over your application. And the Modal component renders its children
            node in front of a backdrop component.
          </Typography>

          <div className="component-box backdrop-box">
            <Typography variant="body1" onClick={open}>
              Open Backdrop
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              porro facilis nostrum, tempora maxime explicabo rem ipsam ratione
              iure rerum ducimus consequatur obcaecati dicta labore, et quae
              animi modi necessitatibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim porro facilis nostrum, tempora maxime
              explicabo rem ipsam ratione iure rerum ducimus consequatur
              obcaecati dicta labore, et quae animi modi necessitatibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Enim porro
              facilis nostrum, tempora maxime explicabo rem ipsam ratione iure
              rerum ducimus consequatur obcaecati dicta labore, et quae animi
              modi necessitatibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim porro facilis nostrum, tempora maxime
              explicabo rem ipsam ratione iure rerum ducimus consequatur
              obcaecati dicta labore, et quae animi modi necessitatibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Enim porro
              facilis nostrum, tempora maxime explicabo rem ipsam ratione iure
              rerum ducimus consequatur obcaecati dicta labore, et quae animi
              modi necessitatibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim porro facilis nostrum, tempora maxime
              explicabo rem ipsam ratione iure rerum ducimus consequatur
              obcaecati dicta labore, et quae animi modi necessitatibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Enim porro
              facilis nostrum, tempora maxime explicabo rem ipsam ratione iure
              rerum ducimus consequatur obcaecati dicta labore, et quae animi
              modi necessitatibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim porro facilis nostrum, tempora maxime
              explicabo rem ipsam ratione iure rerum ducimus consequatur
              obcaecati dicta labore, et quae animi modi necessitatibus? Lorem
            </Typography>

            {isModalOpen && (
              <Modal isModalOpen={isModalOpen} handleClose={close}>
                <Typography variant={"h6"}>
                  The modal with the backdrop
                </Typography>
              </Modal>
            )}

            <CopyBlock text={codeTypo} language={language} theme={dracula} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackdropBD;
