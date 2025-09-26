import React from 'react'

// const ImageCard = (data) => {
//   return (
//     <div className='bg-gray-100 rounded-md shadow-lg w-[300px] h-[350px] flex flex-col items-center justify-center gap-y-6 hover:scale-105 transition-all duration-200'>
//         <div className='overflow-hidden'><img src={data.data.img} alt='profile-pic' className='cursor-pointer object-cover'/></div>
//         <p className='text-xl font-bold block mb-6 overflow-hidden text-black font-Roborto opacity-80 text-center'>{data.data.name}</p>
//     </div>
//   )
// }

const ImageCard = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-md shadow-lg w-[300px] h-[350px] flex flex-col items-center justify-center gap-y-6 hover:scale-105 transition-all duration-200">
      {/* Image Wrapper */}
      <div className="w-[250px] h-[250px] overflow-hidden rounded-full border-2 border-gray-300 flex items-center justify-center">
        <img
          src={data.img}
          alt="profile-pic"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {/* Name */}
      <p className="text-xl font-bold mb-6 text-black font-Roborto opacity-80 text-center">
        {data.name}
      </p>
    </div>
  );
};

export default ImageCard;

