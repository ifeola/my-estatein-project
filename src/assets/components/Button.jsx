const Button = ({ content, bgColor, border }) => {
  const style = {
    fontSize: "14px",
    fontWeight: "500",
    color: "var(--white)",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "var(--spacing-14) var(--spacing-40)",
    border: border ? "1px solid var(--grey-15)" : "var(--purple-60)",
    backgroundColor: bgColor ? "var(--purple-60)" : "transparent",
  };

  return <button style={style}>{content}</button>;
};
export default Button;
