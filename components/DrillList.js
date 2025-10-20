export default function DrillList({ title, drills }) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-3 text-purple-600">{title}</h4>
      <ul className="space-y-2">
        {drills.map((drill, index) => (
          <li key={index}>
            <a
              href={drill.url}
              className="text-orange-600 hover:text-lime-500 hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {drill.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
