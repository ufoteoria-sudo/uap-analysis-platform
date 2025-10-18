export default function Database() {
  const records = [
    { id: 1, date: '2024-01-15', location: 'Arizona', type: 'Sighting' },
    { id: 2, date: '2024-01-18', location: 'Nevada', type: 'Radar' },
    { id: 3, date: '2024-01-22', location: 'California', type: 'Photo' },
    { id: 4, date: '2024-01-25', location: 'Texas', type: 'Video' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Database</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search records..."
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b border-slate-200">
                <td className="px-4 py-2">{record.id}</td>
                <td className="px-4 py-2">{record.date}</td>
                <td className="px-4 py-2">{record.location}</td>
                <td className="px-4 py-2">{record.type}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
