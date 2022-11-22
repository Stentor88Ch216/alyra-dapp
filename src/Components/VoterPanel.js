import React from "react";
import {useState} from "react"
import TextField from "./TextField";
import PropositionsList from "./PropositionsList";
import { useProfile, useProfileUpdate } from "../Contexts/ProfileContext";
import { useWorkflowStatus, WorkflowStatuses } from "../Contexts/WorkflowContext";


var selectedProposition

const VoterPanel = () => {

    const profile = useProfile();
    const setProfile = useProfileUpdate();
    const status = useWorkflowStatus();

    const initialPropositions = [
        {id: 0, description: "First proposition", votes: 0},
        {id: 1, description: "Second proposition", votes: 0},
        {id: 2, description: "Third proposition", votes: 0}
    ]

    const [propositions, setNewPropositions] = useState(initialPropositions)

    const handleNewPropositionSubmit = (newPropositionDescription) => {
        const newProposition = {id: propositions.length, description: newPropositionDescription, votes: 0}
        setNewPropositions(propositions.concat(newProposition))
    }


    const handleVote = (propositionId) => {
        selectedProposition = propositionId
    }

    const handleVoteConfirmation = (propositionId) => {
        const newPropositions = [...propositions]
        newPropositions[propositionId].votes++
        setNewPropositions(newPropositions)
        setProfile({...profile, hasVoted: true})

    }


    function Panel() {
        return (
            <div>
                <fieldset>
                    <legend>Propositions</legend>

                    <PropositionsList propositions={propositions} handleVote={handleVote}/>
                    
                    {(profile.voter && status === WorkflowStatuses.proposalsRegistrationStarted) ? <TextField label="Add new: " placeholder="proposition" buttonLabel="Submit" handleSubmit={handleNewPropositionSubmit}/> : ""}

                    <hr/>
                    <button disabled={!profile.voter || profile.hasVoted || (status !== WorkflowStatuses.votingSessionStarted)} onClick={() => handleVoteConfirmation(selectedProposition)}>Confirm vote</button>
                    {profile.hasVoted ? " You have voted" : ""}

                </fieldset>
            </div>
        )
    }


    return (

        profile.connected ? <Panel/> : ""
        
    )
}

export default VoterPanel