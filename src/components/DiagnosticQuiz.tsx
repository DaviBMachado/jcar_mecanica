import { useQuizStore } from '../store/useQuizStore';
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import config from '../data/config.json';

const QUIZ_QUESTIONS = {
  1: {
    title: 'O que está acontecendo com o carro?',
    options: ['Barulho estranho', 'Luz no painel acesa', 'Dificuldade para ligar', 'Vazamento de fluido', 'Apenas revisão preventiva']
  },
  2: {
    title: 'Com que frequência isso acontece?',
    options: ['O tempo todo', 'Apenas com o motor frio', 'Em altas velocidades', 'Passando em buracos/lombadas', 'Não se aplica']
  }
};

export function DiagnosticQuiz() {
  const { whatsapp } = config.contato;
  const { step, answers, setAnswer, nextStep, prevStep, resetQuiz } = useQuizStore();

  const handleOptionSelect = (answer: string) => {
    setAnswer(`step_${step}`, answer);
  };

  const handleFinish = () => {
    const text = `Olá! Fiz o pré-diagnóstico no site.%0A%0A*Problema:* ${answers.step_1}%0A*Frequência:* ${answers.step_2}%0A%0AGostaria de agendar uma avaliação.`;
    window.open(`https://wa.me/${whatsapp}?text=${text}`, '_blank');
    resetQuiz();
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            Pré-Diagnóstico Rápido
          </h3>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Passo {step} de 3</span>
        </div>
        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step < 3 ? (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg mb-4 text-zinc-800 dark:text-zinc-200">
            {QUIZ_QUESTIONS[step as keyof typeof QUIZ_QUESTIONS].title}
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            {QUIZ_QUESTIONS[step as keyof typeof QUIZ_QUESTIONS].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`p-4 text-left rounded-xl border transition-all duration-200 ${
                  answers[`step_${step}`] === option
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium'
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-blue-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center gap-2 px-4 py-2 text-zinc-500 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            {/* Botão de Ação - Vermelho */}
            <button
              onClick={nextStep}
              disabled={!answers[`step_${step}`]}
              className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Próximo <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Diagnóstico Concluído!</h4>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
            Com base nas suas respostas, já temos uma ideia de por onde começar. Envie as informações para nossa equipe e agende sua avaliação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetQuiz}
              className="px-6 py-3 font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Refazer Quiz
            </button>
            {/* CTA Final - Vermelho */}
            <button
              onClick={handleFinish}
              className="px-6 py-3 font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              Enviar pelo WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}