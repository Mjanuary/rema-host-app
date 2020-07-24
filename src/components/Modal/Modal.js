import React from "react";
import PropTypes from "prop-types";
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
  const {
    close,
    theme,
    title,
    className,
    backDrop,
    backDropClose,
    closeBackdrop,
  } = props;
  return (
    <div>
      {backDrop && (
        <BackDrop
          close={
            backDropClose
              ? close
              : () => (closeBackdrop === true ? close() : null)
          }
        />
      )}

      <div
        className={`modal-dialog modalContainer modal-lg add-task-modal zoomIn animated faster ${className} fixed-modal`}
        role="document"
      >
        <div className="modal-content">
          <div className={`modal-header bg-${theme}`}>
            <h5 className="modal-title text-white">{title}</h5>
            <button
              type="button"
              className={`close ${
                theme === "light" ? "text-secindary" : "text-white"
              } `}
              aria-label="Close"
              onClick={close}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            className="modal-body p-0"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            {props.children}
          </div>
          <div className="modal-footer border-0"> </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.func,
  theme: PropTypes.string,
  backDrop: PropTypes.bool,
  closeBackdrop: PropTypes.bool,
};

Modal.defaultProps = {
  className: "",
  title: " ",
  close: () => {},
  theme: "light",
  backDrop: true,
  closeBackdrop: false,
};

export default Modal;
