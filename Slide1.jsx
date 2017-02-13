//exercise: create a Menu component which renders the following:
// <div>
//   <ul>
//     <li>Home</li>
//     <li>Services</li>
//     <li>About</li>
//     <li>Contact Us</li>
//   </ul>
// </div>
//Add the menu to the page instead of the Hello World Component.


class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
