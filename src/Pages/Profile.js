import React from "react";
import Favorites from "../components/Favorites";

const Profile = () => {
  return (
    <div style={{ maxWidth: "650px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid green",
        }}
      >
        <div>
          <img
            style={{ width: "150px", height: "150px", borderRadius: "75px" }}
            src=""
            alt=""
          />
        </div>
        <div>
          <h4>Dre123</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          ></div>
        </div>
      </div>
      <h5>
        <Favorites />
      </h5>
    </div>
  );
};

export default Profile;
