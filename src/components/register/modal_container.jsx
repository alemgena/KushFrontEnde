import { useSelector } from "react-redux";
import ModalHeader from "./modal_header";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import PageControl from "./page_control";
import PageIndicator from "./page_indicator";

const ModalContainer = () => {
  const currentPage = useSelector((state) => state.register.currentPage);

  return (
    <div className="modal-container">
      <ModalHeader />
      <div className="content">
        <div className="title"> Register </div>
        <PageIndicator />

        {currentPage === 1 ? (
          <Page1 />
        ) : currentPage === 2 ? (
          <Page2 />
        ) : currentPage === 3 ? (
          <Page3 />
        ) : (
          <Page4 />
        )}
        
      </div>
    </div>
  );
};

export default ModalContainer;
