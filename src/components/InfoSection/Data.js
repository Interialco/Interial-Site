import responsivesvg from '../../images/responsive.svg'
import lostonlinesvg from '../../images/lostonline.svg'
import mailsvg from '../../images/mail.svg'


export const AboutInfo = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Purpose Statement',
  headline: 'About us',
  description: 'Our purpose is to extend the reach of technology in profound ways.',
  buttonLabel: 'Learn More',
  buttonTo: 'wip',
  imgStart: true,
  img: responsivesvg,
  alt: 'Responsive',
  dark: true,
  primary: true,
  darkText: false,
};

export const DiscoverInfo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Top Line',
  headline: 'Discover',
  description: 'Description',
  buttonLabel: 'Button Label',
  buttonTo: 'wip',
  imgStart: false,
  img: lostonlinesvg,
  alt: 'Responsive',
  dark: false,
  primary: false,
  darkText: true,
};

export const ContactUsInfo = {
  id: 'contact us',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Top Line',
  headline: 'Connect',
  description: 'We know that our clients have unique needs and circumstances. Tell us more about your idea, and we will get back to you soon with some plans of how we can address those circumstances while creating the most stable software possible.',
  buttonLabel: 'Email us',
  buttonTo: 'wip',
  imgStart: true,
  img: mailsvg,
  alt: 'Responsive',
  dark: false,
  primary: false,
  darkText: true,
};