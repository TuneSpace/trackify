import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/vela-green/theme.css";
import React, { useContext, useState } from "react";
import Avatar from "react-avatar-edit";
import { Card } from "react-bootstrap";
import Favorites from "../components/Favorites";
import Suggestions from "../components/Suggestions";
import { UserContext } from "../Context/UserContext";


const Profile = () => {
  const { userState } = useContext(UserContext);
  console.log('hopefully this is the avatar-->',userState.avatar)
  const [dialogs, setdialogs] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState(null)
  const [avatar, setAvatar] = useState(null)
  
  //use built in oncrop function to define what happens when you change the previewAvatar state
  const onCrop = (img) => { 
    setPreviewAvatar(img)
   
  };

  //set what you want to happens when you close the crop box
  const onClose = () => {
    setPreviewAvatar(null)
  };

  //determine what we want to show dependent on whether there's a preview avatar

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
                  avatar: previewAvatar,
                }),
              })
                .then((res) => res.json())
                .then((data) => { 
                  sessionStorage.setItem('avatar', data[0].avatar)
                  setAvatar(data[0].avatar)
                  })

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
            //if thre's a previewAvatar, show it, if not pull the avatar from session storage
            src={previewAvatar ? previewAvatar : sessionStorage.getItem('avatar')}
            alt="avatar"
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
      <h5>
      <div>
       <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Trackify Suggestions</Card.Title>
        <Card.Text>
          Needing Inspiration? Click below to todays popular playlists via Trackify Suggestions.
        </Card.Text>
        <button variant="success"
        onClick={() =>{
       return  <Suggestions />

         } }
        
        >Show Me Suggestions</button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        <Suggestions />
        </div>
      </h5>
    </div>
  );
};
export default Profile;