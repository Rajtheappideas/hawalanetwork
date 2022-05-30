import React from "react";
import Helmet from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import styledComponents from "styled-components";

const TransactionHistory = () => {
  const Div = styledComponents.div`
    padding: 1rem;

    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
      tbody{
        tr:nth-child(odd) {background: rgb(229, 231, 235)} 
      }
      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  `;

  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Recipients</title>
      </Helmet>
      <Navbar />
      {/* back image */}
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Recipients
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      {/* form */}
      <div className="h-auto w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-left flex items-center justify-between">
          A List of all the transactions you have made.
          <div className="flex items-center">
            <label className="text-xl font-semibold mr-1">Search:</label>
            <input
              type="search"
              className="w-full h-10 rounded-lg outline-none border border-gray-400 p-1"
            />
          </div>
        </p>

        {/* table */}
        {/* <Div>
          <table
            {...getTableProps()}
            className="table w-full border border-gray-300"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                // <tr {...headerGroup.getHeaderGroupProps()}>
                <tr>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Div> */}
        <Div>
          <table className="w-full table">
            <thead>
              <tr>
                <th>Transaction Code</th>
                <th>Receiver</th>
                <th>Amount sent</th>
                <th>Amount Receiver</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>3554-a34a-434-3</th>
                <th>John adam</th>
                <th>CAD 20.00</th>
                <th>XAF 9 460.00</th>
                <th>2022-03-12</th>
                <th>
                  <button
                    type="button"
                    className="bg-Red text-white text-center rounded-lg w-20 h-10"
                  >
                    Open
                  </button>
                </th>
              </tr>
              <tr>
                <th>3554-a34a-434-3</th>
                <th>John adam</th>
                <th>CAD 20.00</th>
                <th>XAF 9 460.00</th>
                <th>2022-03-12</th>
                <th>
                  <button
                    type="button"
                    className="bg-Green text-white text-center rounded-lg w-20 h-10"
                  >
                    Close
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </Div>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionHistory;
