function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2>Shopping List</h2>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
