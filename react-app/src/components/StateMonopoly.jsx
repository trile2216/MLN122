export default function StateMonopoly() {
  return (
    <section className="py-20 px-4 md:px-20" id="doc-quyen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-primary dark:text-accent text-3xl font-bold mb-4 uppercase tracking-wider text-center" >
            Chủ Nghĩa Tư Bản Độc Quyền Nhà Nước
          </h2>
          <div className="h-1 w-24 bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bản chất */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              <h3 className="text-primary dark:text-accent text-xl font-bold">Bản chất</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Là sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản
              thành một bộ máy thống nhất. Nhà nước phụ thuộc vào các tổ chức độc quyền.
            </p>
          </div>

          {/* Mục đích */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">target</span>
              <h3 className="text-primary dark:text-accent text-xl font-bold">Mục đích</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Phục vụ lợi ích của các tổ chức độc quyền và cứu nguy cho chủ nghĩa tư bản trước những
              mâu thuẫn sâu sắc của nó, đảm bảo lợi nhuận độc quyền cao.
            </p>
          </div>

          {/* Các biểu hiện */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">category</span>
              <h3 className="text-primary dark:text-accent text-xl font-bold">Các biểu hiện</h3>
            </div>
            <ul className="text-slate-700 dark:text-slate-300 space-y-3 list-disc pl-5">
              <li>Sở hữu nhà nước phát triển mạnh mẽ.</li>
              <li>Sự điều tiết kinh tế của nhà nước.</li>
              <li>Sự thâm nhập lẫn nhau giữa tư bản độc quyền và bộ máy nhà nước.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
