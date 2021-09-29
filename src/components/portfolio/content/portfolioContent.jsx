import styles from "./PortfolioContent.module.css";

const PortfolioContent = ({ service }) => {
  return (
    <div>
      {service.embedItems.length ? (
        service.embedItems.map((visual) => {
          return (
            <div key={visual.id} className={`row ${styles.visualization}`}>
              <div className={`${styles.descClass} ${styles.desc}`}>
                {visual.title && <h2 className="py-2 mt-3 mx-3">{visual.title}</h2>}
              </div>
              {visual.embedTag}
            </div>
          );
        })
      ) : service.items.length ? (
        service.items.map((visual) => {
          return (
            <div key={visual.id} className={`${styles.visualization}`}>
              <div className={`${visual.descClass} ${styles.desc}`}>
                {visual.title && <h2 className="mt-3">{visual.title}</h2>}
                {visual.description && <p className="">{visual.description}</p>}
              </div>
              <div className={`${styles.img_wrapper}`}>
                <img
                  className="img-responsive img-fluid"
                  src={process.env.PUBLIC_URL + visual.src}
                  alt={visual.description.substring(1, 20)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className={`row ${styles.visualization}`}>
          <div className="alert alert-danger">
            <p>Visualizations coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioContent;
