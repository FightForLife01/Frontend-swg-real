export default function Colaboratori() {
    const logos = ["logo1.png", "logo2.png", "logo3.png"];
  
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Colaboratorii Noștri</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Colaborator ${index}`} className="h-12" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  