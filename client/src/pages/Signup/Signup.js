// import React from "react";
// import axios from "axios";

// export default function Signup() {
//   const signUp = (obj) => {
//     axios.post("http://localhost:8080/api/users", obj);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newUser = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };
//     signUp(newUser);
//     alert("You're in");
//   }

//   return (
//     <div className="join">
//       <h1 className="join__head">Join the Squad</h1>
//       <form className="join__form" onSubmit={handleSubmit}>
//         <label className="join__label">NAME</label>
//         <input
//           className="join__input"
//           type="text"
//           name="name"
//           placeholder="Name"
//         />
//         <label className="join__label">EMAIL</label>
//         <input
//           className="join__input"
//           type="email"
//           name="email"
//           placeholder="Email"
//         />
//         <label className="join__label">Password</label>
//         <input
//           className="join__input"
//           type="password"
//           name="password"
//           placeholder="Password"
//         />
//         <button className="join__btn" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }
