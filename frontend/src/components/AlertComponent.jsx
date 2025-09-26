import React, { useEffect, useState } from "react";
import { agencyEndPoints } from "../services/api";
import apiConnector from "../services/apiConnector";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const AlertComponent = ({ alert, onDelete }) => {
  const [senderAgencyDetails, setSenderAgencyDetails] = useState(null);
  const loggedInAgency = useSelector((state) => state.profile?.agency); // Get logged-in agency

  useEffect(() => {
    const fetchAgencyDetails = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url:
            agencyEndPoints.GET_SPECIFIC_AGENCY_PROFILE +
            "/" +
            alert.senderAgency,
        });

        setSenderAgencyDetails(response.agency);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgencyDetails();
  }, [alert.senderAgency]);

  const getSeverityColor = (severity) => {
    const lowerSeverity = severity.toLowerCase();
    if (lowerSeverity === "high") {
      return "red";
    }
    else if (lowerSeverity === "medium") {
      return "orange";
    }
    else {
      return "lime";
    }
  };

  const isOwnAlert = loggedInAgency && senderAgencyDetails && loggedInAgency._id === senderAgencyDetails._id;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 font-semibold w-80">
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-2">
        {senderAgencyDetails ? senderAgencyDetails.name : "Loading..."}
      </h1>
      <p className="text-gray-700">Desc: {alert.description}</p>
      <p className="text-gray-700 mt-2">
        Severity: {alert.severity}
        <span
          className={`inline-block ml-2 w-3 h-3 rounded-full`}
          style={{ backgroundColor: getSeverityColor(alert.severity) }}
        ></span>
      </p>
      <p className="text-gray-700 mt-2">
        Timestamp: {new Date(alert.timestamp).toLocaleString()}
      </p>
      <p className="text-gray-700 mt-2">
        Agency name: {senderAgencyDetails ? senderAgencyDetails.name : "Loading..."}
      </p>
      <p className="text-gray-700 mt-2">
        Contact Email: {senderAgencyDetails ? senderAgencyDetails.email : "Loading..."}
      </p>

      <div className="mt-4">
        {senderAgencyDetails && (
          <Link
            className="w-full"
            to={`/agency-profile/${senderAgencyDetails._id}`}
          >
            <button className="bg-indigo-500 w-full hover:bg-indigo-600 hover:scale-95 text-white shadow-sm rounded-full px-4 py-2 duration-300">
              Agency Profile
            </button>
          </Link>
        )}
      </div>

      {/* Conditionally render delete button */}
      {isOwnAlert && (
        <button onClick={onDelete} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Alert
        </button>
      )}
    </div>
  );
};

export default AlertComponent;