import React, { useState } from "react";

type Props = {
  itemId: string;
  onDelete: (id: string) => void;
};

const DeleteConfirmModal = ({ itemId, onDelete }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    onDelete(itemId);
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-red-500 hover:bg-red-600 text-white col-span-2"
      >
        Delete
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Are you sure you want to delete?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, delete it
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmModal;