"use client";
import React, { useState } from "react";
import { useAllAdminsQuery, useAllUsersQuery } from "@/Redux/Api/userApi";
import ReusablePagination from "@/components/Table/ReusablePagination";
import AdminTable from "@/components/Table/AdminTable";

const Admins = () => {
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [page, setPage] = useState<number>(1);
  const limit = 15;

  const { data: userData, isLoading } = useAllAdminsQuery({ page, limit });
  const users =  userData?.data.data
  const totalPage =  userData?.data.meta?.totalPage
  
  const openPagination = Array.isArray(users) && users?.length > 0 && totalPage > 1;

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold my-5">Admins</h1>
      <div>
        <AdminTable
          userData={userData?.data?.data}
          serial={page * limit - limit}
          isLoading={isLoading}
        ></AdminTable>
      </div>

      {/* Pagination */}
      {openPagination && (
        <ReusablePagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={userData?.data?.meta?.totalPage}
          maxVisiblePages={MAX_VISIBLE_BTN}
        />
      )}
    </div>
  );
};

export default Admins;
