import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          /* Tell me if this sushi has been eaten! */
          false ?
            null
          :
            <img src={props.oneSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.oneSushi.name} - ${props.oneSushi.price}
      </h4>
    </div>
  )
}

export default Sushi
