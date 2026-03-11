import { Instagram, Music2 } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 py-4 bg-secondary-background border-border border-b-4">
    {/* USED FOR SEEING COLOR PALETTE EASILY DURING TESTING
        <div className="flex mt-2">
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
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-center w-full relative">
        <h1 className="tracking-wide text-3xl text-black w-full text-center">Tuk Tuk Radio</h1>
        <div className="flex gap-2 mt-3 md:mt-0 md:static md:pr-4 md:right-0 md:top-0 md:translate-y-0 md:w-auto w-full justify-center md:justify-end">
          <a
            href="https://www.instagram.com/tuktuk_radio/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-border shadow-shadow rounded-base transition hover:bg-main hover:shadow-none hover:translate-x-1 hover:translate-y-"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7 text-black" strokeWidth={2.5} />
          </a>
          <a
            href="https://open.spotify.com/artist/2fvw7GqBmXWP5TmhBzfhGm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-border shadow-shadow rounded-base transition hover:bg-main hover:shadow-none hover:translate-x-1 hover:translate-y-"
            aria-label="Spotify"
          >
            <Music2 className="w-7 h-7 text-black" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}