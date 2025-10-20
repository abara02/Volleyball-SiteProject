export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`my-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 border-b-4 border-lime-400 inline-block">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
