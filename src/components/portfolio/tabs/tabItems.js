import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabItems = [
    {
        title: 'Financial Appraisals',
        path: '/portfolio/financial-appraisals',
        icon: <FontAwesomeIcon icon={["fas", "chart-area"]} />,
        description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
        id: '1'
      },
    {
      title: 'Financial Diagnostics',
      path: '/portfolio/financial-diagnostic',
      icon: <FontAwesomeIcon icon={["fas", "chart-line"]} />,
      description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
      id: '2'
    },
    {
      title: 'Financial Modelling',
      path: '/portfolio/financial-modelling',
      icon: <FontAwesomeIcon icon={["fas", "chart-bar"]} />,
      description: 'Lorem ipsum dolor sit amet, consectetur a aliquam',
      id: '3'
    }
  ];