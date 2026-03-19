import GlassSurface from './components/GlassSurface';
import DarkVeil from './components/DarkVeil';
import GradientText from './components/GradientText';
import ScrollReveal from './components/ScrollReveal';
import TextType from './components/TextType';

const App = () => {
  return (
    <main className="min-h-screen bg-black text-white">
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

        <header className="fixed left-0 right-0 top-3 z-30 mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-2">
          <GlassSurface width="100%" height={64} borderRadius={9999} className="mx-auto max-w-5xl">
            <nav className="flex w-full items-center justify-between px-6 text-sm font-medium md:text-base">
              <span className="tracking-[0.16em]">RIAN.DEV</span>
              <ul className="flex items-center gap-6 text-slate-200">
                <li className="cursor-pointer hover:text-white">Home</li>
                <li className="cursor-pointer hover:text-white">Projects</li>
                <li className="cursor-pointer hover:text-white">Contact</li>
              </ul>
            </nav>
          </GlassSurface>
        </header>

        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pt-28 text-center">
          <div className="mx-auto max-w-[700px]">
            <h1 className="text-4xl font-semibold tracking-[-0.01em] text-white md:text-6xl">
              Hey there, I&apos;m{' '}
              <GradientText
                className="inline-flex text-4xl font-semibold tracking-[-0.01em] md:text-6xl"
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                animationSpeed={8}
                direction="diagonal"
              >
                Cypher V
              </GradientText>
            </h1>
            <TextType
              className="mt-4 text-lg font-medium leading-[1.65] tracking-normal text-slate-200"
              text={[
                'Meet CypherV',
                'Your all-in-one Discord bot',
                'Moderation made simple',
                'Automation without clutter',
                'Everything, in one place',
                'Control without complexity',
                'Running silently in the background',
                'Keeping things in order',
                'Less noise, more control',
                'Built for your server',
                'Designed to stay out of your way',
                'Simple on the surface, powerful underneath',
                'Engineered for reliability',
                'Made to handle everything',
              ]}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[700px] px-6 pb-24 pt-8 text-slate-100">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          textClassName="font-medium leading-[1.65] tracking-normal"
        >
          {'CypherV is built to quietly power your server, handling moderation, automation, and everything in between.'}
        </ScrollReveal>
      </section>
    </main>
  );
};

export default App;
