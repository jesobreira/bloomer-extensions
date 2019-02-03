import React, { Component } from 'react'
import 'bulma-quickview/dist/css/bulma-quickview.min.css'

export function QuickView({...props}) {
	return <div className={`quickview ${props.isActive && "is-active"}`}>{props.children}</div>
}

export function QuickViewHeader({...props}) {
	return <div class="quickview-header">{props.children}</div>
}

export function QuickViewBody({...props}) {
	return <div class="quickview-body">{props.children}</div>
}

export function QuickViewBlock({...props}) {
	return <div class="quickview-block">{props.children}</div>
}

export function QuickViewFooter({...props}) {
	return <div class="quickview-footer">{props.children}</div>
}