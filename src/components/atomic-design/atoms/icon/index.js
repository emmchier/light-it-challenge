import React from 'react';
import PropTypes from 'prop-types';

import {
  AberturasIcon,
  AddIcon,
  ArrowIcon,
  ChevronIcon,
  EmptyIcon,
  EquipamientoIcon,
  SpinnerIcon,
  SustractIcon,
  TerminacionesIcon,
} from '../../../ui/svg';

const Icon = ({ icon, color, rotate, ariaLabel }) => {
  const getIcon = () => {
    switch (icon) {
      case 'add':
        return <AddIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'aberturas':
        return <AberturasIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'arrow':
        return <ArrowIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'chevron':
        return <ChevronIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'equipamiento':
        return <EquipamientoIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'sustract':
        return <SustractIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'terminaciones':
        return <TerminacionesIcon color={color} rotate={rotate} ariaLabel={ariaLabel} />;
      case 'empty':
        return <EmptyIcon rotate={rotate} ariaLabel={ariaLabel} />;
      case 'spinner':
        return <SpinnerIcon rotate={rotate} ariaLabel={ariaLabel} />;
      default:
        break;
    }
  };
  return <>{getIcon()}</>;
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
  rotate: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  color: '#000000',
  rotate: 'rotate-0',
};

export default Icon;
