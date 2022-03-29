import titleBackground from "../../images/clothes_title.jpg";
const Title = () => {
  return (
    <div
      className="title"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${titleBackground})`,
      }}
    >
      {/* <img src={titleBackground} alt=""/> */}
      <div className="main-title">Wishlist</div>
     
    </div>
  );
};

export default Title;
