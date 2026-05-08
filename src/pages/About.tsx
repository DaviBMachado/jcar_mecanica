export function About() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Sobre a Oficina</h1>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Fundada com o propósito de mudar a visão de que mecânica precisa ser algo complicado e obscuro. Nossa missão é entregar confiança e segurança para você e sua família.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Resolver problemas automotivos com precisão, agilidade e total transparência, garantindo a satisfação plena de cada cliente que entra em nossa oficina.</p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Nossos Valores</h3>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Honestidade em primeiro lugar</li>
                <li>Busca constante por inovação</li>
                <li>Respeito ao cliente e ao seu bem</li>
                <li>Responsabilidade ambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }