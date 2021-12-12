import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  return (
    <>
      <div className="des">
        <section id="header">
          <div className="container-fluid pt-5 pt-lg-5">
            <div className="row pt-5 pt-lg-5">
              <div className="col-12 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1">
                  <h1>
                    Develop and Grow with <br />
                    <strong className="desbrand">VichaarDhara</strong>
                  </h1>
                  <h2 className="my-3"> Welcome to our page...</h2>
                  <div className="mt-3 desbut">
                    <button
                      type="button"
                      className="btn btn-outline-warning desbut"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      {/*<Link to="/Home">Get started</Link>*/}
                      Get started
                    </button>
                    <div
                      className="modal fade"
                      data-backdrop="false"
                      role="dialog"
                      id="loginModal"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3 className="modal-title">Login Form</h3>
                            <button
                              type="buttton"
                              className="close"
                              data-dismiss="modal"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                class="form-control"
                                placeholder="Dummy Username and Password"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                class="form-control"
                                placeholder="Simply click on Sign-in button"
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-success">
                              <Link to="/Home">Sign in</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
