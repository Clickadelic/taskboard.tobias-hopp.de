import React from 'react'

function Logo({classes, name}) {
  return (
	<h1 className={classes}>{name}</h1>
  )
}

export default Logo