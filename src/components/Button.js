function Button({ item, onClick }) {
  return (
    <li className={`calculator__button ${item.class}`} onClick={onClick}>
      {item.htmlText}
    </li>
  );
}

export default Button;
