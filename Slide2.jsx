//create an App Component which renders
//the menu component as well as the hello world component beneath it.

class Menu extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  }
};

class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);
