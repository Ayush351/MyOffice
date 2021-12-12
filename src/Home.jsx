import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import myprofile from "./Icons/myprofile.png";
import timesheets from "./Icons/timesheets.png";
import seek from "./Icons/seek.png";
import monitor from "./Icons/monitor.png";
import worklist from "./Icons/worklist.png";
import learnings from "./Icons/learnings.png";
import myben from "./Icons/myben.png";
import happen from "./Icons/happen.png";
import meeting from "./Icons/meeting.png";
import career from "./Icons/career.png";
import announcements from "./Icons/announcements.png";
import hranalytics from "./Icons/hranalytics.png";

const Home = () => {
  return (
    <>
      <div className="dash">
        <Navbar />

        <div className="container p-3 my-3 car-dash">
          {/*<!--Carousel Wrapper-->*/}
          <div
            id="multi-item-example"
            className="carousel slide carousel-multi-item"
            data-ride="carousel"
          >
            {/*<!--Indicators-->*/}
            <ol className="carousel-indicators ">
              <li
                data-target="#multi-item-example"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#multi-item-example" data-slide-to="1"></li>
              <li data-target="#multi-item-example" data-slide-to="2"></li>
            </ol>
            {/*<!--/.Indicators-->*/}

            {/*<!--Slides-->*/}
            <div className="container p-5 ">
              <div className="carousel-inner" role="listbox">
                {/*<!--First slide-->*/}
                <div className="carousel-item active">
                  <div className="col-md-3 " style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      {/**content */}
                      <div>
                        <img
                          className="card-img-top "
                          src={myprofile}
                          style={{ height: "148px", width: "150px" }}
                          alt="card"
                        />
                      </div>
                      <div className="card-body  co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          <strong>My Profile</strong>
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Myprofile"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                      {/**content */}
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <div>
                        <img
                          className="card-img-top "
                          src={timesheets}
                          style={{ height: "148px", width: "150px" }}
                          alt="card"
                        />
                      </div>
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          <strong>Timesheets</strong>
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Timesheets"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={seek}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Seek & Ask
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Seekask"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={monitor}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Project Monitor
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Projectmon"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!--/.First slide-->

            <!--Second slide-->*/}
                <div className="carousel-item">
                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={worklist}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Worklist
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Worklist"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={learnings}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Learning
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Learning"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={announcements}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Announcements
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Ann"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={myben}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          My Benefits
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Myben"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*second slide*/}
                {/*third slide*/}
                <div className="carousel-item ">
                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={happen}
                        style={{ height: "148px", width: "150px" }}
                        alt="card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Happening
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Happen"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={hranalytics}
                        style={{ height: "148px", width: "150px" }}
                        alt="card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          HR Analytics
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          className="btn btn-outline-warning but stretched-link"
                          data-toggle="modal"
                          data-target="#loginanalyticsModal"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    data-backdrop="false"
                    role="dialog"
                    id="loginanalyticsModal"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3 className="modal-title">
                            <span style={{ color: "#fc8621" }}>
                              HR Analytics Acess form
                            </span>
                          </h3>
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
                              placeholder="Username :Dummy username and password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              name="password"
                              class="form-control"
                              placeholder="Password :Simply click on sign-in button"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-success">
                            <Link to="/Hranalytics">Get Access</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={meeting}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Meeting Zone
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/group-chat-software"
                          target="blank"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" style={{ float: "left" }}>
                    <div
                      className="card mb-2 border-warning bg-transparent carding"
                      style={{
                        textAlign: "center",
                        display: "block",
                        borderWidth: "3px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={career}
                        style={{ height: "148px", width: "150px" }}
                        alt="Card"
                      />
                      <div className="card-body co">
                        <h6
                          className="card-title"
                          style={{ color: " rgb(255, 208, 0)" }}
                        >
                          Career Growth
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to="/Career"
                          className="btn btn-outline-warning but stretched-link"
                        >
                          Get in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*third slide end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
