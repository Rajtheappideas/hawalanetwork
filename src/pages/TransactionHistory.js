import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userData } = useUserContext();

  const Div = styledComponents.div`

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

  useEffect(() => {
    setLoading(true);
    axios(
      "https://chessmafia.com/php/HawalaNetwork/App/api/get-transaction-list",
      {
        method: "POST",
        headers: {
          "consumer-access-token": userData?.api_token,
        },
      }
    )
      .then((res) => {
        if (res?.data?.status == "Success") {
          setTransactionHistory(res?.data?.data?.transaction);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status == "Error") {
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
        }
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Recipients</title>
      </Helmet>
      <Toaster />
      <Navbar />
      {/* back image */}
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-2xl sm:text-5xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Transaction History
        </h1>
      </div>
      {/* empty div */}
      <div className="sm:h-screen 2xl:h-screen h-64 w-full bg-white" />
      {/* table */}
      <div className="h-auto w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-7 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 ">
        <div className="text-xl font-semibold text-left flex sm:flex-row sm:space-y-0 space-y-2 flex-col items-start justify-between">
          <p>A List of all the transactions you have made.</p>
          <div className="flex items-center">
            <label className="text-xl font-semibold mr-1">Search:</label>
            <input
              type="search"
              className="w-full h-10 rounded-lg outline-none border border-gray-400 p-1"
            />
          </div>
        </div>
        {loading ? (
          <p className="sm:text-5xl text-2xl text-center font-semibold">
            Loading...
          </p>
        ) : (
          <Div className="overflow-x-scroll">
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
                {transactionHistory.map((data) => (
                  <tr key={data?.id}>
                    <th className="text-Red">{data?.transaction_code}</th>
                    <th>
                      {data?.receiver_details?.f_name} &nbsp;
                      {data?.receiver_details?.l_name}
                    </th>
                    <th>
                      {data?.summery_info?.sender_country}&nbsp;
                      {data?.summery_info?.sender_amount}
                    </th>
                    <th>
                      {data?.summery_info?.receiver_country}&nbsp;
                      {data?.summery_info?.receiver_amount}
                    </th>
                    <th>{data?.created_at.slice(0, 10)}</th>
                    <th>
                      {/* <Link to="/transactionstatus"> */}
                      <button
                        type="button"
                        className="bg-Red text-white text-center rounded-lg w-20 h-10"
                      >
                        Open
                      </button>
                      {/* </Link> */}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </Div>
        )}
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
      </div>
      <Footer />
    </div>
  );
};

export default TransactionHistory;
