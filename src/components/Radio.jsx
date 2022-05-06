import React from 'react'
import PropTypes from 'prop-types'

import { FaCheck } from 'react-icons/fa'

const Radio = props => {

  const inputRef = React.useRef(null)

  const onChange = () => {
    if (props.onChange)
      props.onChange(inputRef.current)
  }

  return (
    <label className="custom-radio">
      <input type="radio" name="price" ref={inputRef} onChange={onChange} checked={props.checked}/>
      <span className="custom-radio__checkmark">
        <FaCheck />
      </span>
      {props.label}
    </label>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

export default Radio