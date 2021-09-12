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
      title: 'Report History',
      path: '/reports',
      icon: <Icon icon="majesticons:file-report-line" />,
      id: '3'
    },
    {
      title: 'Business Listings',
      path: '/',
      icon: <Icon  icon="mdi:briefcase-variant-outline"/>,
      id: '4'
    },
    {
      title: 'Settings',
      path: '/',
      icon: <Icon icon="ci:settings" />,
      id: '5'
    },
  ];