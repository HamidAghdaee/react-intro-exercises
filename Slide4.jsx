//Lets modify Menu to accept an Array of strings which are to be the titles
//for the menu items.

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
      </div>
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

          {/* [<div>Home</div>, <div>Services</div>] */}
        </ul>
      </div>
    );
  }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
