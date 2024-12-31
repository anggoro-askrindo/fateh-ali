// Navigation Items Configuration
import {
  DashboardRounded as IconDashboard,
  PeopleRounded as IconUsers,
  Inventory2Rounded as IconProduct,
} from '@mui/icons-material';

export const navigationItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    group: 'Overview',
    icon: IconDashboard,
  },
  {
    label: 'Members',
    href: '/dashboard/members',
    group: 'Overview',
    icon: IconUsers,
    subItems: [
      { label: 'Users', href: '/dashboard/members/user' },
      { label: 'Roles', href: '/dashboard/members/role' },
    ],
  },
  {
    label: 'Products',
    href: '/dashboard/products',
    group: 'Overview',
    icon: IconProduct,
    
  },
];
