export default function Admin() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'User' },
  ];

  const stats = [
    { label: 'Total Users', value: '127' },
    { label: 'Active Sessions', value: '43' },
    { label: 'Storage Used', value: '2.4 TB' },
    { label: 'API Calls Today', value: '15,234' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-sm text-slate-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-200">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      user.role === 'Admin'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
