import React from 'react';
import { Layout, Button } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height:'50px' }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/Images/map.jpg" alt="Logo" style={{ height: '50px', width: 'auto', marginRight: '16px' }}/>
      {/* <Button type="primary" style={{ marginRight: '8px' }}><h3 style={{ margin: 0 }}>OSM</h3></Button> */}
        <h3 style={{ margin: 0 }}>OpenStreetMap Map Application</h3>
      </div>
      <nav>
        <Button type="primary" style={{ marginRight: '8px' }}>Login</Button>
        <Button style={{ marginRight: '8px' }}>Logout</Button>
        <Button>Profile</Button>
      </nav>
    </AntHeader>
  );
};

export default Header;