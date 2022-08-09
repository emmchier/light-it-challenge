import React from 'react';

import Image from '../../../../atoms/image';
import Text from '../../../../atoms/text';
import DefaultImg from '../../../../../../assets/default-img-bg.svg';

const CurrentOptionItem = ({ item }) => {
  return (
    <li className="current-option__item">
      <Image src={item.img} alt={item.name} onError={`/assets/default-img-bg.svg` || DefaultImg} />
      <Text cap="capitalize">{item.name}</Text>
    </li>
  );
};

export default CurrentOptionItem;
