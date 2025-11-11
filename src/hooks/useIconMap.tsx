import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faEnvelope,
  faHeadphones,
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconProp> = {
  Home: faHome as IconProp,
  About: faUser as IconProp,
  Work: faHeadphones as IconProp,
  Contact: faEnvelope as IconProp,
};

export default iconMap;
