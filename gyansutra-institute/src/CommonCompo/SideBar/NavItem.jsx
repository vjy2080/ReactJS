import React from 'react';

const NavItem = ({ iconClass, linkName }) => {
  return (
    <li>
      <a href="#">
        <i className={iconClass}></i>
        <span className="link_name">{linkName}</span>
      </a>
      <span className="tooltip">{linkName}</span>
    </li>
  );
};

export default NavItem;
