import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function addBtn() {
    console.log("clicked");
}
function Header({ title }) {
    return (
        <header className="header">
            <h1 /*css in jsx use style{{properties in here}}*/>{title}</h1>
            <Button text="Add" color="red" onClick={addBtn} />
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