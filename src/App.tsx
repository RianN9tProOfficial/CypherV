import GlassSurface from './components/GlassSurface';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, augue eu fermentum posuere, tellus sem egestas magna, a feugiat nibh risus sed nibh. Cras varius, justo eu interdum sagittis, justo lectus suscipit turpis, et convallis lacus nulla a erat. Sed eget lectus vitae odio malesuada vehicula. Praesent rhoncus faucibus nibh, sit amet gravida ligula tincidunt in. Fusce sit amet sem id libero tincidunt aliquam. Donec id feugiat turpis, id dictum justo.';

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 mx-auto flex w-full max-w-6xl justify-center px-4 py-4 backdrop-blur-sm">
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={999}
          className="max-w-4xl px-6"
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          mixBlendMode="screen"
          backgroundOpacity={0.08}
          saturation={1.2}
        >
          <nav className="flex w-full items-center justify-between text-sm md:text-base">
            <span className="font-semibold tracking-[0.2em]">RIAN.DEV</span>
            <ul className="flex items-center gap-6 text-slate-200">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Projects</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </nav>
        </GlassSurface>
      </header>

      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)] md:text-7xl">
            Rian.dev
          </h1>
          <p className="mt-4 text-lg tracking-[0.25em] text-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
            Developer Portfolio
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-24 text-slate-200">
        {Array.from({ length: 12 }).map((_, idx) => (
          <article key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 leading-7 shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-white">Lorem Section {idx + 1}</h2>
            <p>{lorem}</p>
            <p className="mt-4">{lorem}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default App;
