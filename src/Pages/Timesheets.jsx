import React from "react";
import Navbar from "../Navbar";

const Timesheets = () => {
  return (
    <>
      <div className="container time-dash p-0">
        <Navbar />
        <h1 style={{ justifyContent: "center", textAlign: "center" }}>
          Timesheet
        </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0 ">
              <div
                className="card shadow-lg rounded"
                style={{ backgroundColor: "#f1f6f9" }}
              >
                <div className="container p-3">
                  <div id="accordion">
                    {/*First */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="card-link"
                          data-toggle="collapse"
                          href="#collapseOne"
                        >
                          Work Note for <strong>9:00</strong> a.m. to{" "}
                          <strong>10:00</strong> a.m.
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Second */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseTwo"
                        >
                          Work Note for <strong>10:00</strong> a.m. to{" "}
                          <strong>11:00</strong> a.m.
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Third */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseThree"
                        >
                          Work Note for <strong>11:00</strong> a.m. to{" "}
                          <strong>12:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Fourth */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseFour"
                        >
                          Work Note for <strong>12:00</strong> p.m. to{" "}
                          <strong>13:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Fifth */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseFive"
                        >
                          Work Note for <strong>13:00</strong> p.m. to{" "}
                          <strong>14:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Sixth */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseSix"
                        >
                          Work Note for <strong>14:00</strong> p.m. to{" "}
                          <strong>15:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Seventh */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseSeven"
                        >
                          Work Note for <strong>15:00</strong> p.m. to{" "}
                          <strong>16:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*Eighth */}
                    <div className="card">
                      <div className="card-header">
                        <a
                          className="collapsed card-link"
                          data-toggle="collapse"
                          href="#collapseEight"
                        >
                          Work Note for <strong>16:00</strong> p.m. to{" "}
                          <strong>17:00</strong> p.m.
                        </a>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div
                          className="card-body p-1"
                          style={{ backgroundColor: "#fbf6f0" }}
                        >
                          <textarea
                            className="form-control"
                            style={{ backgroundColor: "#f9f7cf" }}
                            rows="3"
                            id="comment"
                            name="text"
                            placeholder="Lorem ipsum..."
                          ></textarea>
                          <button className="btn btn-outline-primary m-1">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timesheets;
