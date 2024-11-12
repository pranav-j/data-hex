import { useEffect, useState } from 'react';
import Instance from './components/instance';
import AddInstanceForm from './components/addInstanceForm';
import SideBar from './components/sideBar';
import TopBar from './components/topBar';
import DeletePopup from './components/deletePopup';


function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [deletePopupId, setDeletePopupId] = useState(null);
  const [editData, setEditData] = useState(null);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    if(editData) {
      toggleForm()
    }
  }, [editData])

  useEffect(() => {
    console.log(editData);
    
  }, [editData])

  return (
    <div className="flex w-screen h-screen">
      <div className="h-full">
        <SideBar />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex-shrink-0">
          <TopBar />
        </div>

        <div className="flex flex-grow overflow-y-auto">
          {isFormVisible && <AddInstanceForm onClose={toggleForm} setEditData={setEditData} data={editData} />}
          {deletePopupId && <DeletePopup setDeletePopupId={setDeletePopupId} deletePopupId={deletePopupId} />}
          <Instance onAddInstance={toggleForm} setEditData={setEditData} setDeletePopupId={setDeletePopupId} />
        </div>
      </div>
    </div>
  );
}

export default App;
