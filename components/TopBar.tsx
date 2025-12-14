export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 py-4 bg-secondary-background shadow-shadow border-b-2">
      <div className="flex items-center justify-center">

        <h1 className="tracking-widest text-black [text-shadow:-1px_-1px_0_#FFF]">
        Tuk Tuk Radio
        </h1>
        {/* USED FOR SEEING COLOR PALETTE EASILY DURING TESTING
        <div className="flex">
          <div className="bg-main mr-3">main</div>
          <div className="bg-background mr-3">background</div>
          <div className="bg-secondary-background mr-3">secondary-background</div>
          <div className="bg-foreground text-white mr-3">foreground</div>
          <div className="bg-main-foreground text-white mr-3">main-foreground</div>
          <div className="bg-border text-white mr-3">border</div>
          <div className="bg-overlay text-white mr-3">overlay</div>
          <div className="bg-ring text-white">ring</div>
        </div>
        */}


      </div>
      
    </header>
  );
}