import React from 'react'
import PropTypes from 'prop-types'

import { FaCheck } from 'react-icons/fa'

const CheckBox = props => {

  const inputRef = React.useRef(null)

  const onChange = () => {
    if (props.onChange)
      props.onChange(inputRef.current)
  }

  return (
    <label className="custom-checkbox">
      <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}/>
      <span className="custom-checkbox__checkmark">
        <FaCheck />
      </span>
      {props.label}
    </label>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

export default CheckBox