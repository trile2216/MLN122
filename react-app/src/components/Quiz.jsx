import useQuiz from '../hooks/useQuiz';

export default function Quiz() {
  const {
    screen,
    currentQuestion,
    score,
    selectedIndex,
    question,
    totalQuestions,
    answers,
    startQuiz,
    selectOption,
    goNext,
    goPrev,
    restart,
    SCREEN,
  } = useQuiz();

  const isAnswered = selectedIndex !== null;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <section className="bg-primary py-20 px-4 md:px-20 text-white" id="kiem-tra">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="hero-title text-4xl mb-4">KIỂM TRA KIẾN THỨC</h2>
          <p className="text-white/80">Đánh giá mức độ hiểu biết của bạn về lý luận độc quyền của Lênin</p>
        </div>

        {/* Start screen — no white box */}
        {screen === SCREEN.START && (
          <div className="text-center">
            <button
                className="inline-flex items-center justify-center rounded-lg h-14 px-8 bg-accent text-primary text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                onClick={startQuiz}
        
            >
              BẮT ĐẦU KIỂM TRA
            </button>
          </div>
        )}

        {/* Quiz & Result — inside white box */}
        {screen !== SCREEN.START && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-slate-900 dark:text-slate-100 shadow-2xl min-h-[400px] flex flex-col justify-center">

            {/* Quiz screen */}
            {screen === SCREEN.QUIZ && question && (
              <div className="w-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-primary font-bold text-lg">
                    Câu hỏi {currentQuestion + 1}/{totalQuestions}
                  </span>
                  <span className="bg-primary/10 px-3 py-1 rounded text-primary font-bold">Điểm: {score}</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-1.5 mb-8">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-8 min-h-[60px]">{question.q}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {question.options.map((opt, index) => {
                    let extraClass = '';
                    if (selectedIndex !== null) {
                      if (index === question.correct) extraClass = 'correct';
                      else if (index === selectedIndex) extraClass = 'incorrect';
                    }
                    return (
                      <button
                        key={index}
                        className={`quiz-option ${extraClass}`}
                        onClick={() => selectOption(index)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    onClick={goPrev}
                    disabled={currentQuestion === 0}
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Câu trước
                  </button>

                  <span className="text-slate-400 text-sm">
                    {answers.filter((a) => a !== null).length}/{totalQuestions} đã trả lời
                  </span>

                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-bold hover:brightness-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    onClick={goNext}
                    disabled={!isAnswered}
                  >
                    {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp'}
                    <span className="material-symbols-outlined text-base">
                      {isLastQuestion ? 'check_circle' : 'arrow_forward'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Result screen */}
            {screen === SCREEN.RESULT && (
              <div className="text-center">
                <span className="material-symbols-outlined text-accent text-8xl mb-4 block">
                  {score >= totalQuestions * 0.8 ? 'emoji_events' : score >= totalQuestions * 0.5 ? 'thumb_up' : 'sentiment_neutral'}
                </span>
                <h2 className="text-3xl font-bold mb-4">Hoàn thành!</h2>
                <p className="text-2xl mb-2">
                  Kết quả: <span className="text-primary font-black">{score}/{totalQuestions}</span>
                </p>
                <p className="text-slate-500 mb-8">
                  {score >= totalQuestions * 0.8 ? 'Xuất sắc! Bạn nắm vững lý luận của Lênin.'
                    : score >= totalQuestions * 0.5 ? 'Khá tốt! Hãy ôn lại một số phần.'
                    : 'Hãy xem lại tài liệu và thử lại nhé!'}
                </p>
                <button
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
                  onClick={restart}
                >
                  Làm lại
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
