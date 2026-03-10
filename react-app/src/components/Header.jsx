export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b-4 border-accent bg-primary px-4 md:px-20 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-accent">
        <div className="size-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">account_balance</span>
        </div>
        <h2 className="text-accent text-xl font-bold leading-tight tracking-tight">Lý Luận Lenin</h2>
      </div>

      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-8">
          <a className="text-white hover:text-accent text-sm font-medium transition-colors" href="#">TRANG CHỦ</a>
          <a className="text-white hover:text-accent text-sm font-medium transition-colors" href="#dac-diem">5 ĐẶC ĐIỂM</a>
          <a className="text-white hover:text-accent text-sm font-medium transition-colors" href="#doc-quyen">ĐỘC QUYỀN NHÀ NƯỚC</a>
          <a className="text-white hover:text-accent text-sm font-medium transition-colors" href="#tai-lieu">TÀI LIỆU</a>
          <a className="text-white hover:text-accent text-sm font-medium transition-colors" href="#kiem-tra">KIỂM TRA</a>
        </nav>
      </div>

    </header>
  );
}
