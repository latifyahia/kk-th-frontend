import SurprisedCat from '../../assets/surprisedcat.jpg';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <img className="image" src={SurprisedCat} alt="Surprised Cat" />
      <h1 className="error-message">Sorry...This page does not exist.</h1>
    </div>
  );
};

export default ErrorPage;
