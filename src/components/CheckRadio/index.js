import React, { Component } from 'react'
import 'bulma-checkradio'

export function CheckRadio({...props}) {
	return (
		<div class="field">
		  <input
		  		id={props.id}
		  		type={props.type || "checkbox"}
		  		name={props.name}
		  		checked={props.checked}
		  		value={props.value}
		  		onChange={props.onChange}
		  		disabled={props.disabled}
		  		className={`is-checkradio
		  			${props.isColor && "is-"+props.isColor}
					${props.isSize && "is-"+props.isSize}
					${props.isRtl && "is-rtl"}
					${props.isCircle && "is-circle"}
					${props.isBlock && "is-block"}
					${props.hasNoBorder && "has-no-border"}
					${props.hasBackgroundColor && "has-background-color"}
		  			`}
		  		 />
		  <label htmlFor={props.id}>{props.children}</label>
		</div>
	)
}