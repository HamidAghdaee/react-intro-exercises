//exercise: create a Menu component which renders the following:
// <div>
//   <ul>
//     <li>Home</li>
//     <li>Services</li>
//     <li>About</li>
//     <li>Contact Us</li>
//   </ul>
// </div>
//Add the menu to page instead of the Hello World Component.

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
    <Menu />,
    document.getElementById('root')
);
