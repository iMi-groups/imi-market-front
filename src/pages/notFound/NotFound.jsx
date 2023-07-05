import pageNotFoundIconSvg from "../../assets/images/not-found.svg";

export const NotFound = () => {
  return (
    <div className="page-not-found">
      <p className="error-code">ERROR CODE: 404</p>
      <h1 className="title">Oops! Looks like this isn't a page</h1>
      <div className="img">
        <img src={pageNotFoundIconSvg} alt="page not found" />
      </div>
      <a href="/" className="link-to-home">
        Take me home
      </a>
    </div>
  );
};
