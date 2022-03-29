import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useHistory } from "react-router";
const SearchBox = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e && e.preventDefault();

    text && history.push(`/search/${text}`);
  };
  return (
    <div className="search-box">
      <form
        className="search-bar"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {" "}
        <div className="input-outer" style={{ display: "flex" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="input"
          />{" "}
          {text && <div className="clear" onClick={()=>{setText('')}}> &times;</div>}{" "}
        </div>
        <div onClick={handleSubmit} className="button">
         Search
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
