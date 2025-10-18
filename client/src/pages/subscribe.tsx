import { Link } from 'wouter';

export default function Subscribe() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: ['10 GB Storage', 'Basic Analysis', 'Email Support'],
    },
    {
      name: 'Pro',
      price: '$99',
      features: ['100 GB Storage', 'Advanced Analysis', 'Priority Support', 'API Access'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited Storage', 'Custom Analysis', '24/7 Support', 'Dedicated Server'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Select Plan
              </button>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700">← Back to Home</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
