import React from 'react'

export default function Input({tipo, name, holder}) {

  return (
    <input type={tipo} name={name} className="u-full-width"placeholder={holder} value=""/>
    )
}
