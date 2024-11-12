import { useState, useEffect } from 'react';
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";
import importt from "../assets/import.svg";
import scan from "../assets/scan.svg";
import options from "../assets/options.svg";

const fetchInstances = async (setData) => {
    try {
      const response = await fetch("http://localhost:9090/instances");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching instances:", error);
    }
  };

export default function Instance({ onAddInstance, setDeletePopupId, setEditData  }) {

    const [data, setData] = useState([]);


// Function to get displayable participantTypes and tickets with a count for overflow
  



//   useEffect(() => {
//     const fetchInstances = async () => {
//       try {
//         const response = await fetch("http://localhost:9090/instances");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching instances:", error);
//       }
//     };
//     fetchInstances();
//   }, []);

//   const addInstance = () => {
//     onAddInstance()
//   }


useEffect(() => {
    fetchInstances(setData);
  }, []);

  const addInstance = async () => {
    await onAddInstance();
    fetchInstances(setData);
  };


  const formatArray = (array, limit = 2) => {
    if (array.length > limit) {
      return `${array.slice(0, limit).join(', ')} +${array.length - limit} more`;
    }
    return array.join(', ');
  };

  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleDelete = (id) => {
    setDeletePopupId(id);
  };

  return (
    <div className="p-[25px] w-full">
      <h1 className="font-medium">Instance</h1>
      <div className="flex justify-between">
        <div className="py-4 flex items-center gap-3">
          <button className="border border-customBorder rounded-lg p-2">
            <img src={search} alt="search" />
          </button>
          <button className="flex items-center gap-2 border border-customBorder rounded-lg py-1 px-2 text-textPrimary font-[500]">
            <img src={filter} alt="filter" />
            Filter
          </button>
        </div>
        <div className="py-4 flex items-center gap-3">
          <button className="flex items-center gap-2 border border-customBorder rounded-lg py-1 px-2 text-textPrimary font-[500]"><img src={importt} alt="Import" />Import</button>
          <button className="flex items-center gap-2 border border-customBorder rounded-lg py-1 px-2 text-textPrimary font-[500]"><img src={filter} alt="Export" />Export</button>
          <button
            className="flex items-center gap-3 border border-customBorder rounded-lg py-1 px-3 text-white bg-primary font-[500]"
            onClick={addInstance}
          >
            <img src={add} alt="Add Instance" />
            Add Instance
          </button>
        </div>
      </div>
      <div className="pt-2">
        <table className="w-full">
          <thead className="w-full">
            <tr className="text-left text-textSecondary font-normal bg-hover">
              <th className="px-6 py-3 font-normal rounded-l-lg">Instance Name</th>
              <th className="px-6 py-3 font-normal">Included Participant Types</th>
              <th className="px-6 py-3 font-normal">Included Tickets</th>
              <th className="px-6 py-3 font-normal">Alloted</th>
              <th className="px-6 py-3 font-normal">Checkin</th>
              <th className="px-6 py-3 font-normal">Pending</th>
              <th className="px-6 py-3 font-normal rounded-r-lg"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} onClick={() => console.log("clicked")} className="text-sm text-gray-700">
                <td className="px-6 py-4 border-b font-semibold">{item.instanceName}</td>
                <td className="px-6 py-4 border-b">{formatArray(item.participantTypes)}</td>
                <td className="px-6 py-4 border-b">{formatArray(item.tickets)}</td>
                <td className="px-6 py-4 border-b text-primary underline cursor-pointer">
                  {item.alloted}
                </td>
                <td className="px-6 py-4 border-b text-primary underline cursor-pointer">
                  {item.checkin}
                </td>
                <td className="px-6 py-4 border-b text-primary underline cursor-pointer">
                  {item.pending}
                </td>
                <td className="px-6 py-4 border-b flex gap-1 items-center space-x-2">
                  <button
                    className="flex items-center gap-2 border border-customBorder rounded-lg py-1 px-2 text-textPrimary font-[500]"
                    onClick={() => toggleDropdown(index)}
                  >
                    <img src={scan} alt="scan" />
                    Scan
                  </button>
                  <button className="p-2" onClick={() => toggleDropdown(index)}>
                    <img src={options} alt="options" />
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute bg-white border border-customBorder rounded-lg shadow-lg mt-1">
                      <ul className="text-sm text-gray-700">
                        <li
                          className="px-4 py-2 hover:bg-hover cursor-pointer"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-hover cursor-pointer"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}





//   const data = [
//     {
//       _id: 'hgfgbggv',
//       instanceName: 'Food',
//       participantTypes: ['Volunteers', 'Guests', 'VIPs', 'Staff'],
//       tickets: ['Ticket 01', 'Ticket 02', 'Ticket 03', 'Ticket 04'],
//       alloted: 340,
//       checkin: 160,
//       pending: 180,
//     },
//     {
//       _id: 'hgfgb54gggv',
//       instanceName: 'Book Stall',
//       participantTypes: ['Volunteers', 'Guests'],
//       tickets: ['Ticket 03', 'Ticket 04'],
//       alloted: 340,
//       checkin: 160,
//       pending: 180,
//     },
//   ];