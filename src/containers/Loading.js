import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div className="ld">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-dark">Loading...</p>
        </div>
    )
}

export default Loading