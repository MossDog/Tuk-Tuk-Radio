import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full p-8">

      {/* Horizontal container */}
      <div className="flex gap-8">

        {/* Vertical container */}
        <div className="flex flex-col gap-8 flex-1">

          {/* Meet The Band Panel */}
          <div className="card bg-blue-400 shadow-[4px_3px_0_#000]">
            <div className="card-body space-y-4 prose prose-neutral max-w-none">
              <h2 className="card-title">Meet The Band</h2>

              {/* Headshots */}
              <div className="flex items-center">

                <div className="flex flex-col items-center mx-auto">
                  <Image
                    src="/images/babis_headshot.jpg"
                    alt="Band photo"
                    className="rounded-lg border-4 border-black"
                    width={300}
                    height={300}
                  />
                  <p className="font-semibold">Babis Katsis (Bassist)</p>
                </div>

                <div className="flex flex-col items-center mx-auto">
                  <Image
                    src="/images/alexandru_headshot.jpg"
                    alt="Band photo"
                    className="rounded-lg border-4 border-black"
                    width={300}
                    height={300}
                  />
                  <p className="font-semibold">Alexandru Baboi (Guitarist)</p>
                </div>
                
              </div>

              <p>Tuk Tuk Radio is the neighbourhood duo you didn’t know you needed in your life. They set the mood and bring the vibes for a guaranteed good time.</p>
              <p>While Tuk Tuk Radio usually performs in wine bars and restaurant settings, the duo is aiming to take their sound to the stages of Dublin’s live music venues in the year ahead. Drawing influence from a wide range of genres, hence the name, you never quite know what to expect: it might be jazz, it might be funk, it might be chill, or it might be all of them at once.</p>
              <p>Their goal is simple: to make people feel good and have a great time.</p>

            </div>
          </div>

          {/* Gallery Panel */}
          <div className="card bg-blue-400 shadow-[4px_3px_0_#000]">
            <div className="card-body">
              <h2 className="card-title">Gallery</h2>
              <p>Photos & Videos of previous gigs</p>
            </div>
          </div>

        </div>

        {/* Tracks Panel */}
        <div className="flex card bg-blue-400 shadow-[4px_3px_0_#000]">
          <div className="card-body">
            <h2 className="card-title">Popular Tracks</h2>
            <p>Cards for most popular spotify tracks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
