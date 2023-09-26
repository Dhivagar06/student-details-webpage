import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   mark: "",
   subject: "",
       });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 //console.log(newPerson);
   setForm({ name: "", mark: "", subject: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
         {/* //change the value */}
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div><br></br>
       <div className="form-group">
         <label htmlFor="mark">Mark</label>
         <input
           type="number"
           className="form-control"
           id="mark"
           value={form.mark}
           onChange={(e) => updateForm({ mark: e.target.value })}
         />
       </div><br></br>
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
           <label htmlFor="computer science" className="form-check-label">Computer science</label>
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
           <label htmlFor="accountants" className="form-check-label">accountants </label>
               {/* //change the value */}
         </div>
       </div><br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Create detail"
           className="btn btn-success"
         />
       </div>
     </form>
   </div>
 );
}