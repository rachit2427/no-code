import React, { useEffect, useState } from 'react'

import Logo from '@no-code/common/components/Logo'
import classNames from 'classnames'

const Header = () => (
    <header>
        <div className="header-container">
            <div className="content-padding header-content">
                <div className="left-side">
                    <Logo />
                </div>
                <div className="right-side">Website by Rachit Dua</div>
            </div>
        </div>
        <div className="animated-stripe" />
    </header>
)

export default Header
