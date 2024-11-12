// import { useState } from 'react';

// export default function AddInstanceForm({ onClose, setEditData, data }) {
//     const [instanceName, setInstanceName] = useState(data?.instanceName || '');
//     const [participantTypes, setParticipantTypes] = useState(data?.participantTypes.join(', ') || '');
//     const [tickets, setTickets] = useState(data?.tickets.join(', ') || '');
//     const [alloted, setAlloted] = useState(data?.alloted || '');
//     const [checkin, setCheckin] = useState(data?.checkin || '');
//     const [pending, setPending] = useState(data?.pending || '');


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newInstance = {
//           instanceName,
//           participantTypes: participantTypes.split(',').map(pt => pt.trim()),
//           tickets: tickets.split(',').map(t => t.trim()),
//           alloted,
//           checkin,
//           pending
//         };
      
//         try {
//           const response = await fetch("http://localhost:9090/instances", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newInstance)
//           });
      
//           const result = await response.json();
//           if (response.ok) {
//             console.log("Instance created:", result.instance);
//             onClose();
//           } else {
//             console.error("Error:", result.message);
//           }
//         } catch (error) {
//           console.error("Error submitting form:", error);
//         }
//       };
      
//     const close = () => {
//         setEditData(null);
//         onClose();
//     }

//     return (
//         <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center z-10">
//             <div className="bg-white p-6 rounded-lg w-1/2">
//                 <h2 className="text-xl font-semibold mb-4">Add Instance</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block mb-2">Instance Name</label>
//                         <input 
//                             type="text" 
//                             value={instanceName} 
//                             onChange={(e) => setInstanceName(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2">Participant Types (comma-separated)</label>
//                         <input 
//                             type="text" 
//                             value={participantTypes} 
//                             onChange={(e) => setParticipantTypes(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2">Tickets (comma-separated)</label>
//                         <input 
//                             type="text" 
//                             value={tickets} 
//                             onChange={(e) => setTickets(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2">Alloted</label>
//                         <input 
//                             type="number" 
//                             value={alloted} 
//                             onChange={(e) => setAlloted(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2">Checkin</label>
//                         <input 
//                             type="number" 
//                             value={checkin} 
//                             onChange={(e) => setCheckin(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2">Pending</label>
//                         <input 
//                             type="number" 
//                             value={pending} 
//                             onChange={(e) => setPending(e.target.value)} 
//                             className="border w-full px-3 py-2 rounded" 
//                             required
//                         />
//                     </div>
//                     <div className="flex justify-between">
//                         <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Instance</button>
//                         <button type="button" onClick={close} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }



import { useState, useEffect } from 'react';

export default function AddInstanceForm({ onClose, setEditData, data }) {
    const [instanceName, setInstanceName] = useState(data?.instanceName || '');
    const [participantTypes, setParticipantTypes] = useState(data?.participantTypes.join(', ') || '');
    const [tickets, setTickets] = useState(data?.tickets.join(', ') || '');
    const [alloted, setAlloted] = useState(data?.alloted || '');
    const [checkin, setCheckin] = useState(data?.checkin || '');
    const [pending, setPending] = useState(data?.pending || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const instanceData = {
            instanceName,
            participantTypes: participantTypes.split(',').map(pt => pt.trim()),
            tickets: tickets.split(',').map(t => t.trim()),
            alloted,
            checkin,
            pending
        };

        try {
            const url = data ? `http://localhost:9090/instances/${data._id}` : "http://localhost:9090/instances";
            const method = data ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(instanceData)
            });

            const result = await response.json();
            if (response.ok) {
                console.log(data ? "Instance updated:" : "Instance created:", result.instance);
                onClose();
            } else {
                console.error("Error:", result.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const close = () => {
        setEditData(null);
        onClose();
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg w-1/2">
                <h2 className="text-xl font-semibold mb-4">{data ? 'Edit Instance' : 'Add Instance'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Instance Name</label>
                        <input 
                            type="text" 
                            value={instanceName} 
                            onChange={(e) => setInstanceName(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Participant Types (comma-separated)</label>
                        <input 
                            type="text" 
                            value={participantTypes} 
                            onChange={(e) => setParticipantTypes(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Tickets (comma-separated)</label>
                        <input 
                            type="text" 
                            value={tickets} 
                            onChange={(e) => setTickets(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Alloted</label>
                        <input 
                            type="number" 
                            value={alloted} 
                            onChange={(e) => setAlloted(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Checkin</label>
                        <input 
                            type="number" 
                            value={checkin} 
                            onChange={(e) => setCheckin(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Pending</label>
                        <input 
                            type="number" 
                            value={pending} 
                            onChange={(e) => setPending(e.target.value)} 
                            className="border w-full px-3 py-2 rounded" 
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                            {data ? 'Save Edits' : 'Add Instance'}
                        </button>
                        <button type="button" onClick={close} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
