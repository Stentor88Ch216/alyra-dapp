import React from "react";

const PropositionsList = ({propositions, handleVote}) => {

    return (
        <div>
            {propositions.map( p => (
                <div key={p.id}>

                    <input type="radio" id={p.id} name="propList" value={p.description} onClick={() => handleVote(p.id)}/>

                    <label htmlFor={p.id}>
                        {p.description} (votes: {p.votes})
                    </label>

                </div>
            ))}
        </div>
    )
}

export default PropositionsList