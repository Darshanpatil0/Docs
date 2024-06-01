import React, { useRef } from 'react';
import Card from './Card/';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "JavaScript full course to download: sorry is under development",
      filesize: ".30md",
      close: true,
      tag: { isOpen: true, tagTitle: "Under development⌛⏳", tagColor: "blue" },
    },
    {
      desc: "To learn CSS is the best documentation on this earth 🚀🚀 🤷->😎",
      filesize: ".9md",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Best HTML Documentation on this internet for learning HTML with proactive and project 🚀🚀 🤷->😎",
      filesize: ".23md",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
  ];

  return (
    <div ref={ref} className='f flex-shrink-0 fixed top-0 left-0 z-[3] w-full p-5 h-full flex gap-10 flex-wrap '>
      {data.map((item, index) => (
        <Card key={index} data={item} referece={ref} />
      ))}
    </div>
  );
}

export default Foreground;
