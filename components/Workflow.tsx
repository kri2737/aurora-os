export default function Workflow() {
    const steps = [
      "Receive Task",
      "AI Analysis",
      "Department Routing",
      "Execution",
      "Human Approval",
    ];
  
    return (
      <section className="container py-16">
  
        <div className="text-center mb-12">
  
          <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
            Workflow
          </p>
  
          <h2 className="heading text-4xl md:text-5xl mt-4">
            How Aurora Works
          </h2>
  
        </div>
  
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
  
          {steps.map((step, index) => (
  
            <div
              key={step}
              className="flex flex-col items-center flex-1"
            >
  
              <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
  
              <h3 className="heading mt-5 text-xl text-center">
                {step}
              </h3>
  
              {index !== steps.length - 1 && (
                <div className="hidden md:block w-full h-[2px] bg-[var(--light)] mt-8"></div>
              )}
  
            </div>
  
          ))}
  
        </div>
  
      </section>
    );
  }