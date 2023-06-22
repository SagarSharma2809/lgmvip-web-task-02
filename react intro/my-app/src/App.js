import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();

    setName(data.data); // Assuming the user data is in the `data` property of the response
  }

  return (
    <div>
      <nav className='App-header'>

        <span className='title'>fishing<span>good</span></span>

        <button onClick={fetchData}>Get Users</button>
      </nav>

      <div className="container">

        {name.map((user) => (
          <div className="grid">

            <span className='span-1 margin1'>{user.first_name} {user.last_name}</span>
            <img src={user.avatar} alt="userImage" className='userImage margin1'></img>
            <span className='margin1'>{user.email}</span>



          </div>
        ))}

      </div>






    </div>




    /* <ul>
      {name.map(({ id, first_name }) => (
        <li key={id}>{first_name}</li>
      ))}
    </ul> */


  );
}

export default App;










// import React, { useState } from 'react';



// function App() {

//   const [users, setUsers] = useState([]);

//   const loadUsers = async () => {
//     // console.log("before");
//     const response = await fetch("https://reqres.in/api/users");
//     const jsonResponse = await response.json();
//     setUsers(jsonResponse);

//   }

//   return (
//     <div>

{/* <nav className='App-header'>

        <span className='title'>fishing<span>good</span></span>

        <button onClick={loadUsers} className='mainbutton'>Get Users</button>
      </nav> */}




//       <h1>Hello All</h1>
//       <button onClick={loadUsers}>Get Data</button>

//       <h2>Users:</h2>
//       <ul>
//         {users.data.map(({ id, email }) => (
//           <li key={id}>Name: {email}</li>
//         ))}

//       </ul>

//       {/* <h1>Hello All</h1>
//       <button onClick={loadUsers}>Get Data</button>

//       <h2>Users:</h2>
//       <ul>
//         {users.map(({ id, login }) => (
//           <li key={id}>Name: {login}</li>
//         ))}

//       </ul> */}
//     </div>



//   );
// }

// export default App;
