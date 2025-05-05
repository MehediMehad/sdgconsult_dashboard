"use server";

export const getAllBrands = async (id: string) => {
  try {
    const res = await fetch(
      `https://backend2.fightnetapp.com/api/v1//buildings/admin-details/${id}`,
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
