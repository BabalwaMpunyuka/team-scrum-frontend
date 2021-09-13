import { useState } from "react";
import styles from "./popup.module.css";

function PopUp({ content, title = "", type, dismissible = true }) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const getBackground = () => {
    if (type === "success") return "#00A860";
    else if (type === "danger") return "#F32013";
    else if (type === "info") return "#3461BB";
    else {
      return "#e8e8e8";
    }
  };

  const getColor = () => {
    if (type === "success") return "#fff";
    else if (type === "danger") return "#fFfFfF";
    else if (type === "info") return "#fff";
    else {
      return "#3a3a3a";
    }
  };

  const getIcon = () => {
    if (type === "success") return "fa fa-check";
    else if (type === "danger") return "fa fa-times-circle";
    else if (type === "info") return "fa fa-info-circle";
    else {
      return "fa fa-info-circle";
    }
  };

  return (
    <div
      className={`${styles.popup} ${show? styles.show: styles.hide}`}
      style={{
        color: getColor(),
        background: getBackground(),
      }}
    >
      {title && (
        <div className="d-flex pt-2 mx-2">
          <strong className="mr-auto">
            <i className={getIcon()}></i> {title}
          </strong>
          {dismissible && (
            <span className="btn btn-sm" onClick={toggleShow}>
              <strong style={{ color: getColor() }}>X</strong>
            </span>
          )}
        </div>
      )}
      {content}
    </div>
  );
}

export default PopUp;
