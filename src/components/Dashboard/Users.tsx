"use client";
import React, { useState } from "react";
import UserTable from "@/components/Table/UserTable";
import { useAllUsersQuery } from "@/Redux/Api/userApi";
import ReusablePagination from "@/components/Table/ReusablePagination";

const Users = () => {
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [page, setPage] = useState<number>(1);
  const limit = 15;

  const { data: userData, isLoading } = useAllUsersQuery({ page, limit });
  const users =  userData?.data.data
  const totalPage =  userData?.data.meta?.totalPage
  
  const openPagination = Array.isArray(users) && users?.length > 0 && totalPage > 1;

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold my-5">Users</h1>
      <div>
        <UserTable
          userData={userData?.data?.data}
          serial={page * limit - limit}
          isLoading={isLoading}
        ></UserTable>
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

export default Users;
