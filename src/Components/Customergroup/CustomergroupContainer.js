import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../../constraints/index.js";



const [customergroups, setCustomergroups] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "customergroups")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch customer groups');
          }
          return res.json();
        })
      .then(json => {
          setCustomergroups(json);
      })
      .catch(error => {
          console.error("Something went wrong");
      })
  }, []);

  function populateCustomergroup() {
    console.log(customergroups);
    return customergroups.map((customergroup, idx) => (
      <Customergroup customergroup={customergroup} updateCustomergroup={updateCustomergroup} deleteCustomergroup={deleteCustomergroup} key={customergroup.id} />
    ));
  }
  function createCustomergroup(customergroup) {
    fetch(BASE_URL + "Customergroup", {
      method: "POST",
      body: JSON.stringify(customergroup),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setCustomergroup([...customergroups, json]));

  }

  //  UPDATE
       
  function updateCustomergroup(customergroup) {
    fetch(BASE_URL + "Customergroups/" + customergroup.id, {
        method: "PUT",
        body: JSON.stringify(customergroup),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });
    function createCustomergroup(customergroup) {
        fetch(BASE_URL + "customergroup", {
          method: "POST",
          body: JSON.stringify(customergroup),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => setCustomergroup([...customergroup, json]));
    
      }
    
      //  UPDATE
           
      function updateCustomergroup(customergroup) {
        fetch(BASE_URL + "customergroups/" + customergroup.id, {
            method: "PUT",
            body: JSON.stringify(customergroup),
            headers: {
           "Accept": "applicaton/json",
           "Content-Type": "application/json",
           },
        });

        const newCustomergroup = customergroups.map ((c) => {
            if (c.id === customergroup.id) {
                c = fcustomergroup;
            }
            
            return c;
        });
        setCustomergroups(newCustomergroups);
        }
  export default CuctomergroupContainer;