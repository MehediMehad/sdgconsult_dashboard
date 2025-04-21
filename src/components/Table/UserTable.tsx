"use client";
import React from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useUserStatusUpdateMutation } from "@/Redux/Api/userApi";
import { UserInterFace } from "@/Interfaces/InterFaces";
import ShowToastify from "@/utils/ShowToastify";

const UserTable = ({
  userData,
  isLoading,
  serial,
}: {
  userData: UserInterFace[];
  isLoading: boolean;
  serial: number;
}) => {
  const [updateStatus] = useUserStatusUpdateMutation();

  const handleStatusChange = async (userId: string, newStatus: string) => {
    try {
      await updateStatus({ id: userId, status: newStatus }).unwrap();
      ShowToastify({
        success: `User ${newStatus === "ACTIVE" ? "activated" : "blocked"}`,
      });
    } catch (error) {
      ShowToastify({ error: "Failed to update user status" });
    }
  };

  return (
    <div className="overflow-x-auto overflow-hidden">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Serial</th>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">User Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Action</th>
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
            userData?.map((item: UserInterFace, index: number) => (
              <motion.tr
                initial={{ y: 100 * (index + 1), opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                key={index}
                className="border-b text-center"
              >
                <td className="px-4 text-nowrap py-2">{serial + index + 1}</td>
                <td className="px-4 text-nowrap py-2">{item.name}</td>
                <td className="px-4 text-nowrap py-2">{item.email}</td>
                <td className="px-4 text-nowrap py-2">{item.role}</td>
                <td className="">
                  <span
                    className={`px-3 rounded-full font-bold py-1 ${
                      item.status === "ACTIVE"
                        ? "bg-[#d1f5cc] text-green-600"
                        : "bg-[#f9d7d7] text-red-600"
                    }`}
                  >
                    {item.status === "ACTIVE" ? "Active" : "Blocked"}
                  </span>
                </td>
                <td className="px-4 text-nowrap py-2">
                  {item.status === "ACTIVE" && (
                    <button
                      onClick={() => handleStatusChange(item.id, "BLOCKED")}
                      className="px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-red-500 text-white"
                    >
                      Block
                    </button>
                  )}
                  {item.status === "BLOCKED" && (
                    <button
                      onClick={() => handleStatusChange(item.id, "ACTIVE")}
                      className="px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-green-500 text-white"
                    >
                      Unblock
                    </button>
                  )}
                </td>
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
