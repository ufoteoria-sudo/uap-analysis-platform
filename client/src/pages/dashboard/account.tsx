import { useState } from 'react';

export default function Account() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving account:', { name, email });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Change Password</h3>
            <button className="px-6 py-2 bg-slate-200 text-slate-900 rounded-md hover:bg-slate-300 transition">
              Update Password
            </button>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
