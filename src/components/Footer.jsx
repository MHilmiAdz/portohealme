export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 mt-16 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
        <p className="mt-2 text-gray-500">Reach out for collaborations or just to say hi!</p>
        <div className="mt-4 space-x-6">
          <a href="https://id.linkedin.com/in/m-hilmi-adzkia" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/MHilmiAdz" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.instagram.com/m_hilmi_a/" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <p className="mt-6 text-sm text-gray-600">© 2025 Hilmi. All rights reserved.</p>
      </div>
    </footer>
  );
}