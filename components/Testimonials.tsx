export default function Testimonials() {

    const testimonials = [
  
      {
        name: "Sarah Chen",
        role: "Founder · NovaTech",
        quote:
          "AuroraOS reduced repetitive work by almost 70% within our first month.",
      },
  
      {
        name: "Michael Ross",
        role: "Operations Lead · HyperGrid",
        quote:
          "The automation workflows feel like adding an entire team overnight.",
      },
  
      {
        name: "Emily Carter",
        role: "CTO · Synapse AI",
        quote:
          "The best AI platform we've used. Fast, reliable and beautifully designed.",
      },
  
    ];
  
    return (
  
      <section id ="testimonials" className="container py-16">
  
        <div className="text-center mb-12">
  
          <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
            Testimonials
          </p>
  
          <h2 className="heading text-4xl md:text-5xl mt-4">
            Loved By Modern Teams
          </h2>
  
        </div>
  
        <div className="grid md:grid-cols-3 gap-8">
  
          {testimonials.map((item) => (
  
            <div
              key={item.name}
              className="rounded-[32px] bg-white p-8 shadow-lg border border-[var(--light)] hover:-translate-y-2 transition-all duration-300"
            >
  
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] flex items-center justify-center heading text-xl mb-6">
  
                {item.name.charAt(0)}
  
              </div>
  
              <p className="leading-8 italic">
  
                "{item.quote}"
  
              </p>
  
              <div className="mt-8">
  
                <h4 className="heading text-xl">
  
                  {item.name}
  
                </h4>
  
                <p className="text-gray-500">
  
                  {item.role}
  
                </p>
  
              </div>
  
            </div>
  
          ))}
  
        </div>
  
      </section>
  
    );
  
  }
