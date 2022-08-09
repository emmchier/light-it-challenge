import React from 'react';
import Button from '../../../atoms/button';
import Heading from '../../../atoms/heading';
import Image from '../../../atoms/image';
import Text from '../../../atoms/text';
import CurrentOptionItem from './current-option-item';

const SidebarCurrentOption = ({ option, setShowCurrentOption }) => {
  return (
    <div className="current-option">
      <Button
        onClick={() => setShowCurrentOption(false)}
        iconLeft={true}
        ariaLabel={`volver a ${option.title}`}
      >
        {option.title}
      </Button>
      <Heading variant="h4" cap="capitalize">
        {option.name}
      </Heading>
      <ul className="current-option__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {option.items?.map((item) => (
          <CurrentOptionItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarCurrentOption;
