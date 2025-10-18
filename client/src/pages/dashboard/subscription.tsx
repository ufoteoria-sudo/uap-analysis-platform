export default function Subscription() {
  const currentPlan = {
    name: 'Pro',
    price: '$99/month',
    renewalDate: '2024-04-15',
    storage: '100 GB',
    used: '45 GB',
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Subscription</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600">Plan:</span>
              <span className="font-semibold">{currentPlan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Price:</span>
              <span className="font-semibold">{currentPlan.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Next Renewal:</span>
              <span className="font-semibold">{currentPlan.renewalDate}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Storage Usage</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600">Total:</span>
              <span className="font-semibold">{currentPlan.storage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Used:</span>
              <span className="font-semibold">{currentPlan.used}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mt-4">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: '45%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
