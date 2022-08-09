import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../../../atoms/image';
import Text from '../../../../atoms/text';
import DefaultImg from '../../../../../../assets/default-img-bg.svg';

const CurrentOptionItem = ({ item }) => (
  <li className="current-option__item">
    <Image src={item.img ? item.img : DefaultImg} alt={item.name} onError={DefaultImg} />
    <Text cap="capitalize">{item.name}</Text>
  </li>
);

CurrentOptionItem.propTypes = {
  item: PropTypes.object,
};

export default CurrentOptionItem;
