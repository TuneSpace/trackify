import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/vela-green/theme.css";
import React, { useContext, useState } from "react";
import Avatar from "react-avatar-edit";
import img from "../43189002.jpg";
import Favorites from "../components/Favorites";
import { UserContext } from "../Context/UserContext";


const Profile = () => {
  const { userState } = useContext(UserContext);
  console.log("this should be userstate ->", userState);
  const [dialogs, setdialogs] = useState(false);
  const [imgCrop, setimgCrop] = useState(false);
  const [storeImage, setstoreImage] = useState([]);
  const onCrop = (view) => {
    setimgCrop(view);
  };
  const onClose = () => {
    setimgCrop(null);
  };
  const saveImage = () => {
    setstoreImage([...storeImage, { imgCrop }]);
    setdialogs(false);
  };
  const profileImageShow = storeImage.map((item) => item.imgCrop);
  return (
    <div style={{ maxWidth: "800px", margin: "3px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "15px 0px auto",
          borderBottom: "2px solid green",
        }}
      >
        <Dialog
          visible={dialogs}
          header={() => <p>Update Picture</p>}
          onHide={() => setdialogs(false)}
        >
          <Avatar width={300} height={300} onCrop={onCrop} onClose={onClose} />
          <Button label="Save" icon="pi pi-check" onClick={saveImage} />
          <Button
            label="Upload"
            onClick={() =>
              fetch("http://localhost:8000/user", {
                method: "PATCH",
                mode: "cors",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  username: userState.username,
                  avatar: storeImage,
                }),
              })
                .then((res) => res.json())
                .then((data) => setstoreImage(data[0].avatar))
            }
          ></Button>
        </Dialog>
        <div>
          <img
            style={{
              margin: "4px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={profileImageShow.length ? profileImageShow : img}
            alt=""
            onClick={() => setdialogs(true)}
          />
        </div>
        <div>
          <h4 className="username">{userState.username}</h4>
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