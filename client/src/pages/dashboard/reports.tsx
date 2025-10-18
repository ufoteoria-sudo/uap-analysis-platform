export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'Q1 2024 Analysis Summary',
      date: '2024-03-31',
      status: 'Published',
    },
    {
      id: 2,
      title: 'Regional Pattern Analysis',
      date: '2024-03-15',
      status: 'Draft',
    },
    {
      id: 3,
      title: 'Data Quality Assessment',
      date: '2024-03-01',
      status: 'Published',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Generate New Report
          </button>
        </div>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{report.title}</h3>
                  <p className="text-sm text-slate-600">{report.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      report.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {report.status}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
