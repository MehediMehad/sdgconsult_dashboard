"use client";
import React from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { TBuilding } from "@/Interfaces/InterFaces";

const BuildingTable = ({
  userData,
  isLoading,
  serial,
}: {
  userData: TBuilding[];
  isLoading: boolean;
  serial: number;
}) => {


  return (
    <div className="overflow-x-auto overflow-hidden">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Serial</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Property Type</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">information</th>
            <th className="px-4 py-2 border">QR Code</th>
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
            userData?.map((item: TBuilding, index: number) => (
              <motion.tr
                initial={{ y: 100 * (index + 1), opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                key={index}
                className="border-b text-center"
              >
                <td className="px-4 text-nowrap py-2">{serial + index + 1}</td>
                <td className="px-4 text-nowrap py-2">{item.name}</td>
                <td className="px-4 text-nowrap py-2">{item.propertyType}</td>
                <td className="px-4 text-nowrap py-2">{item.address}</td>
                <td className="px-4 text-nowrap py-2">{item.information}</td>
                <td className="px-4 text-nowrap py-2">{item.qrCode}</td>
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BuildingTable;




// const handleStatus = async (id: string) => {
    
//     const {error} = await updateStatus({ id })
//     if (error) {
  
//         return ShowToastify({ error: "Unsuccessful to block or active the user" })
//     }
// }