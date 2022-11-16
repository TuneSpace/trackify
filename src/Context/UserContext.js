import { createContext, useState } from "react";


//creaete, define and export context
export const UserContext = createContext()

function UserContextProvider({children}) {
    
    //set and define a state 
    const [userState, setUserState] = useState({
        id: 1,
        username: "Guest",
        email: "randomjoeschmo@hotmail.com",
        isLoggedIn: false
    });
    const [faveList, setFaveList] = useState([]);
    const [imageUrl, setImageUrl] = useState('https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg');

    //set and define an object to hold the items we want to share 
    const stateObject = {
        
        userState,
        setUserState,
        faveList,
        setFaveList,
        imageUrl,
        setImageUrl
    };


return (
<UserContext.Provider value={stateObject}>
{children}
</UserContext.Provider>
)
}


//export the Context Provider for user in other files
export default UserContextProvider;