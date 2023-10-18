import React from 'react'
interface Props{
    text: string,
    bgColor: string,
    color: string,
    padding: string,
    fontsize: string,
    onclick: () => void
}
const Button: React.FC<Props> = ({text, bgColor, color, padding, fontsize, onclick}) => {
  return (
    <button style={{backgroundColor: bgColor, color: color, padding: padding, fontWeight: "600", fontSize: fontsize}} className="rounded-md font-netflix capitalize" onClick={onclick}>{text}</button>
  )
}

export default Button
