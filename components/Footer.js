export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-600 text-white text-center py-6 mt-12">
      <p className="text-lg text-lime-300">
        © {currentYear} Coach Lexi's Volleyball Guide
      </p>
      <p className="text-m mt-2 opacity-85">Author: Alexis Baranauskas</p>
      <p className="text-m text-orange-400 mt-2 opacity-70">
        Built with React & Next.js
      </p>
    </footer>
  );
}
