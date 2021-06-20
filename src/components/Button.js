import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, color, onClick }) {
    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color, }}>{text}</button >
    )
}
Button.defaultProps = {
    color: "black",
    text: "btn",
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
