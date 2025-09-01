// app/page.tsx (Next.js 13+ dengan App Router)

export default function Home() {
  return (
    <main className="text-white">
       
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[url('')]">
        <h1 className="text-2xl font-bold">ATHAA</h1>
        <ul className="hidden md:flex gap-6">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Service</a></li>
          <li><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

<div className="bg-[url('/ata.png')] bg-cover bg-center bg-fixed">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-20">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">I Am ATHA Garage.</h2>
          <p className="text-lg text-gray-300 mb-6">Web | WordPress Developer</p>
          <p className="text-gray-400 mb-6">
            Use Pixel perfect and interactive experience for your next web project.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Contact Me
          </button>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="/ata.png"
            alt="Profile"
            className="rounded-full shadow-lg w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>
      </section>
      </div>

      {/* About Section */}
      <section className="bg-white px-10 py-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="img/LM GARAGE.jpg" alt="Profile" className="rounded-full w-60 h-60 object-cover" />
          <div>
            <h2 className="text-3xl font-bold mb-4">My Real Life is Up to You?</h2>
            <p className="text-yellow-400 font-semibold mb-4">I am a WordPress Developer</p>
            <p className="text-black mb-6">
              I build professional WordPress websites with clean code and responsive design.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
              Download CV
            </button>
          </div>
        </div>
      </section>

<div className="bg-[url('/img/Mobil.png')] bg-cover bg-center bg-fixed">
      {/* Services */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Service</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Web & Mobile Apps</h3>
            <p className="text-gray-400">I develop cross-platform apps with modern UI.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">WordPress Dev</h3>
            <p className="text-gray-400">Build high-quality websites with WordPress CMS.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">SEO Marketing</h3>
            <p className="text-gray-400">Optimize websites for search engines & traffic growth.</p>
          </div>
        </div>
      </section>
      </div>

      {/* Timeline / History */}
      <section className="bg-black px-10 py-20">
        <h2 className="text-3xl font-bold mb-6">Some History of My Life, 1980 - 2019</h2>
        <ul className="space-y-4">
          <li><span className="font-semibold">1990:</span> Born in my city.</li>
          <li><span className="font-semibold">2010:</span> Started learning web development.</li>
          <li><span className="font-semibold">2019:</span> Became a professional WordPress Developer.</li>
        </ul>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Download CV
        </button>
      </section>
      
      {/* Newsletter */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-lg w-64 text-black"
          />
          <button className="bg-yellow-400 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-300 text-black">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-gray-400">
        ©️ 2025 ATHAA. All Rights Reserved.
      </footer>
    </main>
  );
}