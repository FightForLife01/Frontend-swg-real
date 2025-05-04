export default function Resurse() {
    const links = [
      { name: "Blog", url: "/blog" },
      { name: "Tutoriale", url: "/tutoriale" },
      { name: "FAQs", url: "/faqs" },
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Resurse Utile</h2>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-blue-600 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  