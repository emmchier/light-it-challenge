import React from 'react';

import {
  AberturasIcon,
  AddIcon,
  ArrowIcon,
  ChevronIcon,
  EquipamientoIcon,
  SustractIcon,
  TerminacionesIcon,
} from '../../../ui/svg';

const Icon = ({ icon = '', color, hover }) => {
  const getIcon = () => {
    switch (icon) {
      case 'add':
        return <AddIcon color={color} hover={hover} />;
      case 'aberturas':
        return <AberturasIcon color={color} hover={hover} />;
      case 'arrow':
        return <ArrowIcon color={color} hover={hover} />;
      case 'chevron':
        return <ChevronIcon color={color} hover={hover} />;
      case 'equipamiento':
        return <EquipamientoIcon color={color} hover={hover} />;
      case 'sustract':
        return <SustractIcon color={color} hover={hover} />;
      case 'terminaciones':
        return <TerminacionesIcon color={color} hover={hover} />;
      default:
        break;
    }
  };
  return <>{getIcon()}</>;
};

export default Icon;
