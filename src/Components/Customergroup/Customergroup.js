import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Customergroup({customergroup, updateCustomergroup, deleteCustomergroup, initialDelay=0}) {


    const [newCustomergroup, setNewCustomergroup] = useState({...customergroup});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newCustomergroup}
        updatedValue[e.target.name] = e.target.value;
        setNewCustomergroup({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateCustomergroup(newCustomergroup);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="customergroup-container">

    <div className="customergroup-card">
      
    <Link to={`/customergroups/${customergroup.id}`}>
        <p>Customer Group Party: {customergroup.party}</p>
      </Link>
      <p>Party: {customergroup.party}</p>
      <p>Party Quantity:  {customergroup.partyquantity} </p>
      <p>Customer Status: {customergroup.customerstatus}</p>
      {editMode && (
        <>
          <button onClick={() => deleteCustomergroup(customergroup)}>Delete</button>

          <form onSubmit={handleUpdate}>
            <input name="party" value={newCustomergroup.party} onChange={handleChange} />
            <input name="partyquantity" value={newCustomergroup.partyquantity} onChange={handleChange} />
            <input name="customerstatus" value={newCustomergroup.customerstatus} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );

}

export default Customergroup;