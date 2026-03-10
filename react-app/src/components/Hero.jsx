export default function Hero() {
  return (
    <section className="bg-primary py-16 px-4 md:px-20 border-b-4 border-accent/30">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="hero-title text-5xl md:text-7xl leading-tight drop-shadow-md">
          Lý Luận V.I. Lênin Về Độc Quyền Trong Chủ Nghĩa Tư Bản
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
          Tóm tắt quá trình chuyển biến từ chủ nghĩa tư bản tự do cạnh tranh sang chủ nghĩa tư bản
          độc quyền và giai đoạn tột cùng là chủ nghĩa đế quốc.
        </p>
        <a
          className="inline-flex items-center justify-center rounded-lg h-14 px-8 bg-accent text-primary text-lg font-bold shadow-xl hover:scale-105 transition-transform"
          href="#dac-diem"
        >
          TÌM HIỂU NGAY
        </a>
      </div>
    </section>
  );
}
