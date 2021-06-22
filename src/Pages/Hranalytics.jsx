import React from "react";
import Lineproone from "../Charts/Lineproone";
import Lineprotwo from "../Charts/Lineprotwo";
import Lineprothree from "../Charts/Lineprothree";
import Compareone from "../Charts/Compareone";
import Comparetwo from "../Charts/Comparetwo";
import Comparethree from "../Charts/Comparethree";

import Navbar from "../Navbar";
import Barchart from "../Charts/Barchart";
import Barcharttwo from "../Charts/Barcharttwo";
import Barchartthree from "../Charts/Barchartthree";

import Linechart from "../Charts/Linechart";
import Linecharttwo from "../Charts/Linecharttwo";
import Linechartthree from "../Charts/Linechartthree";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hranalytics = () => {
  return (
    <>
      <Navbar />
      <div class="jumbotron jumbotron-fluid hr-page mt-0 mb-3 pt-5">
        <br />
        <br />
        <div class="container border border-warning border-top-0">
          <h1> HR Analytics </h1>
        </div>
      </div>
      <div
        className="container-fluid p-3 my-3"
        style={{ backgroundColor: "#fff8cd" }}
      >
        <div classNam="row">
          <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div
              className="card p-2 m-3"
              style={{ textAlign: "center", borderColor: "#583d72" }}
            >
              <h2>Project Stats</h2>

              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <a
                      class="card-link"
                      data-toggle="collapse"
                      href="#collapseOne"
                    >
                      First Project
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <div
                            className="card ch ch-disp-short"
                            style={{ width: "18rem" }}
                          >
                            <Compareone />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <Lineproone />
                        </div>
                        <div className="col-md-3">
                          <div
                            className="card pt-1"
                            style={{
                              width: "18rem",
                              backgroundColor: "#fff3e2",
                              borderColor: "#ffa62b",
                            }}
                          >
                            <h5>Team Id: VICT9898</h5>
                            <ul class="list-group">
                              <li class="list-group-item ">
                                First Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu" style={{textAlign:"center"}}>
                                  <Link to="/Profileone" target="blank" >Profile</Link>
                                    <a class="dropdown-item" href="_blank" >
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Second Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Third Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fourth Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fifth Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
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
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#collapseTwo"
                    >
                      Second Project
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <div
                            className="card ch ch-disp-short"
                            style={{ width: "18rem" }}
                          >
                            <Comparetwo />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <Lineprotwo />
                        </div>
                        <div className="col-md-3">
                          <div
                            className="card pt-1"
                            style={{
                              width: "18rem",
                              backgroundColor: "#fff3e2",
                              borderColor: "#ffa62b",
                            }}
                          >
                            <h5>Team Id: VICT9559</h5>
                            <ul class="list-group">
                              <li class="list-group-item">
                                First Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Second Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Third Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fourth Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fifth Employee
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
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
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#collapseThree"
                    >
                      Third Project
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <div
                            className="card ch ch-disp-short"
                            style={{ width: "18rem" }}
                          >
                            <Comparethree />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <Lineprothree />
                        </div>
                        <div className="col-md-3">
                          <div
                            className="card pt-1"
                            style={{
                              width: "18rem",
                              backgroundColor: "#fff3e2",
                              borderColor: "#ffa62b",
                            }}
                          >
                            <h5>Team Id: VICT9000</h5>
                            <ul class="list-group">
                              <li class="list-group-item">
                                First Employee{" "}
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Second Employee{" "}
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Third Employee{" "}
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fourth Employee{" "}
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li class="list-group-item">
                                Fifth Employee{" "}
                                <div
                                  className="dropdown dropdown p-0 m-0"
                                  style={{ display: "inline" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-info float-right dropdown-toggle py-0 m-0 "
                                    data-toggle="dropdown"
                                  ></button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="_blank">
                                      Profile
                                    </a>
                                    <a class="dropdown-item" href="_blank">
                                      Message
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
              </div>
            </div>
          </div>
        </div>
        <div classNam="row">
          <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card p-2 m-3" style={{ borderColor: "#583d72" }}>
              <h2 style={{ textAlign: "center" }}>Employee Stats</h2>

              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#empOne">
                      First Employee
                    </a>
                  </div>
                  <div
                    id="empOne"
                    class="collapse show"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-5">
                          <Barchart />
                        </div>
                        <div className="col-md-5">
                          <Linechart />
                        </div>
                        <div className="col-md-2">
                          <div
                            className="card ch-disp"
                            style={{
                              width: "10rem",
                              height: "13rem",
                              backgroundColor: "#f8f7de",
                              borderColor: "#ec5858",
                            }}
                          >
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                            >
                              <Link to="/Profileone" target="blank">Profile</Link>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                              data-target="#messageModal"
                              data-toggle="modal"
                            >
                              Message
                            </button>
                            <div
                                class="modal fade"
                                id="messageModal"
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
                                        Text message
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
                                        Send
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
                </div>
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#empTwo"
                    >
                      Second Employee
                    </a>
                  </div>
                  <div id="empTwo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-5">
                          <Barcharttwo />
                        </div>
                        <div className="col-md-5">
                          <Linecharttwo />
                        </div>
                        <div className="col-md-2">
                          <div
                            className="card ch-disp"
                            style={{
                              width: "10rem",
                              height: "13rem",
                              backgroundColor: "#f8f7de",
                              borderColor: "#ec5858",
                            }}
                          >
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                            >
                              Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#empThree"
                    >
                      Third Employee
                    </a>
                  </div>
                  <div id="empThree" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-5">
                          <Barchartthree />
                        </div>
                        <div className="col-md-5">
                          <Linechartthree />
                        </div>
                        <div className="col-md-2">
                          <div
                            className="card ch-disp"
                            style={{
                              width: "10rem",
                              height: "13rem",
                              backgroundColor: "#f8f7de",
                              borderColor: "#ec5858",
                            }}
                          >
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-info m-3"
                            >
                              Message
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
        </div>
      </div>
    </>
  );
};

export default Hranalytics;
