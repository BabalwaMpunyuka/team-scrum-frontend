import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabItems = [
    {
        title: 'Financial & investment appraisal',
        path: 'financial-appraisals',
        icon: <FontAwesomeIcon icon={["fas", "chart-area"]} />,
        description: 'Equity analysis and appraisal using python programming, excel, power BI',
        id: '1'
      },
    {
      title: 'Financial analytics and diagnostics',
      path: 'financial-diagnostic',
      icon: <FontAwesomeIcon icon={["fas", "chart-line"]} />,
      description: 'Financial analytics and diagnostics using Excel, ptyhon, power BI',
      id: '2'
    },
    {
      title: 'Financial modelling and evaluation',
      path: 'financial-modelling',
      icon: <FontAwesomeIcon icon={["fas", "chart-bar"]} />,
      description: 'FInancial modelling and evaluation in Excel, ptyhon, power BI',
      id: '3'
    }
  ];