import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd',
};

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
