import baseApi from "./baseApi";

const buildingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allBuilding: build.query({
      query: () => ({
        url: `/buildings/all-building`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAllBuildingQuery } = buildingApi;
