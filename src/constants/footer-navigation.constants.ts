import { faBookmark, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

export const FOOTER_BUTTONS = [
  {
    id: 0,
    icon: faHouse,
    path: '/',
    label: 'Головна',
  },
  {
    id: 1,
    icon: faBookmark,
    path: '/follows',
    label: 'Закладки',
  },
  {
    id: 2,
    icon: faUser,
    path: '/profile',
    label: 'Профіль',
  },
];
