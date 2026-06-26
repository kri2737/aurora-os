export default function Trusted() {
    const companies = [
      "NovaTech",
      "Synapse",
      "Vertex",
      "Lumina",
      "HyperGrid",
      "CloudNest",
    ];
  
    return (
      <section className="py-14 border-y border-[var(--light)]">
        <div className="container">
  
          <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-10">
            Trusted by innovative teams worldwide
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
  
            {companies.map((company) => (
              <div
                key={company}
                className="text-center text-xl font-semibold text-gray-400 hover:text-[var(--secondary)] transition"
              >
                {company}
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }