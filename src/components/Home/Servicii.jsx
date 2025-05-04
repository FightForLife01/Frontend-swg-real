export default function Servicii() {
    const services = [
      { title: "Consultanță", description: "Descriere scurtă", icon: "icon-path" },
      { title: "Importuri", description: "Descriere scurtă", icon: "icon-path" },
      { title: "Calculatoare profitabilitate", description: "Descriere scurtă", icon: "icon-path" },
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Serviciile Noastre</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 shadow-md rounded-md text-center">
                <img src={service.icon} alt={service.title} className="mx-auto mb-4" />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  