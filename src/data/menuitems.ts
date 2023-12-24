export const productsMenu = {
  title: "Products",
  items: [
    {
      item: "SMART HOME AUTOMATION LIGHTING",
      link: "/products/categories/smart_home_automation_lighting",
    },
    {
      item: "DOOR BELLS & ACCESS CONTROL",
      link: "/products/categories/door_bells_and_access_control",
    },
    {
      item: "Smart Lighting",
      link: "#",
    },
    {
      item: "Shading System",
      link: "#",
    },
  ],
};
export const solutionsMenu = {
  title: "Solutions",
  items: [
    {
      item: "Smart Home",
      link: "#",
    },
    {
      item: "Home Security",
      link: "#",
    },
    {
      item: "Industrial Application",
      link: "#",
    },
    {
      item: "Smart Ambient Light",
      link: "#",
    },
  ],
};
export const supportMenu = {
    title: "Support",
    items: [
      {
        item: "Brochures",
        link: "#",
      },
      {
        item: "Manuals",
        link: "#",
      },
      {
        item: "Videos",
        link: "#",
      },
      {
        item: "Events",
        link: "#",
      },
    ],
  };
  export const aboutMenu = {
    title: "About Us",
    items: [
      {
        item: "News",
        link: "#",
      },
      {
        item: "Company Profile",
        link: "#",
      },
    ],
  };
  export const menuItems = [
    {title: 'Home',isDropdown: false, link: '/', items: []},
    {...productsMenu, isDropdown: true},
    {...solutionsMenu, isDropdown: true},
    {title: 'Technology',isDropdown: false, link: '/technology',  items: []},
    {title: 'Partnership',isDropdown: false, link: '/partnership',  items: []},
    {...supportMenu, isDropdown: true},
    {...aboutMenu, isDropdown: true},
  ]