import React, {useContext, useState} from "react";


const WorkflowContext = React.createContext();
const WorkflowUpdateContext = React.createContext();

export const WorkflowStatuses = {
    registeringVoters: 0,
    proposalsRegistrationStarted: 1,
    proposalsRegistrationEnded: 2,
    votingSessionStarted: 3,
    votingSessionEnded: 4,
    votesTallied: 5
}


export function WorkflowProvider({children}) {

    const defaultStatus = WorkflowStatuses.registeringVoters
    const [status, setStatus] = useState(defaultStatus);

    return(
        <WorkflowContext.Provider value={status}>
            <WorkflowUpdateContext.Provider value={setStatus}>
                {children}
            </WorkflowUpdateContext.Provider>
        </WorkflowContext.Provider>
    )
}


export function useWorkflowStatus() {
    return useContext(WorkflowContext)
}

export function useWorkflowStatusUpdate() {
    return useContext(WorkflowUpdateContext)
}