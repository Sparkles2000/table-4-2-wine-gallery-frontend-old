
import React, { useEffect, useState } from "React";
import { useParams } from "React-router-dom";
import { BASE_URL } from "./constraints/index.js";



export default function CustomerInfo() {
    const [customergroup, setCustomergroup] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'customergroups/' + id)
        .then((res) => res.json())
        .then((json) => setCustomergroups(json));
    }, [id]);
  
    useEffect(() => {
        console.log(customergroup);
    }, [customergroup]);
    
  
    return (
      <div>
          {customergroup && (
          <>
          <p> {customergroup.party} </p>
          <p>{customergroup.partyquantity} </p>
          <p>{customergroup.customerstatus}</p>
          
          </>
      )}
      </div>
      
      );
  
  }
  export default CustomergroupInfo