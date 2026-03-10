export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-20 border-t-8 border-accent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 text-accent mb-6">
            <span className="material-symbols-outlined">account_balance</span>
            <h2 className="text-xl font-bold">Lý Luận Lenin</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Trang thông tin học thuật chuyên sâu về các lý luận kinh tế chính trị của V.I. Lênin,
            cung cấp nguồn tư liệu và công cụ học tập cho sinh viên và nhà nghiên cứu.
          </p>
        </div>

        <div>
          <h3 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Liên kết</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a className="hover:text-white transition-colors" href="#">Trang chủ</a></li>
            <li><a className="hover:text-white transition-colors" href="#dac-diem">5 Đặc điểm kinh tế</a></li>
            <li><a className="hover:text-white transition-colors" href="#doc-quyen">Độc quyền nhà nước</a></li>
            <li><a className="hover:text-white transition-colors" href="#kiem-tra">Kiểm tra kiến thức</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Bản quyền</h3>
          <p className="text-slate-400 text-sm mb-4">
            © 2024 Dự án Giáo dục Lý luận Chính trị. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-accent">mail</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-accent">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-accent">info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
