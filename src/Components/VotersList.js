import React from "react";

const VotersList = ({voters}) => {

    return (
        <ul>
            {voters.map( v => (
                <li key={v.address}>
                    {v.address} (has voted: {v.hasVoted ? "yes" : "no"})
                </li>
            ))}
        </ul>
    )
}

export default VotersList