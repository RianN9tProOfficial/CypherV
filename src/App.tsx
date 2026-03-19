import GlassSurface from './components/GlassSurface';
import DarkVeil from './components/DarkVeil';
import GradientText from './components/GradientText';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, augue eu fermentum posuere, tellus sem egestas magna, a feugiat nibh risus sed nibh. Cras varius, justo eu interdum sagittis, justo lectus suscipit turpis, et convallis lacus nulla a erat. Sed eget lectus vitae odio malesuada vehicula. Praesent rhoncus faucibus nibh, sit amet gravida ligula tincidunt in. Fusce sit amet sem id libero tincidunt aliquam. Donec id feugiat turpis, id dictum justo.';

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.04}
            scanlineIntensity={0.05}
            speed={0.5}
            scanlineFrequency={1.2}
            warpAmount={0.8}
          />
        </div>

        <header className="fixed left-0 right-0 top-6 z-30 mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-4">
          <GlassSurface width="100%" height={64} borderRadius={9999} className="mx-auto max-w-5xl">
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

        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pt-28 text-center">
          <div>
            <h1
              className="text-4xl font-bold tracking-wide text-white md:text-6xl"
              style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
            >
              Hey there, I&apos;m{' '}
              <GradientText
                className="inline-flex text-4xl font-bold tracking-wide md:text-6xl"
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                animationSpeed={8}
                direction="diagonal"
              >
                Cypher V
              </GradientText>
            </h1>
            <p className="mt-4 text-lg tracking-[0.25em] text-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
              Developer Portfolio
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-24 pt-8 text-slate-200">
        {Array.from({ length: 12 }).map((_, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 leading-7 shadow-lg"
          >
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
