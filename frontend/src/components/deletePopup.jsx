import React from 'react';

export default function DeletePopup({ setDeletePopupId, deletePopupId }) {
    // const handleConfirmDelete = () => {
    //     // Add delete logic here, then close the popup
    //     setDeletePopupId(null);
    // };

    const handleConfirmDelete = async () => {
        try {
            // Make the delete request to the backend
            const response = await fetch(`http://localhost:9090/instances/${deletePopupId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log("Instance deleted successfully");
                // Update the instances list after deletion
                // setInstances(prevInstances => prevInstances.filter(instance => instance._id !== deletePopupId));
                setDeletePopupId(null);  // Close the popup after successful delete
            } else {
                console.error("Failed to delete instance");
            }
        } catch (error) {
            console.error("Error deleting instance:", error);
        }
    };

    const handleCancel = () => {        
        setDeletePopupId(null);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
                <p className="mb-6">Are you sure you want to delete this item?</p>
                <div className="flex justify-end gap-4">
                    <button className="bg-gray-200 px-4 py-2 rounded" onClick={handleCancel}>Cancel</button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleConfirmDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}
