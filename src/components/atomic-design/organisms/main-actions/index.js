import React from 'react';
import DirectionButtons from './direction-buttons';

import ResizeButtons from './resize-buttons';

const MainActions = () => {
  return (
    <div className="main-actions">
      <ResizeButtons />
      <DirectionButtons />
    </div>
  );
};

export default MainActions;
