import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabItems = [
    {
        title: 'Financial Appraisals',
        path: 'financial-appraisals',
        icon: <FontAwesomeIcon icon={["fas", "chart-area"]} />,
        description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
        id: '1'
      },
    {
      title: 'Financial Diagnostics',
      path: 'financial-diagnostic',
      icon: <FontAwesomeIcon icon={["fas", "chart-line"]} />,
      description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
      id: '2'
    },
    {
      title: 'Financial Modelling',
      path: 'financial-modelling',
      icon: <FontAwesomeIcon icon={["fas", "chart-bar"]} />,
      description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
      id: '3'
    }
  ];