import styles from "./Tabs.module.css";
import { useHistory } from "react-router-dom";
import { TabItems } from "./tabItems";
export default function Tabs({active}) {
  const history=useHistory();
  const handleActive=(menu)=>{
    history.push(menu);
  }
  return (
    <div className="container">
      <div className="row">
      {TabItems.map((item, index) => {return (
        <div key={index} className={`col-md-4 ${styles.tab} ${active===item.path?styles.active:""}`}  onClick={()=>{handleActive(item.path)}}>
          <div className={styles.icon_wrapper}>
          <span className={styles.icon}>{item.icon} </span>
          </div>
          <div className={styles.text_wrapper}>
            <h2>{item.title}</h2>
            <p className={styles.text}>
            {item.description}
            </p>
          </div>
        </div>
          );
        })}
      </div>
    </div>
  );
}
