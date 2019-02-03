import React, { Component } from 'react'
import 'bulma-badge/dist/css/bulma-badge.min.css'

export function Badge({...props}) {
	return (
		<span
			data-badge={props.text}
			className={`badge 
				${props.className}
				${props.isColor && "is-badge-"+props.isColor}
				${props.isSize && "is-badge-"+props.isSize}
				${props.isOutlined && "is-badge-outlined"}
				${props.isPosition && "is-badge-"+props.isPosition}
				`}>
			{ props.children }
		</span>
	)
}