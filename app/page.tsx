
import ImageCard from "@/components/ui/image-card";
import Gallery from "@/components/Gallery";
import Tracks from "@/components/Tracks";

export default function Home() {
  return (
    <div className="h-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Live Shows Card */}
        <div className="mb-8 w-full bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 border-2 border-blue-700 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="live">🎸</span>
            <span className="text-lg font-semibold text-white">See Tuk Tuk Radio Live!</span>
          </div>
          <div className="flex flex-col md:flex-row gap-3 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-medium">Thursdays:</span>
              <a href="https://www.google.com/maps/place/Surge+Coffee/@53.3430862,-6.2452881,3354m/data=!3m1!1e3!4m6!3m5!1s0x48670f47b713f985:0x3173664e3dfd6445!8m2!3d53.3447757!4d-6.2342067!16s%2Fg%2F11v9w4qg4t?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 flex items-center gap-1">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Surge Grand Canal
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Fridays:</span>
              <a href="https://www.google.com/maps/place/SURGE+Coffee+Clontarf/@53.3626868,-6.2208235,705m/data=!3m3!1e3!4b1!5s0x48670e54d26428ff:0xe1b7125b36e45dfc!4m6!3m5!1s0x48670f6593c89633:0xdcd5f0c4905714bc!8m2!3d53.3626868!4d-6.2182486!16s%2Fg%2F11mxbjjk_f?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 flex items-center gap-1">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Surge Clontarf
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2 md:mt-0">Come find us and enjoy the music!</div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:auto-rows-min md:grid-flow-dense">

          {/* Meet The Band Panel */}
          <div className="md:col-start-1 md:row-start-1 px-8 bg-secondary-background rounded-base shadow-shadow border-border border-2">
            <h2 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">Meet The Band</h2>

            {/* Headshots */}
            <div className="flex flex-col items-center mx-auto gap-y-4 md:flex-row md:mx-0 justify-evenly">
                <ImageCard className="bg-main"
                  caption="Babis Katsaitis - Bassist"
                  imageUrl="/images/babis_headshot.jpg">
                </ImageCard>

                <ImageCard className="bg-main"
                  caption="Alexandru Baboi - Guitarist"
                  imageUrl="/images/alexandru_headshot.jpg">
                </ImageCard>
            </div>

            {/* Bio */}
            <div className="mx-auto my-8 max-w-180 space-y-3">
              <p>Tuk Tuk Radio is the neighbourhood duo you didn’t know you needed in your life. They set the mood and bring the vibes for a guaranteed good time.</p>
              <p>While Tuk Tuk Radio usually performs in wine bars and restaurant settings, the duo is aiming to take their sound to the stages of Dublin’s live music venues in the year ahead. Drawing influence from a wide range of genres, hence the name, you never quite know what to expect: it might be jazz, it might be funk, it might be chill, or it might be all of them at once.</p>
              <p>Their goal is simple: to make people feel good and have a great time.</p>
            </div>
          </div>

          {/* Tracks Panel */}
            <div className="w-full md:col-start-2 md:row-start-1">
              <Tracks className="bg-main border-border border-2 shadow-shadow p-4 rounded-base"/>
            </div>
          
          {/* Gallery Panel */}
          <div className="md:col-start-1 md:row-start-2 p-8 bg-main rounded-base shadow-shadow border-border border-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <p className="text-sm text-black/70">Moments from past gigs</p>
            </div>
            <Gallery />
          </div>

        </div>
      </div>
    </div>
  );
}
