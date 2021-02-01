import React from 'react'

export default function Positions({ data }) {
    return (
        <div className="projects">
            {data.map((node) => {
                return (
                    <div className="project" id="list" key={node.title}>
                        <div>
                            <h3>{node.title}</h3>
                            <div className="description">{node.description}</div>
                    </div>
                    <div className="flex">
                        <div className="type">{node.year}</div>
                    </div>
                </div>
                )
            }
        )
    }
    </div>
    )
}