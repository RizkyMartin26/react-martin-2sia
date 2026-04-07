export default function TailwindCSS() {
  return (
    // Memberikan kontainer utama agar semua komponen berada di tengah dan terlihat rapi seperti halaman portofolio
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
      {/* Diubah class menjadi className (aturan React) & dipercantik ukurannya */}
      <h1 className="text-3xl font-extrabold text-gray-800 text-center border-b-2 border-gray-100 pb-4 mb-4">
        Belajar Tailwind CSS 4
      </h1>

      {/* Merapikan tombol utama */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 mx-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
        Click Me
      </button>

      <Spacing title="Card" content="ABCDEFGH" />
      <FlexboxGrid />
      <Typography />
      <BorderRadius />
      <BackgroundColors />
      <ShadowEffects />

      {/* Komponen gambar diletakkan di paling bawah */}
      <AestheticImage />
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white border border-gray-100 shadow-md p-6 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800">Hover me!</h3>
      <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
    </div>
  );
}

function Spacing(props) {
  return (
    <div className="bg-slate-50 border border-slate-100 shadow-sm p-6 m-4 rounded-xl hover:shadow-md transition-shadow duration-200">
      <h2 className="text-lg font-semibold text-slate-800">{props.title}</h2>
      <p className="mt-2 text-slate-600">{props.content}</p>
    </div>
  );
}

function Typography() {
  return (
    <div className="bg-white border border-gray-100 shadow-sm p-6 m-4 rounded-xl hover:shadow-md transition-shadow duration-200">
      <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
      <p className="mt-2 text-gray-600">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-5 text-white rounded-xl shadow-md">
      <h1 className="text-lg font-bold tracking-wide">MyWebsite</h1>
      <ul className="flex space-x-6 font-medium">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function BorderRadius() {
  return (
    // Border 2 atau 3 agar tidak terlalu tebal dan ditambahkan hover effect
    <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium ml-4 px-5 py-2 rounded-lg transition-colors duration-200">
      {" "}
      Klik Saya{" "}
    </button>
  );
}

function BackgroundColors() {
  return (
    // Menggunakan gradient agar warna biru terlihat lebih mewah
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2 text-blue-100">
        Belajar Tailwind itu seru dan fleksibel!
      </p>
    </div>
  );
}

/* KOMPONEN GAMBAR ESTETIK BARU */
function AestheticImage() {
  return (
    <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow duration-200">
      <h2 className="text-lg font-semibold text-gray-800">Modern Workspace</h2>
      {/* Container Gambar */}
      <div className="mt-4 relative h-64 w-full overflow-hidden rounded-lg border border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Workspace Estetik"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 cursor-pointer"
        />
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Komponen gambar ini menggunakan gambar pemrograman beresolusi tinggi
        yang ditarik otomatis dari Unsplash agar visual proyek Anda semakin
        memanjakan mata.
      </p>
    </div>
  );
}
