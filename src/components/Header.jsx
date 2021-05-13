import logo from '../logo.svg';

function Header(props) {

  console.log(props);
  const city = props.city;

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          city is : {city}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

export default Header;