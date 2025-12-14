import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full p-8">

      {/* Horizontal container */}
      <div className="flex gap-8">

        {/* Vertical container */}
        <div className="flex flex-col gap-8 flex-1">

          {/* Meet The Band Panel */}
          <div className="shadow-[4px_3px_0_#000]">
            <div className="space-y-4 max-w-none">
              <h2 className="mx-auto">Meet The Band</h2>

              {/* Headshots */}
              <div className="flex justify-evenly">

                <div className="flex flex-col gap-y-3 items-center">
                  <Image
                    src="/images/babis_headshot.jpg"
                    alt="Band photo"
                    className="rounded-lg border-2 border-black shadow-[4px_3px_0_#000]"
                    width={300}
                    height={300}
                  />
                  <h5 className="font-semibold">Babis Katsis (Bassist)</h5>
                </div>

                <div className="flex flex-col gap-y-3 items-center">
                  <Image
                    src="/images/alexandru_headshot.jpg"
                    alt="Band photo"
                    className="rounded-lg border-2 border-black shadow-[4px_3px_0_#000]"
                    width={300}
                    height={300}
                  />
                  <h5 className="font-semibold">Alexandru Baboi (Guitarist)</h5>
                </div>
                
              </div>

              {/* Bio */}
              <div className="mx-auto my-4 max-w-180 space-y-4">
                <p>Tuk Tuk Radio is the neighbourhood duo you didn’t know you needed in your life. They set the mood and bring the vibes for a guaranteed good time.</p>
                <p>While Tuk Tuk Radio usually performs in wine bars and restaurant settings, the duo is aiming to take their sound to the stages of Dublin’s live music venues in the year ahead. Drawing influence from a wide range of genres, hence the name, you never quite know what to expect: it might be jazz, it might be funk, it might be chill, or it might be all of them at once.</p>
                <p>Their goal is simple: to make people feel good and have a great time.</p>
              </div>
              

            </div>
          </div>

          {/* Gallery Panel */}
          <div className="card shadow-[4px_3px_0_#000]">
            <div className="card-body">
              <h2 className="card-title">Gallery</h2>
              <p>Photos & Videos of previous gigs</p>
            </div>
          </div>

        </div>

        {/* Tracks Panel */}
        <div className="flex card shadow-[4px_3px_0_#000]">
          <div className="card-body">
            <h2 className="card-title">Popular Tracks</h2>
            <p>Cards for most popular spotify tracks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
