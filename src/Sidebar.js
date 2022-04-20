import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// ...

export default function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/service">
        Service
      </a>
      <a className="menu-item" href="/products">
        Productos
      </a>
    </Menu>
  );
};