import Modal from "react-modal";
import { useSelector } from "react-redux";
import ModalContainer from "./modal_container";
import { useMediaQuery } from "react-responsive";

const Register = () => {
  const isOpen = useSelector((state) => state.register.isOpen);
  
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const sm = useMediaQuery({ query: "(min-width: 576px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  const xl = useMediaQuery({ query: "(min-width: 1200px)" });
  let  width = 'inherit';
  
  if (xl) width='40%'
  else if (lg) width='50%';
  else if (md) width='60%';
  else if (sm) width='75%';
  else if (xs) width='inherit';


  const style = {
    content: {
      width:width,
      // width: xs
      //   ? "inherit"
      //   : sm
      //   ? "80%"
      //   : md
      //   ? "65%"
      //   : lg
      //   ? "50%"
      //   : xl
      //   ? "45%"
      //   : "45%",
      margin: "auto",
      padding: "0",
      borderRadius: "1em",
      boxShadow:
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
      //   overflow:'hidden'
    },
  };

  return (
    <Modal isOpen={isOpen} style={style}>
      {xs}
      <ModalContainer />
    </Modal>
  );
};

export default Register;
