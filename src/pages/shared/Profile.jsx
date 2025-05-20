// import React, { useEffect, useState } from "react";
import { UserRoundPen } from "lucide-react";
import { useAuth } from "../../auth/AuthContext"; // Adjust the import path as necessary
import axios from "axios";

function Profile() {
  // const [user, setUser] = useState(null);
    const { logout, user } = useAuth();
    const handleDelete = async () => {
    if (!window.confirm("Are you sure? This cannot be undone.")) return;
    try {
      const token = localStorage.getItem(`${user.role.toLowerCase()}Token`);
      await axios.delete("/api/auth/delete", {
        headers: { Authorization: `Bearer ${token}` }
      });
      logout();
      // redirect to landing or login…
    } catch (err) {
      console.error("Delete failed:", err.response?.data?.message || err.message);
      alert("Could not delete account. Try again later.");
    }
  };

  // useEffect(() => {
  //   const fetchProfile = async () =>{
  //     try{
  //       const token = localStorage.getItem('manufacturerToken') || localStorage.getItem('wholesalerToken')
  //       const res = await axios.get('http://localhost:5000/api/profile', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       setUser(res.data)

  //     } catch(error){
  //       console.error('Failed to fetch profile:', error.message)
  //     }
  //   }
  //   fetchProfile()
  // }, []);

  // if (!user) return <p>Loading...</p>;

  return (
    // <div className="bg-[#1a1a1a] fixed inset-0 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
             <div className="rounded-2xl shadow-lg bg-[#1a1a1a] p-6 max-w-md w-full">
      <div className="flex items-center mb-4">
        <UserRoundPen size={40} className="text-yellow-400" />
        <h1 className="text-2xl font-bold ml-4">{user.name}'s Profile</h1>
      </div>
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>{user.role === 'Manufacturer' ? 'Company Name' : 'Business Name'}:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {user.role === 'Wholesaler' && (
        <p><strong>Business Type:</strong> {user.businessType}</p>
      )}
      <div className="border-t flex justify-end border-gray-700 mt-4">
         <button
      onClick={handleDelete}
      className="mt-6 mx-auto w-3/4 text-center justify-center bg-red-500 flex flex-row items-center hover:bg-red-400 text-white font-bold py-0 px-0 rounded focus:outline-none focus:shadow-outline"
      >
        <span className="flex items-center gap-2">
          <UserRoundPen size={16} />
        </span>
        <span className="ml-2">Delete My Account</span>
    </button>

      </div>
      </div>
    </div>   
  );
}

export default Profile;
