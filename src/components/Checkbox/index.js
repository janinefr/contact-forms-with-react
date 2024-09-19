import React from 'react'
import './Checkbox.css'

const Checkbox = (props) => {
  return (
    <div className='checkbox'>
        <label>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                required={props.required}
            />
            {props.label}
        </label>
    </div>
  )
}

export default Checkbox