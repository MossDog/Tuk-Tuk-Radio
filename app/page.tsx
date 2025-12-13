export default function Home() {
  return (
    <div className="h-full p-8">
      {/* Horizontal container */}
      <div className="flex gap-8">
        {/* Vertical container */}

        <div className="flex flex-col gap-8 flex-1">
          <div className="card bg-blue-400">
            <div className="card-body">
              <h2 className="card-title">Meet The Band</h2>
              <p>Member bios & headshots</p>
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
