import React from 'react'

export default function Teaching({ data }) {
    return (
        <div className="projects">
            {data.map((node) => {
                return (
                    <div className="project" id="list" key={node.description}>
                        <div>
                            <h3>{node.description}</h3>
                            <div className="description">{node.year}</div>
                    </div>
                    <div className="flex">
                        <div className="type">{node.type}</div>
                    </div>
                </div>
                )
            }
        )
    }
    </div>
    )
}