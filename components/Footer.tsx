import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-200 border-t border-gray-800 mt-8 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span role="img" aria-label="tuk tuk">🛺</span>
          Tuk Tuk Radio
        </div>
        <div className="text-sm italic text-gray-400">Your ride to the best tunes</div>
      </div>

      {/* Contact row, centered below main links */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <a href="https://open.spotify.com/artist/2fvw7GqBmXWP5TmhBzfhGm?si=nPYR0QgNSPyGn5Acmi5bPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm5.438 17.438c-.229.373-.713.488-1.086.26-2.979-1.826-6.73-2.236-11.155-1.221-.43.096-.859-.168-.955-.598-.096-.43.168-.859.598-.955 4.797-1.07 8.918-.613 12.229 1.318.373.229.488.713.26 1.096zm1.547-3.096c-.287.467-.893.617-1.359.33-3.414-2.09-8.627-2.697-12.66-1.471-.521.154-1.072-.137-1.227-.658-.154-.521.137-1.072.658-1.227 4.482-1.326 10.168-.658 14.027 1.66.467.287.617.893.33 1.366zm.164-3.164c-4.09-2.434-10.885-2.656-14.504-1.438-.635.207-1.322-.137-1.529-.771-.207-.635.137-1.322.771-1.529 4.066-1.326 11.418-1.072 15.965 1.646.572.344.754 1.09.41 1.662-.344.572-1.09.754-1.662.43z"/></svg>
          <span>Spotify</span>
        </a>
        <a href="https://instagram.com/tuktukradioband" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.13 1.12a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/></svg>
          <span>Instagram</span>
        </a>
        <a href="tel:+353830700784" className="flex items-center gap-1 hover:underline text-gray-300">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
          <span>083 070 0784</span>
        </a>
        <a href="mailto:tuktukradioband@gmail.com" className="flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z"/></svg>
          <span>tuktukradioband@gmail.com</span>
        </a>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Tuk Tuk Radio. This site is a personal project for music lovers.<br />
        No user data is collected. Enjoy the ride!
      </div>
      <a href="https://github.com/MossDog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline mt-3">
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
        <span>Luke Moss Hughes</span>
      </a>
    </footer>
  );
};

export default Footer;
