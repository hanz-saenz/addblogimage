import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes';
import { Box } from '@mui/material';

const { Sider } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={200} collapsedWidth={80}>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
        <>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <Link to="/home">
              <Box
                component="img"
                src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                to="/home"
                alt="Soft UI Logo"
                width="70%"
              />
            </Link>
          </div>
          {routes.map((route) => (
            <Menu.Item key={route.key} icon={route.icon}>
              <Link to={route.route}>{route.name}</Link>
              {!collapsed}
            </Menu.Item>
          ))}
        </>
      </Menu>
    </Sider>
  );
};

export default NavBar;
