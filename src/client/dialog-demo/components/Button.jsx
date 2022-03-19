import React from 'react'

const Button = ({ text, onClick, }) => {
    return (
        <div>
            <button
                className='btn'
                onClick={onClick}
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