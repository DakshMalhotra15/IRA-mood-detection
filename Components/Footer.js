import React from 'react'

const Footer = ({ siteName }) => {
    const copyright = (year) => {
        const currYear = new Date().getFullYear();
        return currYear === year ? year : `${year}-${currYear % 100}`;
    }

    return (
        <>
            <footer>
                <div className="container p-3 mx-auto d-flex align-items-center justify-content-center">
                    <div className='copyright'>
                        <p className="m-3 text-secondary">Copyright © {copyright(2024)}, All Rights Reserved by <span className='name'>{siteName}</span>.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer