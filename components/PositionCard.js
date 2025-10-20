export default function PositionCard({ title, description }) {
  return (
    <div className="bg-lime-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6">
      <h3 className="text-xl font-bold text-purple-600">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
