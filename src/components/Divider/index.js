import React, { Component } from 'react'
import 'bulma-divider'

export function Divider({...props}) {
	return (
		<div className={`is-divider ${props.isVertical && "is-divider-vertical"} ${props.className} `} data-content={props.content || "OR"} />
	)
}