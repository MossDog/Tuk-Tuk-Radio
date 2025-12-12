export default function Home() {
  return (
    <div className="p-8">
      {/* Horizontal container */}
      <div className="flex gap-8">
        {/* Vertical container */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Panel A</h2>
              <p>Top panel content</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Panel B</h2>
              <p>Bottom panel content</p>
            </div>
          </div>
        </div>

        {/* Single panel */}
        <div className="flex card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Panel C</h2>
            <p>Side panel content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
