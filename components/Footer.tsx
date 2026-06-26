export default function Footer() {
    return (
      <footer className="mt-10 border-t border-[var(--light)]">
  
        <div className="container py-14">
  
          <div className="flex flex-col md:flex-row justify-between gap-12">
  
            <div>
  
              <h2 className="heading text-4xl">
                Aurora
                <span className="text-[var(--accent)]">OS</span>
              </h2>
  
              <p className="mt-5 max-w-md text-gray-500 leading-8">
                The operating system for autonomous companies.
                Automate every department with intelligent AI workflows.
              </p>
  
            </div>
  
            <div className="grid grid-cols-2 gap-12">
  
              <div>
  
                <h3 className="heading mb-5">
                  Product
                </h3>
  
                <ul className="space-y-3 text-gray-500">
  
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Security</li>
  
                </ul>
  
              </div>
  
              <div>
  
                <h3 className="heading mb-5">
                  Company
                </h3>
  
                <ul className="space-y-3 text-gray-500">
  
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
  
                </ul>
  
              </div>
  
            </div>
  
          </div>
  
          <div className="mt-14 border-t border-[var(--light)] pt-8 text-center text-gray-500">
  
            © 2026 AuroraOS. All rights reserved.
  
          </div>
  
        </div>
  
      </footer>
    );
  }