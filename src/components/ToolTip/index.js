import React, { Component } from 'react'
import 'bulma-tooltip'

export function ToolTip({...props}) {
	return (
		<span
			data-tooltip={props.text}
			className={`tooltip 
				${props.isPosition && "is-tooltip-"+props.isPosition}
				${props.isPositionMobile && "is-tooltip-"+props.isPosition+"-mobile"}
				${props.isPositionTabletOnly && "is-tooltip-"+props.isPosition+"-tablet-only"}
				${props.isPositionDesktopOnly && "is-tooltip-"+props.isPosition+"-desktop-only"}
				${props.isPositionWidescreenOnly && "is-tooltip-"+props.isPosition+"-widescreen-only"}
				${props.isPositionTouch && "is-tooltip-"+props.isPosition+"-touch"}
				${props.isPositionTablet && "is-tooltip-"+props.isPosition+"-tablet"}
				${props.isPositionDesktop && "is-tooltip-"+props.isPosition+"-desktop"}
				${props.isPositionWidescreen && "is-tooltip-"+props.isPosition+"-widescreen"}
				${props.isPositionFullhd && "is-tooltip-"+props.isPosition+"-fullhd"}
				${props.className}
				${props.isMultiline && "is-tooltip-multiline"}
				${props.isColor && "is-tooltip-"+props.isColor}
				${props.isActive && "is-tooltip-active"}
				`}>
			{ props.children }
		</span>
	)
}