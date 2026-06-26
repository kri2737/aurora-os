export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--light)]">
        <div className="container flex items-center justify-between py-5">
  
          <h1 className="heading text-2xl font-bold">
            Aurora<span className="text-[var(--primary)]">OS</span>
          </h1>
  
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="cursor-pointer hover:text-[var(--secondary)] transition">
              Features
            </li>
  
            <li className="cursor-pointer hover:text-[var(--secondary)] transition">
              Pricing
            </li>
  
            <li className="cursor-pointer hover:text-[var(--secondary)] transition">
              Testimonials
            </li>
  
            <li className="cursor-pointer hover:text-[var(--secondary)] transition">
              Contact
            </li>
          </ul>
  
          <button className="rounded-full bg-[var(--primary)] px-5 py-2 font-semibold hover:scale-105 transition">
            Launch
          </button>
  
        </div>
      </nav>
    );
  }