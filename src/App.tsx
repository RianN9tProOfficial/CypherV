import GlassSurface from './components/GlassSurface';
import DarkVeil from './components/DarkVeil';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, augue eu fermentum posuere, tellus sem egestas magna, a feugiat nibh risus sed nibh. Cras varius, justo eu interdum sagittis, justo lectus suscipit turpis, et convallis lacus nulla a erat. Sed eget lectus vitae odio malesuada vehicula. Praesent rhoncus faucibus nibh, sit amet gravida ligula tincidunt in. Fusce sit amet sem id libero tincidunt aliquam. Donec id feugiat turpis, id dictum justo.';

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 mx-auto flex w-full max-w-6xl justify-center px-4 py-4">
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={999}
          className="max-w-4xl"
          displace={0.08}
          distortionScale={-34}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          brightness={58}
          opacity={0.9}
          mixBlendMode="normal"
          backgroundOpacity={0.06}
          saturation={1.1}
        >
          <nav className="flex w-full items-center justify-between px-6 text-sm md:text-base">
            <span className="font-semibold tracking-[0.2em]">RIAN.DEV</span>
            <ul className="flex items-center gap-6 text-slate-200">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Projects</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </nav>
        </GlassSurface>
      </header>

      <section className="relative flex min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0">
          <DarkVeil hueShift={0} noiseIntensity={0.04} scanlineIntensity={0.05} speed={0.5} scanlineFrequency={1.2} warpAmount={0.8} />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)] md:text-7xl">
            Rian.dev
          </h1>
          <p className="mt-4 text-lg tracking-[0.25em] text-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
            Developer Portfolio
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-24 pt-8 text-slate-200">
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
