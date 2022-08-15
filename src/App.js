import './App.css';
import './assets/css/sb-admin-2.min.css';
import RocketImg from './assets/imgs/undraw_rocket.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { useEffect, useRef } from 'react';
import { number_format } from './chart-utils';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  // const lineRef = useRef();

  // useEffect(() => {
  //   new ChartJS(document.getElementById('line-chart'), {
  //     type: 'line',
  //     data: {
  //       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [{
  //         label: "Earnings",
  //         lineTension: 0.3,
  //         backgroundColor: "rgba(78, 115, 223, 0.05)",
  //         borderColor: "rgba(78, 115, 223, 1)",
  //         pointRadius: 3,
  //         pointBackgroundColor: "rgba(78, 115, 223, 1)",
  //         pointBorderColor: "rgba(78, 115, 223, 1)",
  //         pointHoverRadius: 3,
  //         pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
  //         pointHoverBorderColor: "rgba(78, 115, 223, 1)",
  //         pointHitRadius: 10,
  //         pointBorderWidth: 2,
  //         data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
  //       }],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       layout: {
  //         padding: {
  //           left: 10,
  //           right: 25,
  //           top: 25,
  //           bottom: 0
  //         }
  //       },
  //       scales: {
  //         xAxes: [{
  //           time: {
  //             unit: 'date'
  //           },
  //           gridLines: {
  //             display: false,
  //             drawBorder: false
  //           },
  //           ticks: {
  //             maxTicksLimit: 7
  //           }
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             maxTicksLimit: 5,
  //             padding: 10,
  //             // Include a dollar sign in the ticks
  //             callback: function (value, index, values) {
  //               return '$' + number_format(value);
  //             }
  //           },
  //           gridLines: {
  //             color: "rgb(234, 236, 244)",
  //             zeroLineColor: "rgb(234, 236, 244)",
  //             drawBorder: false,
  //             borderDash: [2],
  //             zeroLineBorderDash: [2]
  //           }
  //         }],
  //       },
  //       legend: {
  //         display: false
  //       },
  //       tooltips: {
  //         backgroundColor: "rgb(255,255,255)",
  //         bodyFontColor: "#858796",
  //         titleMarginBottom: 10,
  //         titleFontColor: '#6e707e',
  //         titleFontSize: 14,
  //         borderColor: '#dddfeb',
  //         borderWidth: 1,
  //         xPadding: 15,
  //         yPadding: 15,
  //         displayColors: false,
  //         intersect: false,ffect(() => {
  //   new ChartJS(document.getElementById('line-chart'), {
  //     type: 'line',
  //     data: {
  //       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [{
  //         label: "Earnings",
  //         lineTension: 0.3,
  //         backgroundColor: "rgba(78, 115, 223, 0.05)",
  //         borderColor: "rgba(78, 115, 223, 1)",
  //         pointRadius: 3,
  //         pointBackgroundColor: "rgba(78, 115, 223, 1)",
  //         pointBorderColor: "rgba(78, 115, 223, 1)",
  //         pointHoverRadius: 3,
  //         pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
  //         pointHoverBorderColor: "rgba(78, 115, 223, 1)",
  //         pointHitRadius: 10,
  //         pointBorderWidth: 2,
  //         data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
  //       }],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       layout: {
  //         padding: {
  //           left: 10,
  //           right: 25,
  //           top: 25,
  //           bottom: 0
  //         }
  //       },
  //       scales: {
  //         xAxes: [{
  //           time: {
  //             unit: 'date'
  //           },
  //           gridLines: {
  //             display: false,
  //             drawBorder: false
  //           },
  //           ticks: {
  //             maxTicksLimit: 7
  //           }
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             maxTicksLimit: 5,
  //             padding: 10,
  //             // Include a dollar sign in the ticks
  //             callback: function (value, index, values) {
  //               return '$' + number_format(value);
  //             }
  //           },
  //           gridLines: {
  //             color: "rgb(234, 236, 244)",
  //             zeroLineColor: "rgb(234, 236, 244)",
  //             drawBorder: false,
  //             borderDash: [2],
  //             zeroLineBorderDash: [2]
  //           }
  //         }],
  //       },
  //       legend: {
  //         display: false
  //       },
  //       tooltips: {
  //         backgroundColor: "rgb(255,255,255)",
  //         bodyFontColor: "#858796",
  //         titleMarginBottom: 10,
  //         titleFontColor: '#6e707e',
  //         titleFontSize: 14,
  //         borderColor: '#dddfeb',
  //         borderWidth: 1,
  //         xPadding: 15,
  //         yPadding: 15,
  //         displayColors: false,
  //         intersect: false,
  //         mode: 'index',
  //         caretPadding: 10,
  //         callbacks: {
  //           label: function (tooltipItem, chart) {
  //             var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
  //             return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
  //           }
  //         }
  //       }
  //     }
  //   });
  // }, [])
  //         mode: 'index',
  //         caretPadding: 10,
  //         callbacks: {
  //           label: function (tooltipItem, chart) {
  //             var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
  //             return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
  //           }
  //         }
  //       }
  //     }
  //   });
  // }, [])

  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Interface
            </div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">Buttons</a>
              <a className="collapse-item" href="cards.html">Cards</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">Colors</a>
              <a className="collapse-item" href="utilities-border.html">Borders</a>
              <a className="collapse-item" href="utilities-animation.html">Animations</a>
              <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Addons
            </div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item" href="blank.html">Blank Page</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          <img className="sidebar-card-illustration mb-2" src={RocketImg} alt="..." />
          <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
          <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

      </ul>
      <div id="content-wrapper" className="d-flex flex-column" >
        <div id="content">
          <div className="container-fluid">
            <div className="row" >
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow">
                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      {/* <canvas id={'line-chart'} ref={lineRef} ></canvas> */}
                      <Line
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                          datasets: [{
                            label: "Earnings",
                            lineTension: 0.3,
                            backgroundColor: "rgba(78, 115, 223, 0.05)",
                            borderColor: "rgba(78, 115, 223, 1)",
                            pointRadius: 3,
                            pointBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointBorderColor: "rgba(78, 115, 223, 1)",
                            pointHoverRadius: 3,
                            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                          }],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          layout: {
                            padding: {
                              left: 10,
                              right: 25,
                              top: 25,
                              bottom: 0
                            }
                          },
                          scales: {
                            xAxes: [{
                              time: {
                                unit: 'date'
                              },
                              gridLines: {
                                display: false,
                                drawBorder: false
                              },
                              ticks: {
                                maxTicksLimit: 7
                              }
                            }],
                            yAxes: [{
                              ticks: {
                                maxTicksLimit: 5,
                                padding: 10,
                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                  return '$' + number_format(value);
                                }
                              },
                              gridLines: {
                                color: "rgb(234, 236, 244)",
                                zeroLineColor: "rgb(234, 236, 244)",
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2]
                              }
                            }],
                          },
                          legend: {
                            display: false
                          },
                          tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            titleMarginBottom: 10,
                            titleFontColor: '#6e707e',
                            titleFontSize: 14,
                            borderColor: '#dddfeb',
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            intersect: false,
                            mode: 'index',
                            caretPadding: 10,
                            callbacks: {
                              label: function (tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                                return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
                              }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
