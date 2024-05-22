import React from 'react';
import Initial from './Home';
import NavBar from './NavBar';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
console.log(Header);
console.log(Footer);
const Home = () => {
  return (
    <>
      <NavBar />
      <Content style={{ margin: '0 16px' }}>
        <Initial />
      </Content>
    </>
  );
};

export default Home;
