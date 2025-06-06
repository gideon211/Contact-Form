import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-slate-800">User List</h2>

      {users.length === 0 ? (
        <p className="text-slate-500">No users added yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-700">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(user)}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;


