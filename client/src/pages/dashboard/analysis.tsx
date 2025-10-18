export default function Analysis() {
  const analysisJobs = [
    { id: 1, name: 'UAP-2024-001', status: 'Completed', progress: 100 },
    { id: 2, name: 'UAP-2024-002', status: 'Processing', progress: 65 },
    { id: 3, name: 'UAP-2024-003', status: 'Queued', progress: 0 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Analysis Jobs</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-4">
          {analysisJobs.map((job) => (
            <div key={job.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{job.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    job.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : job.status === 'Processing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${job.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
