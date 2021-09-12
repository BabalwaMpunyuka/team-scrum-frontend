import { Icon } from "@iconify/react";

export const SidebarItems = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <Icon icon="ic:baseline-dashboard"/>,
        cName: 'nav-text'
      },
    {
      title: 'Account',
      path: '/account',
      icon: <Icon icon="ic:outline-manage-accounts"/>,
      cName: 'nav-text'
    },
    {
      title: 'Report History',
      path: '/reports',
      icon: <Icon icon="majesticons:file-report-line" />,
      cName: 'nav-text'
    },
    {
      title: 'Business Listings',
      path: '/',
      icon: <Icon  icon="mdi:briefcase-variant-outline"/>,
      cName: 'nav-text'
    },
    {
      title: 'Settings',
      path: '/',
      icon: <Icon icon="ci:settings" />,
      cName: 'nav-text'
    },
  ];