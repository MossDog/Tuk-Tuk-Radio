export default function Home() {
  return (
    <div className="h-full p-8">
      {/* Horizontal container */}
      <div className="flex gap-8">
        {/* Vertical container */}

        <div className="flex flex-col gap-8 flex-1">
          <div className="card bg-blue-400">
            <div className="card-body space-y-4 prose prose-neutral max-w-none">
              <h2 className="card-title">Meet The Band</h2>
              <p>
                Tuk Tuk Radio is the neighbourhood duo you didn’t know you needed in your life. Featuring Alexandru Baboi on guitar and Babis Katsaitis on bass, they set the mood and bring the vibes for a guaranteed good time.
              </p>
              <p>
                While Tuk Tuk Radio usually performs in wine bars and restaurant settings, the duo is now aiming to take their sound to the stages of Dublin’s live music venues in the year ahead. Drawing influence from a wide range of genres, hence the name, you never quite know what to expect: it might be jazz, it might be funk, it might be chill, or it might be all of them at once.
              </p>
              <p>
                Their goal is simple: to make people feel good and have a great time.
              </p>
            </div>
          </div>

          <div className="card shadow-lg bg-blue-400">
            <div className="card-body">
              <h2 className="card-title">Gallery</h2>
              <p>Photos & Videos of previous gigs</p>
            </div>
          </div>
        </div>

        {/* Single panel */}
        <div className="flex card shadow-lg bg-blue-400">
          <div className="card-body">
            <h2 className="card-title">Popular Tracks</h2>
            <p>Cards for most popular spotify tracks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
