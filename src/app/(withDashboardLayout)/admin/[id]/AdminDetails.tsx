"use client";
import React from "react";
import AdminDetailsTable from "@/components/Table/AdminDetailsTable";
import { useGetSingleAdminDetailsQuery } from "@/Redux/Api/userApi";
import Loader from "@/components/Loader/Loader";

const AdminDetails = ({ id }: { id: string }) => {
  const { data: userData, isLoading, isError } = useGetSingleAdminDetailsQuery({id});
  

  if (isError) {
    return <div>Error loading data:</div>;
  }

  // Handle loading state
  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold my-5">Admin Buildings Details</h1>
      <div>
        <AdminDetailsTable userData={userData?.data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AdminDetails;
