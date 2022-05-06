import React from 'react'
import PropTypes from 'prop-types'

import { FaShoppingBag } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaRegGem } from 'react-icons/fa'
import { FaDonate } from 'react-icons/fa'

const PolicyCard = props => {

  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">
          {props.name}
        </div>
        <div className="policy-card__info__description">
          {props.description}
        </div>
      </div>
    </div>
  )
}

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default PolicyCard