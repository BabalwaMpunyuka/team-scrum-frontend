import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabItems = [
    {
        title: 'Financial Appraisals',
        path: 'financial-appraisals',
        icon: <FontAwesomeIcon icon={["fas", "chart-area"]} />,
        description: 'This involves the use of discounted cash flow techniques to assess a business problem.',
        id: '1'
      },
    {
      title: 'Financial Diagnostics & Analysis',
      path: 'financial-diagnostic',
      icon: <FontAwesomeIcon icon={["fas", "chart-line"]} />,
      description: 'This involves giving insights that can facilitate strategic decisions and actions that improve the overall performance of the business. ',
      id: '2'
    },
    {
      title: 'Financial Modelling',
      path: 'financial-modelling',
      icon: <FontAwesomeIcon icon={["fas", "chart-bar"]} />,
      description: 'This is a representation in numbers of a company\'s operations in the past, present, and the forecasted future. Such models are intended to be used as decision-making tools',
      id: '3'
    }
  ];