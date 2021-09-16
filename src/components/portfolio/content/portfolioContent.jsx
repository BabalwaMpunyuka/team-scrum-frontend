import styles from "./PortfolioContent.module.css";

const PortfolioContent = ({ visuals }) => {
  return (
    <div>
      {visuals.map((visual) => {
        return (
          <div key={visual.id} className={`row ${styles.visualization}`}>
            <div className={`${visual.descClass} ${styles.desc}`}>
            {visual.title && <h2>{visual.title}</h2>}
              <p>{visual.description}</p>
            </div>
            <div className={`${visual.imgClass} ${styles.img_wrapper}`}>
              <img
                className="img-responsive img-fluid"
                src={process.env.PUBLIC_URL + visual.src}
                alt={visual.description.substring(1, 20)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioContent;
