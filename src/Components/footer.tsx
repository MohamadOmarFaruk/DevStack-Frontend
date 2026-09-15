export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4 md:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="brand-gradient-button flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white">
              D
            </div>
            <span className="text-lg font-bold text-slate-900">Dev Stack</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for building ambitious digital products.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-semibold text-slate-600">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">Product</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li><a href="#home">Home</a></li>
            <li><a href="#Technologies">Technologies</a></li>
            <li><a href="#Projects">Projects</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

