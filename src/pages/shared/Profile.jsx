import React from "react";

function Profile({ role }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{role} Profile</h2>
      <div className="bg-[#1c1c1c] p-4 rounded-lg border border-gray-700">
        <p className="text-gray-400">User profile info will be shown here later.</p>
      </div>
    </div>
  );
}

export default Profile;
