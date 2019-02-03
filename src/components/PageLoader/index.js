import React, { Component } from 'react'
import 'bulma-pageloader'

export function PageLoader({...props}) {
	return (
		<div className={`pageloader ${props.isRightToLeft && "is-right-to-left"} ${props.isLeftToRight && "is-left-to-right"} ${props.className} ${props.isActive && "is-active"}`}>
			<span className="title">{ props.children }</span>
		</div>
	)
}