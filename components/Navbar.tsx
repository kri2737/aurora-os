export default function Navbar() {
    return (
      <header className="sticky top-4 z-50">
        <div className="container">
          <nav className="flex items-center justify-between rounded-2xl border border-[var(--light)] bg-white/80 px-8 py-4 backdrop-blur-xl shadow-sm">
  
          <div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
         <span className="heading text-xl font-bold text-[var(--foreground)]">
            A
         </span>
         </div>

       <h1 className="heading text-2xl font-bold tracking-tight">
         Aurora<span className="text-[var(--accent)]">OS</span>
        </h1>
       </div>
  
       <ul className="hidden md:flex gap-10 font-medium">
  <li>
    <a
      href="#features"
      className="hover:text-[var(--secondary)] transition cursor-pointer"
    >
      Features
    </a>
  </li>

  <li>
    <a
      href="#pricing"
      className="hover:text-[var(--secondary)] transition cursor-pointer"
    >
      Pricing
    </a>
  </li>

  <li>
    <a
      href="#testimonials"
      className="hover:text-[var(--secondary)] transition cursor-pointer"
    >
      Testimonials
    </a>
  </li>

  <li>
    <a
      href="#footer"
      className="hover:text-[var(--secondary)] transition cursor-pointer"
    >
      Contact
    </a>
  </li>
</ul>
            <button className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold hover:scale-105 transition">
              Launch
            </button>
  
          </nav>
        </div>
      </header>
    );
  }