import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",      //change the value
   mark: "",   //change the value
   subject: "",     //change the value
   records: [],     //change the value
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     //change the value

     mark: form.mark,


        //change the value
     subject: form.subject,

        //change the value
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5050/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Details</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="mark">Mark </label>
         {/* //change the value */}
         <input
           type="text"
           className="form-control"
           id="mark"
           value={form.mark}
           onChange={(e) => updateForm({ mark: e.target.value })}
         />
       </div>
       <br></br>
       <label><b>subject:</b></label>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="subject"
             id="computer science"
             value="computer science"
             checked={form.subject === "computer science"}
             onChange={(e) => updateForm({ subject: e.target.value })}
           />
           <label htmlFor="computer science" className="form-check-label">computer science</label>
           {/* //change the value */}
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="subject"
             id="maths"
             value="maths"
             checked={form.subject === "maths"}
             onChange={(e) => updateForm({ subject: e.target.value })}
           />
           <label htmlFor="maths" className="form-check-label">maths</label>
               {/* //change the value */}

         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="subject"
             id="accountants"
             value="accountants"
             checked={form.subject === "accountants"}
             onChange={(e) => updateForm({ subject: e.target.value })}
           />
           <label htmlFor="accountants" className="form-check-label">accountants</label>
               {/* //change the value */}
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}