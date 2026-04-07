import { useState } from "react";
import frameworkData from "./framework.json";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

export default function FrameworkList() {
    // 1. State penampung data dari form pencarian
    const [filterData, setFilterData] = useState({
        searchTerm: "",
        selectedTag: ""
    });

    // 2. LOGIKA UTAMA PENCARIAN (FILTERING)
    const filteredFrameworks = frameworkData.filter((item) => {
        // Ambil inputan user dan ubah ke huruf kecil (lowercase)
        const keyword = filterData.searchTerm.toLowerCase();
        
        // Ambil data dari item (pastikan ada fallback string kosong jika data null/undefined)
        const name = item.name?.toLowerCase() || "";
        const description = item.description?.toLowerCase() || "";
        const developer = item.details?.developer?.toLowerCase() || "";

        // Cek apakah keyword ada di nama, deskripsi, atau developer
        const matchesSearch = 
            name.includes(keyword) || 
            description.includes(keyword) || 
            developer.includes(keyword);
        
        // Cek apakah tag sesuai dengan dropdown (jika kosong/"" berarti tampilkan semua)
        const matchesTag = 
            filterData.selectedTag === "" || 
            (item.tags && item.tags.includes(filterData.selectedTag));
        
        // Harus memenuhi kriteria pencarian DAN kriteria tag
        return matchesSearch && matchesTag;
    });

    return (
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] p-10 flex flex-col items-center gap-6 min-h-screen">

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2 text-center">
                🚀 Modern JavaScript Frameworks
            </h1>

            {/* KOMPONEN PENCARIAN */}
            <FrameworkListSearchFilter onFilterChange={setFilterData} />

            {/* 3. MAPPING DATA HASIL PENCARIAN */}
            <div className="w-full max-w-2xl flex flex-col gap-6">
                {filteredFrameworks.length > 0 ? (
                    filteredFrameworks.map((item) => (
                        <div
                            key={item.id}
                            className="group w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
                                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.description}</p>
                                <p className="text-sm mt-3 text-gray-400">
                                    Developed by <span className="text-white font-medium">{item.details?.developer}</span> • {item.details?.releaseYear}
                                </p>
                                <a
                                    href={item.details?.officialWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:scale-105 transition"
                                >
                                    🌐 Visit Website
                                </a>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {item.tags?.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/20 backdrop-blur hover:bg-white/20 transition">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center p-8 bg-red-500/10 border border-red-500/20 rounded-2xl">
                        <p className="text-red-400 text-lg font-semibold">
                            Hmm, "{filterData.searchTerm}" tidak ditemukan.
                        </p>
                        <p className="text-gray-400 text-sm mt-2">Coba gunakan kata kunci lain atau reset filter!</p>
                    </div>
                )}
            </div>
        </div>
    );
}