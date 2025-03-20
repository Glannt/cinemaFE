export default function SubScriptionCard({ plan }: { plan: SubscriptionType }) {
  return (
    <div className='bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors flex flex-col h-full'>
      <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
      <p className='text-zinc-400 mb-4'>{plan.description}</p>
      <p className='text-3xl font-bold mb-4'>
        ${plan.price.toFixed(2)}
        <span className='text-sm text-zinc-400'>/month</span>
      </p>
      <ul className='mb-6 flex-grow'>
        {plan.features.map((feature, index) => (
          <li key={index} className='text-zinc-300 mb-2'>
            • {feature}
          </li>
        ))}
      </ul>
      <button className='w-full bg-violet-600 hover:bg-violet-700 py-2 rounded-md transition-colors mt-auto'>
        Choose plan
      </button>
    </div>
  );
}
