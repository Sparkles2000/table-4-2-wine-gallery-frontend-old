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

  export default CuctomergroupContainer;