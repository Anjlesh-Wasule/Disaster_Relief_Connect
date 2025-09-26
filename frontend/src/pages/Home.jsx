import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Banner from "../components/home/Banners";
import apiConnector from "../services/apiConnector";
import { alertEndPoints } from "../services/api";

const Home = () => {
  const [notified, setNotified] = useState(false);

  const fetchAlerts = async () => {
    try {
      const response = await apiConnector({
        method: "GET",
        url: alertEndPoints.GET_AGENCY_ALERTS_API,
      });

      const allAlerts = [...response.receivedAlerts, ...response.sentAlerts];

      if (allAlerts.length > 0 && !notified) {
        toast.error("You have new alerts!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setNotified(true);
      }
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div className="scrool-smooth flex flex-col items-center justify-center gap-y-16">
      <div className="mainSection w-full flex items-center justify-center">
        <div className="md:w-6/12 sm:w-full text-center flex flex-col gap-y-6 items-center justify-center">
          <p className="font-serif 2xl:h-32 h-full md:text-6xl sm:text-3xl text-6xl overflow-hidden block font-bold text-white">
            Connect and Coordinate During Calamities
          </p>
          <p className="w-8/12 sm:mb-40 md:mb-0 font-roborto sm:text-sm md:text-lg overflow-hidden 2xl:block opacity-80 text-white">
            Disaster Relief Connect is a comprehensive web application designed to
            facilitate coordination and location display for rescue agencies
            during both natural disasters and man-made emergencies.
          </p>
        </div>
      </div>

      <div className="text-gray-800 sm:text-2xl md:text-5xl font-serif 2xl:h-16 overflow-hidden text-center font-bold">
        {`"Empowering Heroes During Crisis Situations"`}
      </div>

      <Banner />
    </div>
  );
};

export default Home;