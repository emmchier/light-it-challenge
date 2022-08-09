import React from 'react';
import PropTypes from 'prop-types';

import SidebarItem from './sidebar-item';
import { sidebarList } from '../../../../domain/sidebar-list';

const Sidebar = ({ side, alignContent }) => (
  <div className={`sidebar ${alignContent} ${side}`}>
    <ul className="sidebar__content">
      {sidebarList?.map((item) => (
        <SidebarItem key={item.slug} icon={item.icon} slug={item.slug} isActive={item.isActive} />
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  items: PropTypes.array,
  side: PropTypes.string,
  alignContent: PropTypes.string,
};

Sidebar.defaultProps = {
  items: [],
  side: 'left',
  alignContent: 'center',
};

export default Sidebar;
