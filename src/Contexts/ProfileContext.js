import React, {useContext, useState} from "react";


const ProfileContext = React.createContext();
const ProfileUpdateContext = React.createContext();

export function ProfileProvider({children}) {

    const defaultProfile = {
        connected: true,
        owner: true,
        voter: true,
        hasVoted: false
    }

    const [profile, setProfile] = useState(defaultProfile);

    return(
        <ProfileContext.Provider value={profile}>
            <ProfileUpdateContext.Provider value={setProfile}>
                {children}
            </ProfileUpdateContext.Provider>
        </ProfileContext.Provider>
    )
}


export function useProfile() {
    return useContext(ProfileContext)
}

export function useProfileUpdate() {
    return useContext(ProfileUpdateContext)
}
