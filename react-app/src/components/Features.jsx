const features = [
  {
    icon: 'factory',
    title: 'Tập trung sản xuất',
    desc: 'Sự tập trung sản xuất và các tổ chức độc quyền chi phối nền kinh tế.',
  },
  {
    icon: 'account_balance',
    title: 'Tư bản tài chính',
    desc: 'Sự hình thành tư bản tài chính và hệ thống tài phiệt lũng đoạn.',
  },
  {
    icon: 'public',
    title: 'Xuất khẩu tư bản',
    desc: 'Việc xuất khẩu tư bản trở nên đặc biệt quan trọng so với xuất khẩu hàng hóa.',
  },
  {
    icon: 'handshake',
    title: 'Liên minh độc quyền',
    desc: 'Sự hình thành các liên minh độc quyền quốc tế phân chia thị trường.',
  },
  {
    icon: 'map',
    title: 'Phân chia thế giới',
    desc: 'Các cường quốc tư bản hoàn thành việc phân chia lãnh thổ thế giới.',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-20 bg-background-light dark:bg-slate-900" id="dac-diem">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-primary dark:text-accent text-3xl font-bold mb-4 uppercase tracking-wider">
            5 Đặc Điểm Kinh Tế Của Độc Quyền
          </h2>
          <div className="h-1 w-24 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((f) => (
            <div key={f.icon} className="feature-card">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">{f.icon}</span>
              <h3 className="text-primary dark:text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
