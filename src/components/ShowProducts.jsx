import { useNavigate, useParams } from "react-router-dom";

const ShowProducts = () => {
  const navigate = useNavigate();
  const myParams = useParams();
  console.log(myParams);

  if (+myParams.id === 404) {
    return <h1>Page not found 👀</h1>;
  }
  const redirectToHome = () => {
    navigate("/");
  };
  const redirectToAbout = () => {
    navigate("/about");
  };
  const redirectToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <h1> here is Product section 😎</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, dolor!
      </p>
      <button className="btn btn-info mx-4" onClick={redirectToHome}>
        Go To Home
      </button>
      <button className="btn btn-info mx-4" onClick={redirectToAbout}>
        Go To About
      </button>
      <button className="btn btn-info mx-4" onClick={redirectToContact}>
        Go To Contact
      </button>
    </>
  );
};

export default ShowProducts;
