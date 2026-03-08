import ImageCard from "@/components/ui/image-card";
import Gallery from "@/components/Gallery";
import Tracks from "@/components/Tracks";

export default function Home() {
  return (
    <div className="h-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-stretch">

          {/* Meet The Band Panel */}
          <div className="md:col-start-1 px-8 bg-secondary-background rounded-base shadow-shadow border-border border-2">
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
          <Tracks className="bg-main border-border border-2 shadow-shadow p-4 rounded-base"/>
          
          {/* Gallery Panel */}
          <div className="md:col-start-1 p-8 bg-main rounded-base shadow-shadow border-border border-2">
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
