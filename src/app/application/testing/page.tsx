"use client";
import React from "react";
import type { Metadata } from "next";
import Reacts, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "September",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "October",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "November",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: "December",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Testing() {
  return (
    <div
      className="max-w-full  max-h-full py-2 w-full h-full  bg-gray-300   
    flex-col place-items-center"
    >
      <div>
        <p className="font-extrabold text-2xl px-4  rounded-[15px]">
          Dashboard
        </p>
        <p className=" px-4 rounded-[15px]"> Main</p>
      </div>
      <div className="h-full    sm-w-full px-2 w-full">
        <div className=" items-center  px-2 justify-center">
          <div className="grid grid-cols-1    gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="parent">
              <div className="relative card  rounded-3xl bg-white py-6 px-6  my-4 ">
                <div className=" text-indigo-950 logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12  bg-[url('../images/req.png')] bg-cover bg-no-repeat"></div>
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">45 </p>

                  <div className="flex space-x-2 text-gray-400 text-sm my-3">
                    <p>Total Approved this Month.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="parent">
              <div className="relative card  bg-white py-6 px-6 rounded-3xl my-4 ">
                <div className=" text-white  logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12  bg-[url('../images/approve.png')] bg-cover bg-no-repeat"></div>{" "}
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">45 / 45</p>

                  <div className="flex space-x-2  text-blue-800 text-sm my-3">
                    <p>Total Approved this Month.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative card bg-white py-6 px-6 rounded-3xl my-4 ">
                <div className=" text-white logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12   bg-[url('../images/rejected.png')] bg-cover bg-no-repeat"></div>{" "}
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">0 </p>

                  <div className="flex space-x-2 text-blue-800 text-sm my-3">
                    <p>Total Declined this Month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full   sm-w-full px-2 w-full">
        <div className=" items-center  px-2 justify-center">
          <div className="grid grid-cols-1   gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            <div className="parent col-span-3">
              <div className="relative card rounded-3xl  bg-white py-6    ">
                <div className="w-full pt-4  text-sm flex h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 50,
                        left: 10,
                        bottom: 5,
                      }}
                      barSize={30}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar
                        dataKey="pv"
                        fill="#8884d8"
                        background={{ fill: "#eee" }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <p className="font-semibold text-center align-text-bottom text-sm text-gray-500">
                  University usage:
                </p>
              </div>
            </div>

            <div className="parent">
              <div className="relative card bg-white py-6 px-6 rounded-3xl ">
                <div className=" text-white  logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12  bg-[url('../images/approve.png')] bg-cover bg-no-repeat"></div>{" "}
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">45 / 45</p>

                  <div className="flex space-x-2  text-blue-800 text-sm my-3">
                    <p>Total Approved this Month.</p>
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