import React, { useContext } from 'react';

import { ApiContext } from '../../../../../context';

import Button from '../../../atoms/button';
import Empty from '../../../atoms/empty';
import Heading from '../../../atoms/heading';
import Loading from '../../../atoms/loading';
import CurrentOptionItem from './current-option-item';

const SidebarCurrentOption = ({ option, setShowCurrentOption }) => {
  const { loading } = useContext(ApiContext);

  return (
    <div className="current-option fade-in">
      <Button
        onClick={() => setShowCurrentOption(false)}
        iconLeft={true}
        ariaLabel={`volver a ${option.title}`}
        variant="text"
      >
        {option.title}
      </Button>
      <Heading variant="h4" weight="font-bold" cap="capitalize">
        {option.name}
      </Heading>
      {loading === false ? (
        option.items.length < 0 ? (
          <ul className="current-option__list">
            {option.items?.map((item) => (
              <CurrentOptionItem key={item.name} item={item} />
            ))}
          </ul>
        ) : (
          <Empty text={option.name} />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SidebarCurrentOption;
