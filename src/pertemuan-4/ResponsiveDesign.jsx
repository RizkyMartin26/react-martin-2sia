// Child Component 1: Responsive Text
function ResponsiveText() {
  return (
    <div className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">1. Responsive Text</h2>
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-700">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran text ini akan menyesuaikan lebar layar. 
        Coba hapus class yang menggunakan prefix breakpoint untuk melihat perbedaannya.
      </p>
    </div>
  );
}

// Child Component 2: Responsive Width
function ResponsiveWidth() {
  return (
    <div className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">2. Responsive Width</h2>
      <div className="mb-4 text-gray-700">
        <p>Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar.</p>
        <p><strong>md:w-1/2</strong> → Saat layar mencapai ukuran md, lebar menjadi 50%.</p>
        <p><strong>md:flex-row</strong> → pada div parent membuat elemen mendatar, sedangkan pada layar lebih kecil (mobile), kolom akan menumpuk kebawah.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-red-400 w-full md:w-1/2 p-4 text-white font-bold rounded-lg text-center">Kotak Merah</div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4 text-white font-bold rounded-lg text-center">Kotak Biru</div>
      </div>
    </div>
  );
}

// Child Component 3: Responsive Layout (Grid)
function ResponsiveLayout() {
  return (
    <div className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">3. Responsive Layout (Grid)</h2>
      <p className="mt-4 mb-2 text-gray-700">Kotak-kotak di bawah ini menggunakan <strong>Grid</strong>.</p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li><strong>grid-cols-1</strong> → Pada layar kecil 1 kolom</li>
        <li><strong>sm:grid-cols-2</strong> → Saat ukuran layar sm menjadi 2 kolom</li>
        <li><strong>md:grid-cols-3</strong> → Pada ukuran md menjadi 3 kolom</li>
        <li><strong>lg:grid-cols-4</strong> → Saat ukuran layar lg menjadi 4 kolom</li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 p-4 text-white font-bold rounded-lg text-center shadow">Box 1</div>
        <div className="bg-blue-500 p-4 text-white font-bold rounded-lg text-center shadow">Box 2</div>
        <div className="bg-blue-500 p-4 text-white font-bold rounded-lg text-center shadow">Box 3</div>
        <div className="bg-blue-500 p-4 text-white font-bold rounded-lg text-center shadow">Box 4</div>
      </div>
    </div>
  );
}

// Parent Component (Panggil di main.jsx)
export default function ResponsiveDesign() {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-md">
      <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-8">
        📱 Hasil Latihan Responsive Design
      </h1>
      <ResponsiveText />
      <ResponsiveWidth />
      <ResponsiveLayout />
    </div>
  );
}