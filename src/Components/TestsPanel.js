import React from "react";
import { useProfile, useProfileUpdate } from "../Contexts/ProfileContext";


const TestsPanel = () => {

    const profile = useProfile()
    //const toggleProfile = useProfileUpdate()
    const setProfile = useProfileUpdate()

    return (
        <fieldset>
            <legend>[UI tests tools] State and profile</legend>

            <button onClick={ () => setProfile({...profile, connected: !profile.connected})}>
                Connected: {profile.connected ? "true" : "false" }
            </button>

            <button onClick={ () => setProfile({...profile, owner: !profile.owner})}>
                Owner: {profile.owner ? "true" : "false" }
            </button>

            <button onClick={ () => setProfile({...profile, voter: !profile.voter})}>
                Voter: {profile.voter ? "true" : "false" }
            </button>

            <button onClick={ () => setProfile({...profile, hasVoted: !profile.hasVoted})}>
                Has voted: {profile.hasVoted ? "true" : "false" }
            </button>

        </fieldset>
        
    )
}

export default TestsPanel