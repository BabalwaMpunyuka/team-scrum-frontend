import { useState } from "react";
import styles from "./Tabs.module.css";
import { Link } from "react-router-dom";
import { TabItems } from "./tabItems";

export default function Tabs({url}) {
  const [active, setActive] = useState("financial-appraisals");
  const handleActive = (tab) => {
    setActive(tab);
  };
  return (
    <div className="container">
      <div className="row py-4">
        {TabItems.map((item, index) => {
          return (
            <div key={index} className={`${styles.tab} col-md-4`}>
              <Link
                to={`${url}/${item.path}`}
                className={`${styles.link} ${
                  active === item.path ? styles.active : ""
                }`}
                onClick={() => {
                  handleActive(item.path);
                }}
              >
                <div className={`${styles.tab}`}>
                  <div className={styles.icon_wrapper}>
                    <span className={styles.icon}>{item.icon} </span>
                  </div>
                  <div className={styles.text_wrapper}>
                    <h2>{item.title}</h2>
                    <p className={styles.text}>{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
