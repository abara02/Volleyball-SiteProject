export default function SkillCard({ title, description, image, listItems }) {
  return (
    <div className="mb-8 bg-lime-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-purple-600">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-2">{description}</p>

      {listItems && listItems.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      )}
    </div>
  );
}
