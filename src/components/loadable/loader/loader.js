import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';

const Loader = () => {
    const { height } = useWindowDimensions()

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: `${height}px` }}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }} />
            <div></div>
            <strong>Loading...</strong>
        </div>
    )
}

export default Loader;