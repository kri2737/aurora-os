export default function CTA() {
    return (
      <section className="container py-16">
  
        <div className="rounded-[40px] bg-[var(--secondary)] p-20 text-center text-white shadow-xl">
  
          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            Ready To Begin
          </p>
  
          <h2 className="heading text-4xl md:text-5xl mt-6">
            Build Smarter.
            <br />
            Scale Faster.
          </h2>
  
          <p className="max-w-2xl mx-auto mt-8 text-white/80 leading-8">
            Join thousands of modern companies already using AuroraOS to automate
            operations, improve productivity and unlock intelligent growth.
          </p>
  
          <div className="mt-10 flex justify-center gap-8">
  
            <button className="rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-black hover:scale-105 transition">
              Start Free
            </button>
  
            <button className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-[var(--secondary)] transition">
              Book Demo
            </button>
  
          </div>
  
        </div>
  
      </section>
    );
  }