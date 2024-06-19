import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-custom navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#sidebar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                <span>Admin</span>Dashboard
              </a>
              <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle count-info"
                    data-toggle="dropdown"
                    href="#"
                  >
                    {/* <em className="fa fa-envelope" /> */}
                    <i class="fa-solid fa-envelope"></i>
                    <span className="label label-danger">15</span>
                  </a>
                  <ul className="dropdown-menu dropdown-messages">
                    <li>
                      <div className="dropdown-messages-box">
                        <a href="profile.html" className="pull-left">
                          <img
                            alt="image"
                            className="img-circle"
                            src="http://placehold.it/40/30a5ff/fff"
                          />
                        </a>
                        <div className="message-body">
                          <small className="pull-right">3 mins ago</small>
                          <a href="#">
                            <strong>John Doe</strong> commented on{" "}
                            <strong>your photo</strong>.
                          </a>
                          <br />
                          <small className="text-muted">
                            1:24 pm - 25/03/2015
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="dropdown-messages-box">
                        <a href="profile.html" className="pull-left">
                          <img
                            alt="image"
                            className="img-circle"
                            src="http://placehold.it/40/30a5ff/fff"
                          />
                        </a>
                        <div className="message-body">
                          <small className="pull-right">1 hour ago</small>
                          <a href="#">
                            New message from <strong>Jane Doe</strong>.
                          </a>
                          <br />
                          <small className="text-muted">
                            12:27 pm - 25/03/2015
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="all-button">
                        <a href="#">
                          <em className="fa fa-inbox" />{" "}
                          <strong>All Messages</strong>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle count-info"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <em className="fa fa-bell" />
                    <span className="label label-info">5</span>
                  </a>
                  <ul className="dropdown-menu dropdown-alerts">
                    <li>
                      <a href="#">
                        <div>
                          <i class="fa-solid fa-envelope"></i>1 New Message
                          <span className="pull-right text-muted small">
                            3 mins ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <div>
                          <em className="fa fa-heart" /> 12 New Likes
                          <span className="pull-right text-muted small">
                            4 mins ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <div>
                          <em className="fa fa-user" /> 5 New Followers
                          <span className="pull-right text-muted small">
                            4 mins ago
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* /.container-fluid */}
        </nav>
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src="http://placehold.it/50/30a5ff/fff"
                className="img-responsive"
                alt
              />
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">Ak</div>
              <div className="profile-usertitle-status">
                <span className="indicator label-success" />
                Online
              </div>
            </div>
            <div className="clear" />
          </div>
          <div className="divider" />
          <form role="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </form>
          <ul className="nav menu">
            <li className="active">
              <a href="index.html">
                <em className="fa fa-dashboard">&nbsp;</em> Dashboard
              </a>
            </li>
            <li>
              <a href="widgets.html">
                <em className="fa fa-calendar">&nbsp;</em> Widgets
              </a>
            </li>
            <li>
              <a href="charts.html">
                <em className="fa fa-bar-chart">&nbsp;</em> Charts
              </a>
            </li>
            <li>
              <a href="elements.html">
                <em className="fa fa-toggle-off">&nbsp;</em> UI Elements
              </a>
            </li>
            <li>
              <a href="panels.html">
                <em className="fa fa-clone">&nbsp;</em> Alerts &amp; Panels
              </a>
            </li>
            <li className="parent ">
              <a data-toggle="collapse" href="#sub-item-1">
                <em className="fa fa-navicon">&nbsp;</em> Multilevel{" "}
                <span
                  data-toggle="collapse"
                  href="#sub-item-1"
                  className="icon pull-right"
                >
                  <em className="fa fa-plus" />
                </span>
              </a>
              <ul className="children collapse" id="sub-item-1">
                <li>
                  <a className href="#">
                    <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
                  </a>
                </li>
                <li>
                  <a className href="#">
                    <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
                  </a>
                </li>
                <li>
                  <a className href="#">
                    <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login.html">
                <em className="fa fa-power-off">&nbsp;</em> Logout
              </a>
            </li>
          </ul>
        </div>
        {/*/.sidebar*/}
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <em className="fa fa-home" />
                </a>
              </li>
              <li className="active">Dashboard</li>
            </ol>
          </div>
          {/*/.row*/}
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Dashboard</h1>
            </div>
          </div>
          {/*/.row*/}
          <div className="panel panel-container">
            <div className="row">
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-shopping-cart color-blue" />
                    <div className="large">120</div>
                    <div className="text-muted">New Orders</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-comments color-orange" />
                    <div className="large">52</div>
                    <div className="text-muted">Comments</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-users color-teal" />
                    <div className="large">24</div>
                    <div className="text-muted">New Users</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-red panel-widget ">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-search color-red" />
                    <div className="large">25.2k</div>
                    <div className="text-muted">Page Views</div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.row*/}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Site Traffic Overview
                  <ul className="pull-right panel-settings panel-button-tab-right">
                    <li className="dropdown">
                      <a
                        className="pull-right dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <em className="fa fa-cogs" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <ul className="dropdown-settings">
                            <li>
                              <a href="#">
                                <em className="fa fa-cog" /> Settings 1
                              </a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="#">
                                <em className="fa fa-cog" /> Settings 2
                              </a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="#">
                                <em className="fa fa-cog" /> Settings 3
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span className="pull-right clickable panel-toggle panel-button-tab-left">
                    <em className="fa fa-toggle-up" />
                  </span>
                </div>
                <div className="panel-body">
                  <div className="canvas-wrapper">
                    <canvas
                      className="main-chart"
                      id="line-chart"
                      height={200}
                      width={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.row*/}
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <div className="panel panel-default">
                <div className="panel-body easypiechart-panel">
                  <h4>New Orders</h4>
                  <div
                    className="easypiechart"
                    id="easypiechart-blue"
                    data-percent={92}
                  >
                    <span className="percent">92%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="panel panel-default">
                <div className="panel-body easypiechart-panel">
                  <h4>Comments</h4>
                  <div
                    className="easypiechart"
                    id="easypiechart-orange"
                    data-percent={65}
                  >
                    <span className="percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="panel panel-default">
                <div className="panel-body easypiechart-panel">
                  <h4>New Users</h4>
                  <div
                    className="easypiechart"
                    id="easypiechart-teal"
                    data-percent={56}
                  >
                    <span className="percent">56%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="panel panel-default">
                <div className="panel-body easypiechart-panel">
                  <h4>Visitors</h4>
                  <div
                    className="easypiechart"
                    id="easypiechart-red"
                    data-percent={27}
                  >
                    <span className="percent">27%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.row*/}
        </div>
        /.col --&gt;
        <div className="col-sm-12"></div>
        /.row --&gt;
      </div>
    </div>
  );
};

export default Dashboard;
