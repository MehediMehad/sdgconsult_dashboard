"use client";
import React, { useState } from "react";
import ReusablePagination from "@/components/Table/ReusablePagination";
import BuildingTable from "@/components/Table/BuildingTable";
import { useAllBuildingQuery } from "@/Redux/Api/buildingApi";

const Buildings = () => {
  const MAX_VISIBLE_BTN = 4; // Maximum number of visible pagination buttons
  const [page, setPage] = useState<number>(1);
  const limit = 15;

  const { data: userData, isLoading } = useAllBuildingQuery({ page, limit });
  const users =  userData?.data.data
  const totalPage =  userData?.data.meta?.totalPage
  
  const openPagination = Array.isArray(users) && users?.length > 0 && totalPage > 1;

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold my-5">Buildings</h1>
      <div>
        <BuildingTable
          userData={userData?.data?.data}
          serial={page * limit - limit}
          isLoading={isLoading}
        ></BuildingTable>
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

export default Buildings;
