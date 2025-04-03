import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { TOURNAMENT } from 'astrowind:config';

const list = Object.values(TOURNAMENT).filter((x: DivisionConfig) => x.code) as DivisionConfig[];

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
      links: [
        // {
        //   text: 'SaaS',
        //   href: getPermalink('/homes/saas'),
        // },
        // {
        //   text: 'Startup',
        //   href: getPermalink('/homes/startup'),
        // },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },

    {
      text: 'Tournament',
      links: [
        {
          text: 'Schedules',
          href: getPermalink('/tournament/schedules'),
        },
        {
          text: 'Rules & Regulation',
          href: getPermalink('/tournament/rules'),
        },
        {
          text: 'Registration',
          href: getPermalink('/tournament/registration'),
        },
        {
          text: 'Venue',
          href: getPermalink('/tournament/venue'),
        },
      ],
    },
    {
      text: 'Pairing & Results',
      links: list.map((item) => ({
        text: item.name,
        href: getPermalink('/division/' + item.code),
      })),

      //[
      // {
      //   text: 'U8 Open',
      //   href: getPermalink('/division/u8-open'),
      // },
      // {
      //   text: 'U8 Girls',
      //   href: getPermalink('/division/u8-girl'),
      // },
      // {
      //   text: 'U10 Open',
      //   href: getPermalink('/division/u8-open'),
      // },
      // {
      //   text: 'U10 Girls',
      //   href: getPermalink('/division/u8-girl'),
      // },
      // {
      //   text: 'Services',
      //   href: getPermalink('/services'),
      // },
      // {
      //   text: 'Pricing',
      //   href: getPermalink('/pricing'),
      // },
      // {
      //   text: 'About us',
      //   href: getPermalink('/about'),
      // },
      // {
      //   text: 'Contact',
      //   href: getPermalink('/contact'),
      // },
      // {
      //   text: 'Terms',
      //   href: getPermalink('/terms'),
      // },
      // {
      //   text: 'Privacy policy',
      //   href: getPermalink('/privacy'),
      // },
      // ],
    },
    {
      text: 'Supports',
      links: [
        {
          text: 'Travel',
          href: getPermalink('/other/travel'),
        },
        {
          text: 'Accommodation',
          href: getPermalink('/other/Accommodation'),
        },
        {
          text: 'Parking',
          href: getPermalink('/other/parking'),
        },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: 'Register', href: TOURNAMENT.registrationUrl, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Division',
      links: list.map((item) => ({
        text: item.name,
        href: getPermalink('/division/' + item.code),
      })),
    },
    {
      title: 'Tournament',
      links: [
        {
          text: 'Schedules',
          href: getPermalink('/tournament/schedules'),
        },
        {
          text: 'Rules & Regulation',
          href: getPermalink('/tournament/rules'),
        },
        {
          text: 'Registration',
          href: getPermalink('/tournament/registration'),
        },
        {
          text: 'Venue',
          href: getPermalink('/tournament/venue'),
        },
      ],
    },
    {
      title: 'Supports',
      links: [
        {
          text: 'Travel',
          href: getPermalink('/other/travel'),
        },
        {
          text: 'Accommodation',
          href: getPermalink('/other/Accommodation'),
        },
        {
          text: 'Parking',
          href: getPermalink('/other/parking'),
        },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
