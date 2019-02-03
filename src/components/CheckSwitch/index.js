import React, { Component } from 'react'
import 'bulma-switch'

export function CheckSwitch({...props}) {
	return (
		<div class="field">
		  <input
		  		id={props.id}
		  		type="checkbox"
		  		name={props.name}
		  		checked={props.checked}
		  		value={props.value}
		  		disabled={props.disabled}
		  		className={`switch
		  			${props.isColor && "is-"+props.isColor}
					${props.isSize && "is-"+props.isSize}
					${props.isRtl && "is-rtl"}
					${props.isThin && "is-thin"}
					${props.isRounded && "is-rounded"}
					${props.isOutlined && "is-outlined"}
		  			`}
		  		 />
		  	<label 
		  		onClick={props.onClick}
		  		htmlFor={props.id}>
		  		{props.children}
		  	</label>
		</div>
	)
}