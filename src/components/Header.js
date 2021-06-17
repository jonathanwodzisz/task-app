import React from 'react'
import PropTypes from 'prop-types'

function Header({ title }) {
    return (
        <header>
            <h1 /*css in jsx use style{{properties in here}}*/>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: "Task",
}
Header.propTypes = {
    //use .isRequired to make the prop required
}
export default Header;