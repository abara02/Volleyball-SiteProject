export default function Head() {
  const navItems = [
    { id: "about", label: "About Me" },
    { id: "play", label: "How to Play Volleyball" },
    { id: "rules", label: "Volleyball Rules and Violations" },
    { id: "skills", label: "Volleyball Skills" },
    { id: "position", label: "Positions" },
    { id: "rotation", label: "Rotation Tracker" },
    { id: "drills", label: "Practice Drills" },
    { id: "learn", label: "Learn More" },
  ];

  return (
    <header className="bg-purple-600 text-white py-6 shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-center">
        Coach Lexi's Volleyball Guide
      </h1>
      <nav className="mt-4">
        <ul className="flex flex-wrap justify-center gap-4 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:underline hover:text-lime-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
