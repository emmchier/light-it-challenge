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

const Icon = ({ icon = '', color }) => {
  const getIcon = () => {
    switch (icon) {
      case 'add':
        return <AddIcon color={color} />;
      case 'aberturas':
        return <AberturasIcon color={color} />;
      case 'arrow':
        return <ArrowIcon color={color} />;
      case 'chevron':
        return <ChevronIcon color={color} />;
      case 'equipamiento':
        return <EquipamientoIcon color={color} />;
      case 'sustract':
        return <SustractIcon color={color} />;
      case 'terminaciones':
        return <TerminacionesIcon color={color} />;
      default:
        break;
    }
  };
  return <>{getIcon()}</>;
};

export default Icon;
