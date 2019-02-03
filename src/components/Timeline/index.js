import React, { Component } from 'react'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'

export function Timeline({...props}) {
	return <div className={`timeline ${props.isCentered && "is-centered"} ${props.isRtl && "is-rtl"}`}>{props.children}</div>
}

export function TimelineHeader({...props}) {
	return <header className="timeline-header">{props.children}</header>
}

export function TimelineItem({...props}) {
	return <div className="timeline-item">{props.children}</div>
}

export function TimelineMarker({...props}) {
	return <div className={`timeline-marker ${props.isIcon && "is-icon"} ${props.isImage && "is-image"} ${props.isSize && "is-"+props.isSize} ${props.isColor && "is-"+props.isColor}`}>{props.children}</div>
}

export function TimelineContent({...props}) {
	return <div className="timeline-content">{props.children}</div>
}
