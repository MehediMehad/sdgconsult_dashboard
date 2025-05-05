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
            <th className="px-4 py-2 border">QR Code</th>
            <th className="px-4 py-2 border">Total Users</th>
            <th className="px-4 py-2 border">Total Groups</th>
            <th className="px-4 py-2 border">Total Paid Users</th>
            <th className="px-4 py-2 border">QR Code</th>
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
          ) : (
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
                <td className="px-4 text-nowrap py-2">{item.totalUnpaidUsers}</td>
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetailsTable;
