import React from "react";
import Navbar from "../Navbar";

const Seekask = () => {
  return (
    <>
      <Navbar />

      <div className="jumbotron jumbotron-fluid mb-5 seek-ask">
        <div className="container mt-5 border border-right-0 border-warning rounded-lg">
          <h1>
            <strong>Seek & Ask</strong>
          </h1>
          <p>
            Give to the world the best you have,
            <br />
            and the best will come back to you!!!
          </p>
        </div>
      </div>

      <div className="containner-fluid mt-10">
        <div className="row">
          <div className="col-xl-10 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card shadow-lg rounded">
              <div className="container p-3">
                <div className="row">
                  {/**sub col */}
                  <div className="col-lg-6 col-sm-12">
                    <div className="container">
                      <div className=" card shadow bg-white rounded">
                        <div
                          class="shadow-sm p-3 bg-white rounded"
                          data-toggle="collapse"
                          data-target="#demo"
                        >
                          <a href="#demo">
                            <h5
                              style={{
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <strong>Seek</strong>
                            </h5>
                          </a>
                        </div>
                        <div id="demo" class="collapse">
                          <ul class="list-group">
                            <li class="list-group-item">
                              Employee One
                              <button
                                type="button"
                                className="btn btn-info float-right"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Ask
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Ask your query
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Lorem ipsum..."
                                      ></textarea>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        data-dismiss="modal"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              Employee Two
                              <button
                                type="button"
                                className="btn btn-info float-right"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Ask
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Ask your query
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Lorem ipsum..."
                                      ></textarea>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              Employee Three
                              <button
                                type="button"
                                className="btn btn-info float-right"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Ask
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Ask your query
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Lorem ipsum..."
                                      ></textarea>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Employee Four
                              <button
                                type="button"
                                className="btn btn-info float-right"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Ask
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Ask your query
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Lorem ipsum..."
                                      ></textarea>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        data-dismiss="modal"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Employee Five
                              <button
                                type="button"
                                className="btn btn-info float-right"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Ask
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Ask your query
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Lorem ipsum..."
                                      ></textarea>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        data-dismiss="modal"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**sub col */}
                  {/**sub col */}
                  <div className="col-lg-6 col-sm-12">
                    <div className="container">
                      <div className=" card shadow bg-white rounded">
                        <div
                          class="shadow-sm p-3 bg-white rounded"
                          data-toggle="collapse"
                          data-target="#dem"
                        >
                          <a href="#demo">
                            <h5
                              style={{
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <strong>Request <span class="badge badge-info">3</span></strong>
                            </h5>
                          </a>
                        </div>
                        <div id="dem" class="collapse">
                          <ul class="list-group">
                            <li class="list-group-item">
                              Employee One
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Help
                              </button>
                            </li>
                            <li class="list-group-item">
                              Employee Two
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Help
                              </button>
                            </li>
                            <li class="list-group-item">
                              Employee Three
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Help
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*sub col*/}
                </div>
              </div>
            </div>
          </div>
          {/**col */}
        </div>
      </div>
    </>
  );
};

export default Seekask;
