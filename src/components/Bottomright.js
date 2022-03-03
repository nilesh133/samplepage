import React, { useContext } from 'react'
import { CodeContext } from '../context/ContextProvider'
const Bottomright = () => {
    const { state, setState } = useContext(CodeContext);

    function handleChange(e) {
        setState(e.target.value);
      }

    return (
        <div>
            <input
                type="text"
                name="name"
                onChange={handleChange}
                value={state} />
        </div>
    )
}

export default Bottomright