import React from 'react'

export const Card = (props) => (
    <div className="card shadow rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
        <div className="card-body" >
            {props.children}
        </div>
    </div>
)

