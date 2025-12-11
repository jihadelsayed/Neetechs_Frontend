export interface NavItem {
  id: number;
  link: string;
  title: string;
  mega_menu?: boolean;
}

// الهيدر الأساسي (المنيو اللي في النص)
const BASE_MENU: NavItem[] = [
  {
    id: 1,
    link: '/tools',
    title: 'Tools',
    mega_menu: false,
  },
  {
    id: 2,
    link: '/digital-products',
    title: 'Products',
    mega_menu: false,
  },
  //   {
  //   id: 2,
  //   link: '/tutorials',
  //   title: 'Tutorials',
  //   mega_menu: false,
  // },
  {
    id: 3,
    link: '/company',      // صفحة مدموجة: About + Contact
    title: 'Company',      // تقدر تغيّرها لـ "About & Contact" لو تحب
    mega_menu: false,
  },
];

// desktop menu
export const menu_data: NavItem[] = BASE_MENU;

// mobile menu (نفس العناصر عشان ما يصير اختلاف)
export const mobile_menu: NavItem[] = BASE_MENU;
