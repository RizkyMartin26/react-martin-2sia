export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
      
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {title || "Title"}
        </h1>

        <div className="text-sm text-gray-400 mt-1">
          {Array.isArray(breadcrumb)
            ? breadcrumb.join(" / ")
            : breadcrumb || ""}
        </div>
      </div>

      {/* RIGHT (BUTTON / ACTION) */}
      <div>
        {children}
      </div>

    </div>
  );
}