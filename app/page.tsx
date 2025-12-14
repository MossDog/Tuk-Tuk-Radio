import ImageCard from "@/components/ui/image-card";

export default function Home() {
  return (
    <div className="h-full p-8">

      {/* Horizontal container */}
      <div className="flex gap-8 justify-center">

        {/* Vertical container */}
        <div className="flex flex-col gap-8">

          {/* Meet The Band Panel */}
          <div className="flex flex-col space-y-4 px-8 bg-secondary-background rounded-base shadow-shadow border-border border-2">
              <h2 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">Meet The Band</h2>

              {/* Headshots */}
              <div className="flex flex-col mx-auto gap-y-4 md:flex-row md:mx-0 justify-evenly">
                  <ImageCard className="bg-main"
                    caption="Babis Katsis - Bassist"
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

          {/* Gallery Panel */}
          <div className="p-8 bg-main rounded-base shadow-shadow border-border border-2">
            <div className="">
              <h2 className="">Gallery</h2>
              <p>Photos & Videos of previous gigs</p>
            </div>
          </div>

        </div>

        {/* Tracks Panel */}
        <div className="bg-main p-8 rounded-base shadow-shadow border-border border-2">
          <div className="">
            <h2 className="">Popular Tracks</h2>
            <p>Cards for most popular spotify tracks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
