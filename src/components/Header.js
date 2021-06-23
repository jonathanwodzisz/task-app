import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({ title, onAdd, showAdd }) {
    return (
        <header className="header">
            <h1 /*css in jsx use style{{properties in here}}*/>{title}</h1>
            <Button text={showAdd ? 'close' : "Add"} color={showAdd ? "red" : "green"} onClick={onAdd} />
        </header>
    )
}
Header.defaultProps = {
    title: "Task",
}
Header.propTypes = {
    title: PropTypes.string,
    //use .isRequired to make the prop required
}
export default Header;