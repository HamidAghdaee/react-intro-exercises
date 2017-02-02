//Modify Menu to accept an Array of strings which are to be the titles
//for the menu items.
//Read https://facebook.github.io/react/docs/lists-and-keys.html
//up to where it starts talking about keys to learn about rendering of lists in
//react

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
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
          {
            this.props.items.map(function(m, index){
              return <li>{m}</li>
            })
          }
        </ul>
      </div>
    );
  }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
