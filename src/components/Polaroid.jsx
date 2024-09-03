import React from 'react';

function Polaroid({ img, desc }) {
  return (
    <div className="max-w-xs mx-auto bg-white p-4 overflow-hidden rounded">
      <div className="bg-white p-1 ">
        <img src={img} alt={desc} className="w-60 h-60 object-cover" />
      </div>
      <div className="mt-4 text-center">
        <p className="text-black text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Polaroid;
