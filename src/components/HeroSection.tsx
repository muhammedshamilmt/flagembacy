import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col">
      {/* Total Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          src="/assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-32">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center border border-foreground/20 bg-background/50 backdrop-blur-md px-4 py-1.5 w-fit text-xs font-mono uppercase tracking-[0.2em] text-foreground/80">
            Flag Embassy / Welcome _
          </div>

          <h1 className="mb-6 max-w-7xl text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase font-season-mix leading-[1.05]">
            Planted to Carry the<br />King's Colours
          </h1>

          <p className="mb-12 max-w-2xl text-lg md:text-xl text-foreground/80 font-season-mix leading-relaxed drop-shadow-md">
            A community of faith, purpose, and kingdom advancement. You are welcome here — whoever you are, wherever you are coming from.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-season-mix">
            <Link href="/connect" className="inline-flex h-14 items-center justify-center border border-foreground bg-foreground px-8 text-sm uppercase tracking-widest text-background transition-all hover:bg-foreground/90">
              Plan Your Visit
            </Link>
            <Link href="/media" className="inline-flex h-14 items-center justify-center border border-foreground/30 bg-background/50 backdrop-blur-md px-8 text-sm uppercase tracking-widest text-foreground transition-all hover:border-foreground hover:bg-background/80">
              Watch a Sermon
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Service Times Strip overlaid on the video */}
      <div className="relative z-10 w-full border-t border-foreground/10 bg-background/30 backdrop-blur-md">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
          <div className="flex items-center gap-6 md:gap-12 p-6 md:p-8 border-b xl:border-b-0 border-r-0 xl:border-r border-foreground/10 overflow-x-auto whitespace-nowrap">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/60">Locations _</span>
            <span className="text-lg md:text-xl font-bold font-season-mix uppercase opacity-90 flex items-center gap-2">
              <span className="w-4 h-4 rounded border border-foreground/50 flex items-center justify-center">
                <span className="w-2 h-2 bg-foreground rounded-sm"></span>
              </span>
              Main Campus
            </span>
            <span className="text-lg md:text-xl font-bold font-season-mix uppercase opacity-90 flex items-center gap-2">
              <span className="w-4 h-4 rounded border border-foreground/50 flex items-center justify-center"></span>
              City Center
            </span>
          </div>

          <div className="flex items-center gap-8 md:gap-16 p-6 md:p-8 overflow-x-auto whitespace-nowrap">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/60 mb-1">Sundays</span>
              <span className="text-2xl font-bold font-season-mix">9:00 AM <span className="opacity-30">_</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/60 mb-1">Sundays</span>
              <span className="text-2xl font-bold font-season-mix">11:30 AM <span className="opacity-30">_</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/60 mb-1">Midweek</span>
              <span className="text-2xl font-bold font-season-mix">7:00 PM <span className="opacity-30">_</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
