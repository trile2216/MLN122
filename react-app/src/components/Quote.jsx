export default function Quote() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center italic">
        <span className="material-symbols-outlined text-white/20 text-7xl block mb-4">format_quote</span>
        <h2 className="text-white/90 text-2xl md:text-3xl font-medium leading-relaxed">
          &ldquo;Tự do cạnh tranh đẻ ra độc quyền. Sự chuyển biến từ cạnh tranh sang độc quyền là hiện
          tượng quan trọng nhất trong nền kinh tế của CNTB hiện đại.&rdquo;
        </h2>
        <p className="mt-6 text-accent font-bold">— V.I. Lênin</p>
      </div>
    </section>
  );
}
