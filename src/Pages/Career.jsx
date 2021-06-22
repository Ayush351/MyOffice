import React from "react";
import Navbar from "../Navbar";
import Linechart from "../Charts/Linechart";
import Barchart from "../Charts/Barchart";

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid car-page mt-0 pt-5">
        <br />
        <br />
        <div className="container border border-warning border-top-0">
          <h1> Career Growth </h1>
        </div>
      </div>
      <div
        className="container-fluid p-3 my-3"
        style={{ backgroundColor: "#d2d3c9" }}
      >
        <div className="row">
          <div className="col-xl-11 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="row my-5">
              <div className="col-md-4 ">
                <div
                  className="card p-3 shadow rounded text-center"
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <br />
                  <h5>
                    <strong>Performance Score : 18/20</strong>
                  </h5>
                  <small className="text-muted">Performance Ratio : 0.9</small>
                  <br />
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="card p-4 shadow rounded text-center"
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <br />
                  <h5>
                    <strong>Engagement Score : 25</strong>
                  </h5>
                  <br />
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="card p-3 shadow rounded text-center "
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <br />
                  <h5>
                    <strong>Current Role : Associate Developer</strong>
                  </h5>
                  <br />
                </div>
              </div>
            </div>
            <hr />
            {/*Project */}
            <div className="row mb-5">
              <div className="col-md-8 mx-auto">
                <div
                  className="card shadow-sm p-2 m-1"
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <h2>Projects</h2>
                </div>
                <ul className="list-group">
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-primary"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>
                      First Project
                      <span className="float-right">
                        <button className="btn btn-outline-info">
                          Details
                        </button>
                      </span>
                    </h5>
                  </li>
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-primary"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>
                      Second Project
                      <span className="float-right">
                        <button className="btn btn-outline-info">
                          Details
                        </button>
                      </span>
                    </h5>
                  </li>
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-primary"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>
                      Third Project
                      <span className="float-right">
                        <button className="btn btn-outline-info">
                          Details
                        </button>
                      </span>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            {/*Project */}
            <hr />
            {/**Achievement */}
            <div className="row mb-5">
              <div className="col-md-8 mx-auto">
                <div
                  className="card shadow-sm p-2 m-1"
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <h2>Achievements</h2>
                </div>
                <ul className="list-group">
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-warning"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>Lorem Ipsum...</h5>
                  </li>
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-warning"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>Lorem Ipsum...</h5>
                  </li>
                  <li
                    className="list-group-item p-auto border-top-0 border-right-0 border-bottom-0 mb-1 border-warning"
                    style={{ borderWidth: "3px" }}
                  >
                    <h5>Lorem Ipsum...</h5>
                  </li>
                </ul>
              </div>
            </div>
            {/**Achievement */}
            {/*Past Record*/}
            <div className="row mb-5">
              <div className="col-md-10 mx-auto">
                <div
                  className="card  shadow-sm p-2 mb-2"
                  style={{
                    borderWidth: "3px",
                    borderColor: "#fff",
                    backgroundColor: "#dbf6e9",
                  }}
                >
                  <h2> Past Record</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-10 mx-auto"
                style={{ backgroundColor: "#e1ffc2" }}
              >
                <div className="chart ch-disp mx-auto mb-5">
                  <Linechart />
                </div>
                <div className="chart ch-disp mx-auto mb-5">
                  <Barchart />
                </div>
              </div>
            </div>
            {/*Past Record*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
