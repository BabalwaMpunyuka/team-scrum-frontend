import { Icon } from "@iconify/react";

export const SidebarItems = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <Icon icon="ic:baseline-dashboard"/>,
        id: '1'
      },
    {
      title: 'Account',
      path: '/account',
      icon: <Icon icon="ic:outline-manage-accounts"/>,
      id: '2'
    },
    {
      title: 'History',
      path: '/reports',
      icon: <Icon icon="majesticons:file-report-line" />,
      id: '3'
    },
    {
      title: 'Plans & Payments',
      path: '/',
      icon: <Icon icon="ci:settings" />,
      id: '5'
    },
  ];