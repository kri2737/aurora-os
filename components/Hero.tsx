export default function Hero() {
    return (
      <section className="container min-h-[85vh] flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
  
          {/* Left Side */}
          <div>
  
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--secondary)] mb-4">
              Autonomous Intelligence Platform
            </p>
  
            <h1 className="heading text-5xl lg:text-7xl font-bold leading-tight">
            <>
               Deploy Departments.
               <br />
               Not Dashboards.
            </>
            </h1>
  
            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              AuroraOS gives your company AI-powered Finance,
              Sales, Legal and Support teams that operate 24/7,
              letting humans focus on strategy instead of repetition.
            </p>
  
            <div className="flex gap-4 mt-10">
  
            <button className="btn-primary">
               Launch Aurora
            </button>
  
            <button className="btn-secondary">
  Watch Demo
</button>
  
            </div>
  
          </div>
  
          {/* Right Side */}
  
          <div className="flex justify-center">
  
            <div className="relative w-[420px] h-[420px] rounded-full border border-[var(--light)]">
  
              <div className="absolute inset-0 flex items-center justify-center">
  
                <div className="w-28 h-28 rounded-full bg-[var(--primary)] flex items-center justify-center font-bold">
                  AI
                </div>
  
              </div>
  
              <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
                Finance
              </div>
  
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow">
                Sales
              </div>
  
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow">
                Legal
              </div>
  
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
                Support
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }