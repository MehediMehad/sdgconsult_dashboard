import AdminDetailsPage from "./AdminDetails";

const AdminPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  

  return (
    <div>
      <AdminDetailsPage id={id} />
    </div>
  );
};

export default AdminPage;
