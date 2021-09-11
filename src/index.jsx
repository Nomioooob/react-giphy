import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const root = document.querySelector('#root');
if (root) {
  ReactDOM.render(<App />, root);
}

// React component with function
// const Header = (props) => {
//   const { firstName, lastName } = props;
//   return (
//     <section>
//       <h1>Hello {firstName} {lastName}!</h1>
//     </section>
//   );
// };

// Complex React component with classes
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render () {
//     const { firstName, lastName } = this.props;
//     return (
//       <section>
//       <h1>Hey {firstName} {lastName}!</h1>
//       </section>
//     )
//   }
// }

// const root = document.querySelector("#root");
// ReactDOM.render(<Header firstName="Ada" lastName="P" />,root);
