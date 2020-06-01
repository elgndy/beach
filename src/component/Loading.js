import React from 'react'
import{FaDownload} from 'react-icons/fa'
export const Loading = () => {
    return (
        <div>
            <article className="loading">
                <p>Room Data Loading...</p>
            <FaDownload className="load" />
            </article>
        </div>
    )
}
