import React from 'react'

const Button = ({ text, onClick, id }) => {
    return (
        <div>
            <button
                className='btn'
                onClick={onClick}
                id={id}
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    text: 'Button'
}

export default Button