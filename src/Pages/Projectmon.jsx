import React from "react";
import Navbar from "../Navbar";

const Projectmon = () => {
  return (
    <>
      <Navbar />
      {/** Jumbotron */}
      <div className="jumbotron jumbotron-fluid proj-mon mt-5">
        <div className="container mt-5 border border-warning border-right-0 rounded-lg">
          <h1>
            <strong>Project Monitor</strong>
          </h1>
          <p>
            “Good fortune is what happens when opportunity meets with planning.”
            ― Thomas Edison, inventor
          </p>
        </div>
      </div>
      {/**Jumbotron */}
      {/**Create Project */}
      <div className="containner-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card shadow-lg rounded">
              {/**Main */}
              <div className="container p-3">
                <div className="row">
                  <div className=" mx-auto col-lg-8 col-sm-12">
                    <div className="container">
                      <div className=" card shadow bg-white rounded">
                        <div
                          class="mx-auto shadow-sm p-3 m-2 bg-white rounded"
                          data-toggle="collapse"
                          data-target="#demo"
                        >
                          <a href="#demo">
                            <strong>Add New Project </strong>
                          </a>
                        </div>
                        <div id="demo" class="collapse">
                          <h5 >
                            <div className="form-inline m-2" style={{ textAlign: "center" ,justifyContent:"center" }}>
                              Office Management App
                            </div>
                          </h5>
                          <ul class="list-group">
                            <li class="list-group-item ">
                              Create dashboard.
                              <div class="dropdown dropright">
                                <button
                                  type="button"
                                  class="btn btn-info float-right dropdown-toggle "
                                  data-toggle="dropdown"
                                >
                                  Assign
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="_blank">
                                    Employee 1
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 2
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 3
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Add animation to homepage.
                              <div class="dropdown dropright">
                                <button
                                  type="button"
                                  class="btn btn-info float-right dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  Assign
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="_blank">
                                    Employee 1
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 2
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 3
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Add profile details in database.
                              <div class="dropdown dropright">
                                <button
                                  type="button"
                                  class="btn btn-info float-right dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  Assign
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="_blank">
                                    Employee 1
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 2
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 3
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Sync web app with central database
                              <div class="dropdown dropright">
                                <button
                                  type="button"
                                  class="btn btn-info float-right dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  Assign
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="_blank">
                                    Employee 1
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 2
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 3
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Create a login form
                              <div class="dropdown dropright">
                                <button
                                  type="button"
                                  class="btn btn-info float-right dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  Assign
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="_blank">
                                    Employee 1
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 2
                                  </a>
                                  <a class="dropdown-item" href="_blank">
                                    Employee 3
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**Main */}
            </div>
          </div>
        </div>
      </div>
      {/**Create Project */}

      {/**Existing Project */}
      <div className="containner-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card shadow-lg rounded">
              {/**Main */}
              <div className="container p-3">
                <div className="row">
                  <div className=" mx-auto col-lg-8 col-sm-12">
                    <div className="container">
                      <div className=" card shadow bg-white rounded">
                        <div
                          class="mx-auto shadow-sm p-3 m-2 bg-white rounded"
                          data-toggle="collapse"
                          data-target="#dem"
                        >
                          <a href="#dem">
                            <strong>Project List</strong>
                          </a>
                        </div>
                        <div id="dem" class="collapse">
                          <ul class="list-group">
                            <li class="list-group-item ">
                              Weather App
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Details
                              </button>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-striped progress-bar-animated"
                                  style={{ width: "40%" }}
                                >
                                  40%
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Add animation to homepage.
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Details
                              </button>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-striped progress-bar-animated"
                                  style={{ width: "80%" }}
                                >
                                  80%
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Add profile details in database.
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Details
                              </button>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-striped progress-bar-animated"
                                  style={{ width: "20%" }}
                                >
                                  20%
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Sync web app with central database
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Details
                              </button>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-striped progress-bar-animated"
                                  style={{ width: "80%" }}
                                >
                                  80%
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              Create a login form
                              <button
                                type="button"
                                class="btn btn-info float-right"
                              >
                                Details
                              </button>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                  style={{ width: "100%" }}
                                >
                                  100%
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Existing Project */}
    </>
  );
};

export default Projectmon;
