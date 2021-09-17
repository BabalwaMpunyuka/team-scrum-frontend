import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioContent from "../../components/portfolio/content/portfolioContent";
// import styles from "../../components/portfolio/content/PortfolioContent.module.css";
import { serviceItems } from "./serviceItems";

const initialState = {
  serviceId: "",
  serviceDesc:"",
  items: [],
  embedItems: [],
  serviceTitle:""
};

function Service() {
  const [service, setService] = useState(initialState);
  let { serviceId } = useParams();

  useEffect(() => {
    setServiceValue(
      "serviceId",
      serviceId ? serviceId : "financial-appraisals"
    );
    loadService();
    // eslint-disable-next-line
  }, [serviceId, service.serviceId]);

  const setServiceValue = (key, value) => {
    setService((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const loadService = () => {
    const currentService = serviceItems.find(
      (serviceItem) => serviceItem.serviceId === service.serviceId
    );
    setService((prevState) => ({
      ...prevState,
      serviceTitle:currentService ? currentService.serviceTitle : "",
      serviceDesc:currentService ? currentService.serviceDesc : "",
      items: currentService ? currentService.items : [],
      embedItems: currentService ? currentService.embedItems : [],
    }));
  };

  return (
    <div className="container">
     {service.serviceTitle && <h1 className="pt-2 mt-3">{service.serviceTitle}</h1>}
     {service.serviceDesc && <p className="mt-3 mx-3">{service.serviceDesc}</p>}
      <PortfolioContent service={service} />
    </div>
  );
}

export default Service;
