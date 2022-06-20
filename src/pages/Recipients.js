import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { useTable } from "react-table";
import styledComponents from "styled-components";
import {
  SwitchVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Recipients = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Surname",
        accessor: "surname",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );
  const data = [
    {
      country: "front",
      name: "fork",
      surname: "30",
      phone: "20",
      email: "11",
      city: "complete",
      action: "delete",
    },
    {
      country: "front",
      name: "fork",
      surname: "30",
      phone: "20",
      email: "11",
      city: "complete",
      action: "delete",
    },
    {
      country: "front",
      name: "fork",
      surname: "30",
      phone: "20",
      email: "11",
      city: "complete",
      action: "delete",
    },
  ];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

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

  return (
    <div>
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
      <div className="sm:h-80 xl:h-96 h-80 w-full bg-white" />
      {/* table */}
      <div className="h-auto w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-left w-full">
          List of recipients to whom you can send money.
        </p>
        {/* search and button */}
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2 items-center justify-between ">
          <div className="flex items-center">
            <label className="text-xl font-semibold mr-1">Search:</label>
            <input
              type="search"
              className="w-full h-10 rounded-lg outline-none border border-gray-400 p-1"
            />
          </div>
          <div className="sm:w-auto w-full">
            <Link to="/newrecipients">
              <button className="w-full h-12 active:scale-95 duration-100 ease-in-out transition-all tracking-wide bg-Green text-white text-center px-2 rounded-lg texxl font-semibold">
                Add Recipient
              </button>
            </Link>
          </div>
        </div>
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
        <Div className="overflow-x-scroll">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th>Country</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>cameroon</th>
                <th>John</th>
                <th>adam</th>
                <th>+1225443467</th>
                <th>loremipsum@gmail.com</th>
                <th>Buea</th>
                <th className="flex items-center justify-center">
                  <Link to="/editrecipients">
                    <PencilAltIcon className="h-6 mr-2 bg-Green text-white cursor-pointer" />
                  </Link>
                  <TrashIcon className="h-6 bg-Red text-white cursor-pointer" />
                </th>
              </tr>
              <tr>
                <th>cameroon</th>
                <th>John</th>
                <th>adam</th>
                <th>+1225443467</th>
                <th>loremipsum@gmail.com</th>
                <th>Buea</th>
                <th className="flex items-center justify-center">
                  <Link to="/editrecipients">
                    <PencilAltIcon className="h-6 mr-2 bg-Green text-white cursor-pointer" />
                  </Link>
                  <TrashIcon className="h-6 bg-Red text-white cursor-pointer" />
                </th>{" "}
              </tr>
              <tr>
                <th>cameroon</th>
                <th>John</th>
                <th>adam</th>
                <th>+1225443467</th>
                <th>loremipsum@gmail.com</th>
                <th>Buea</th>
                <th className="flex items-center justify-center">
                  <Link to="/editrecipients">
                    <PencilAltIcon className="h-6 mr-2 bg-Green text-white cursor-pointer" />
                  </Link>
                  <TrashIcon className="h-6 bg-Red text-white cursor-pointer" />
                </th>{" "}
              </tr>
            </tbody>
          </table>
        </Div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipients;
