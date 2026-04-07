import { useState } from "react";
import frameworkData from "./framework.json"; 

export default function FrameworkListSearchFilter({ onFilterChange }) {
  // 1. Inisialisasi DataForm beserta default value sesuai modul
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  // Trik mengambil semua tag unik dari framework.json
  const allTags = [...new Set(frameworkData.flatMap((item) => item.tags))].sort();

  // 2. Inisialisasi Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    
    const newDataForm = {
      ...dataForm,
      [name]: value,
    };
    
    // Set state
    setDataForm(newDataForm);

    // Kirim data ke parent untuk melakukan filter Card
    if (onFilterChange) {
      onFilterChange(newDataForm);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Cari Framework</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Input Text dengan atribut name="searchTerm" */}
        <input
          type="text"
          placeholder="Cari nama framework..."
          name="searchTerm"
          value={dataForm.searchTerm}
          onChange={handleChange}
          className="flex-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Select dengan atribut name="selectedTag" */}
        <select
          name="selectedTag"
          value={dataForm.selectedTag}
          onChange={handleChange}
          className="flex-1 p-3 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition [&>option]:text-gray-900"
        >
          <option value="">Semua Kategori</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Tampilan hasil state dataForm.searchTerm dan dataForm.selectedTag */}
      <div className="mt-4 p-3 rounded-lg bg-black/20 border border-white/10 text-gray-300 text-sm">
        <p>Kata Kunci: <strong>{dataForm.searchTerm || "-"}</strong></p>
        <p>Tag Pilihan: <strong>{dataForm.selectedTag || "Semua"}</strong></p>
      </div>
    </div>
  );
}