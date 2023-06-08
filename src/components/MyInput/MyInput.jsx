import React from 'react'

export const MyInput = ({value, onChange}) => {
  return (
    <input type='text' value={value} onChange={onChange} />
  )
}
