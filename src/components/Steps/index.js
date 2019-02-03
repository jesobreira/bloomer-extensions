import React, { Component } from 'react'
import 'bulma-steps/dist/css/bulma-steps.min.css'

export function Steps({...props}) {
	return <div className={`steps ${props.isSize && "is-"+props.isSize}`}>{props.children}</div>
}

export function StepItem({...props}) {
	return <div className={`step-item ${props.isCompleted && "is-completed"} ${props.isActive && "is-active"} ${props.isColor && "is-"+props.isColor}`}>{props.children}</div>
} 

export function StepMarker({...props}) {
	return <div className="step-marker">{props.children}</div>
}

export function StepDetails({...props}) {
	return <div className="step-details">{props.children}</div>
}

export function StepTitle({...props}) {
	return <div className="step-title">{props.children}</div>
}