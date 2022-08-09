import React from 'react';

import Image from '../../../../atoms/image';
import Text from '../../../../atoms/text';

const CurrentOptionItem = ({ item }) => {
  return (
    <li className="current-option__item">
      <Image src={item.img} alt={item.name} />
      <Text>{item.name}</Text>
    </li>
  );
};

export default CurrentOptionItem;
