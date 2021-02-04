import React from 'react'
import PropTypes from 'prop-types'

const EmailLink = ({ className, text }) =>
    <a className={className} rel="noopener" target="_blank"
       href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=anguyen0208@gmail.com&tf=1'>
        {text}
    </a>

EmailLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
}

EmailLink.defaultProps = {
    className: ''
}

export default EmailLink
