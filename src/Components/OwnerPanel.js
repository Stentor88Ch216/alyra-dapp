import { useState } from "react";
import TextField from "./TextField";
import VotersList from "./VotersList";
import { useProfile } from "../Contexts/ProfileContext";
import { useWorkflowStatus, useWorkflowStatusUpdate } from "../Contexts/WorkflowContext";
import { WorkflowStatuses } from "../Contexts/WorkflowContext";

const OwnerPanel = () => {

    const profile = useProfile();
    const status = useWorkflowStatus();
    const setStatus = useWorkflowStatusUpdate();

    const initialVoters = [
        {address: "0xa2Ca7773...12", hasVoted: false},
        {address: "0xbCuS8a31...88", hasVoted: false},
        {address: "0xa62dEA21...11", hasVoted: false}
    ]

    const [votersList, setVotersList] = useState(initialVoters)

    const handleNewVoterSubmit = (newVoterAddress) => {
        const newVoter = {address: newVoterAddress, hasVoted: false}
        setVotersList(votersList.concat(newVoter))
    }

    function WorkflowButton({statusID}) {

        switch(statusID) {

            case WorkflowStatuses.registeringVoters:
                return (<button onClick={() => setStatus(WorkflowStatuses.proposalsRegistrationStarted)}>
                    Start proposals registration</button>)

            case WorkflowStatuses.proposalsRegistrationStarted:
                return(<button onClick={() => setStatus(WorkflowStatuses.proposalsRegistrationEnded)}>
                    Stop proposals registration</button>)

            case WorkflowStatuses.proposalsRegistrationEnded:
                return(<button onClick={() => setStatus(WorkflowStatuses.votingSessionStarted)}>
                    Start voting session</button>)

            case WorkflowStatuses.votingSessionStarted:
                return(<button onClick={() => setStatus(WorkflowStatuses.votingSessionEnded)}>
                    Stop voting session</button>)

            case WorkflowStatuses.votingSessionEnded:
                return(<button onClick={() => setStatus(WorkflowStatuses.votesTallied)}>
                    Declare winner</button>)

            default:
                return(<span>The vote is tallied.</span>)
        }
    }


    
    function Panel() {
        return(
            <fieldset>
                <legend>Voters</legend>

                <VotersList voters={votersList}/>

                {status === WorkflowStatuses.registeringVoters ? <TextField label="Add voter: " placeholder="address" buttonLabel="Add" handleSubmit={handleNewVoterSubmit}/> : ""}

                <hr/>
                <WorkflowButton statusID={status}/>
            </fieldset>
        )
    }


    return (
        (profile.connected && profile.owner) ? <Panel/> : ""
    )
}

export default OwnerPanel