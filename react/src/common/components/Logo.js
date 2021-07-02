import React from 'react'

const Logo = () => (
    <div
        className="logo"
        onClick={() =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    >
        <span>N</span>o<span>C</span>ode
    </div>
)

export default Logo
