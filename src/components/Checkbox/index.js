import './Checkbox.css'
import React, {useState} from 'react'

const Checkbox = (props) => {

  const [isChecked,setIsChecked] = useState(false);

  const handleOnChange = () =>{
      setIsChecked(!isChecked)
    }


  return (
    <div className='checkbox'>
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
                required={props.required}
            />
            {props.label}
        </label>
    </div>
  )
}

export default Checkbox