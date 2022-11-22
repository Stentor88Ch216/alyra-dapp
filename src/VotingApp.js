import React from "react"
import VoterPanel from "./Components/VoterPanel"
import OwnerPanel from "./Components/OwnerPanel"
import TestsPanel from "./Components/TestsPanel"
import { ProfileProvider } from "./Contexts/ProfileContext"
import { WorkflowProvider } from "./Contexts/WorkflowContext"


const VotingApp = () => {

    return (
        <div>
            <h1>Alyra Voting App</h1>
            <ProfileProvider>
                <WorkflowProvider>
                    <TestsPanel/>
                    <div>&nbsp;</div>
                    <VoterPanel/>
                    <div>&nbsp;</div>
                    <OwnerPanel/>
                </WorkflowProvider>
            </ProfileProvider>
        </div>
    )
}


export default VotingApp
