import "../blocks/header.css";

function Header() {
  const style = {
    position: "relative",
    top: `-40px`,
    left: `0px`,
  };
  return (
    <div className="header space">
      <h1 className="header__title">Christian To</h1>
    </div>
  );
}

export default Header;
