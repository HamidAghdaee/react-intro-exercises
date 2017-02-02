//create an App Component which renders
//the menu component as well as the hello world component beneath it.

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Menu />
      </div>
    );
  }
}
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
