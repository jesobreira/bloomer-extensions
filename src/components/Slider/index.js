import React, { Component } from 'react'
import 'bulma-slider/dist/css/bulma-slider.min.css'

export function Slider({...props}) {
	return (
		<input className={`slider
			${props.isColor && "is-"+props.isColor}
			${props.isSize && "is-"+props.isSize}
			${props.isCircle && "is-circle"}
			${props.isFullwidth && "is-fullwidth"}
			`}
		step={props.step || 1}
		min={props.min || 0}
		max={props.max || 100}
		value={props.value || 50}
		type="range"
		disabled={props.disabled}
		onChange={props.onChange}
		orient={props.orient || "horizontal"}
		/>
	)
}