"use client";
import React from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { TAdminBuilding } from "@/Interfaces/InterFaces";

const AdminDetailsTable = ({
  userData,
  isLoading,
}: {
  userData: TAdminBuilding[];
  isLoading: boolean;
}) => {
console.log(userData);


  return (
    <div className="overflow-x-auto overflow-hidden">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Serial</th>
            <th className="px-4 py-2 border">Building Name</th>
            <th className="px-4 py-2 border">Qr Code</th>
            <th className="px-4 py-2 border">Total Users</th>
            <th className="px-4 py-2 border">Total Groups</th>
            <th className="px-4 py-2 border">Total Paid Users</th>
            <th className="px-4 py-2 border">Total Unpaid Users</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7} className="text-center">
                <Loader />
              </td>
            </tr>
          ) : userData?.length > 0 ? (
            userData?.map((item: TAdminBuilding, index: number) => (
              <motion.tr
                initial={{ y: 100 * (index + 1), opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                key={index}
                className="border-b text-center"
              >
                <td className="px-4 text-nowrap py-2">{index + 1}</td>
                <td className="px-4 text-nowrap py-2">{item.name}</td>
                <td className="px-4 text-nowrap py-2">{item.qrCode}</td>
                <td className="px-4 text-nowrap py-2">{item.totalUsers}</td>
                <td className="px-4 text-nowrap py-2">{item.totalGroups}</td>
                <td className="px-4 text-nowrap py-2">{item.totalPaidUsers}</td>
                <td className="px-4 text-nowrap py-2">
                  {item.totalUnpaidUsers}
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <div className="py-10 text-center bg-gray-50 rounded-md">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600 text-lg font-medium">
                      No Data Found
                    </p>
                    <p className="text-sm text-gray-400">
                      Please check back later or adjust your filters.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetailsTable;
