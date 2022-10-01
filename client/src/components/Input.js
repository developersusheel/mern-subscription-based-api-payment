import React from 'react'

const Input = ({label, value, name, setValue, type = "text"}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{label}</span>
      <input type={type} className="form-control" onChange={e=> setValue(e.target.value)} value={value}></input>
    </div>
  )
}

export default Input