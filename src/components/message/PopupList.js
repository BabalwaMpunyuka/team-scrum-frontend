import PopUp from "./popUp";
import styles from "./popup.module.css";

const PopupList = ({ popups }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={styles.popupWrapper}
    >
      {popups.map((popup, index) => (
        <PopUp
          key={index}
          content={popup.content}
          title={popup.title ? popup.title : ""}
          type={popup.type ? popup.type : ""}
        />
      ))}
    </div>
  );
};

export default PopupList;
