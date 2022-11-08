import React from "react";
// small react is a module, it has a collection of classNamees, and one such className
// is a Component className and inside this className you have the render method.

// replace className with classNameName
class Footer extends React.Component {
  render() {
    // render is the method and return is akeyword.
    return (
      <div>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-top pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">© 2022 Company, Inc</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
