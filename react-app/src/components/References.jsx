export default function References() {
  return (
    <section className="py-20 px-4 md:px-20 bg-background-light dark:bg-background-dark" id="tai-lieu">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary dark:text-accent text-2xl font-bold mb-10 border-l-4 border-accent pl-4">
          Tài liệu tham khảo chính
        </h2>
          <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-primary text-4xl">library_books</span>
            <div>
              <h4 className="font-bold text-lg mb-1">Giáo trình Kinh tế chính trị Mác - Lênin</h4>
              <p className="text-slate-500 text-sm italic">Bộ Giáo dục và Đào tạo</p>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Tài liệu học tập chính thống về lý luận độc quyền trong chương trình đại học.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
