import React from "react";

const Bottom = () => {
  return (
    <div className="w-full py-6 px-6 sticky bottom-0">
      <div className="w-full flex bottom-0 sticky gap-6">
        <a className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M5 22h14a2 2 0 002-2v-9a1 1 0 00-.29-.71l-8-8a1 1 0 00-1.41 0l-8 8A1 1 0 003 11v9a2 2 0 002 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5H5z" />
          </svg><p>Home</p>
        </a>
        <a className="flex items-center gap-2">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
          </svg><p>Likes</p>
        </a>
        <a className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
          </svg><p>search</p>
        </a>
        <a className="flex items-center gap-2">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
            />
          </svg><p>notifications</p>
        </a>
      </div>
    </div>
  );
};

export default Bottom;
