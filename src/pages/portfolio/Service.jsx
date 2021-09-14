import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PortfolioContent from "../../components/portfolio/content/portfolioContent";
import { serviceItems } from "./serviceItems";

const initialState={
  serviceId: "",
  items: []
}

function Service() {
  const [service, setService]=useState(initialState)
  let { serviceId } = useParams();

  useEffect(()=>{
    setServiceValue("serviceId",serviceId?serviceId:"financial-appraisals");
    loadService();
    // eslint-disable-next-line
  },[serviceId, service.serviceId])

  const setServiceValue =(key,value)=>{
    setService(prevState=>({
        ...prevState,
        [key]: value
      }))
  }
  const loadService=()=>{
    const currentService = serviceItems.find(serviceItem=>serviceItem.serviceId===service.serviceId);
    setServiceValue("items",currentService?currentService.items:[]);
  }
  
  return (
    <div className="container">
      <PortfolioContent visuals={service.items} />
    </div>
  );
}

export default Service;
