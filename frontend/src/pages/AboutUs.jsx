import React from "react";
import ImageCard from "../components/ImageCard";
import AnjleshPic from "../assets/team/anjlesh.jpg";
import AhmerPic from "../assets/team/ahmer.jpg";
// import SudarshanPic from "../assets/team/sudarshan.jpg";
// import AatirPic from "../assets/team/aatir.jpeg";


const AboutUs = () => {
  const photos = [
    {
      id: 1,
      name: "Anjlesh Wasule",
      // img: AnjleshPic,
      img: AnjleshPic,
    },
    {
      id: 2,
      name: "Ahmer Faraz",
      img: AhmerPic,
    },
    // {
    //   id: 3,
    //   name: "Sudarshan",
    //   img: SudarshanPic,
    // },
    // {
    //   id: 4,
    //   name: "Aatir",
    //   img: AatirPic,
    // },

    
    
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-32">
      <div className="w-11/12 flex flex-col items-center justify-center">
        {/* heading div */}
        <div className="text-center w-11/12 font-serif h-auto text-6xl font-extrabold overflow-hidden">
          Meet The Developers
        </div>

        {/* info div */}
        <div className="md:w-6/12 sm:w-full sm:mt-4 text-lg font-Roborto opacity-80 text-center">
          {`"At PRPCEM Amravati, we are a dedicated team of aspiring engineers pursuing 
          our B.E in Computer Science and Engineering. With a passion for technology
           and innovation, we embarked on our journey to create cutting-edge solutions.
        
              Our mission is to continually learn, grow, and contribute to the ever-evolving 
              field of technology while striving for excellence in every project we undertake."`}
        </div>

        {/* Image cards */}

        <div className=" w-9/12 mt-10 gap-y-10 flex flex-row items-center justify-center gap-x-32 flex-wrap overflow-hidden">
          {photos.map((data) => (
            <ImageCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
