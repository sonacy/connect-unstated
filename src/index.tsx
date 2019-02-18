import { ReactComponentLike } from 'prop-types'
import React from 'react'
import { Subscribe } from 'unstated'

type MapFunc = (...args: any[]) => {}

export const connect = (...args: any[]) => (getFromContainer: MapFunc) => (
	Component: ReactComponentLike
) => (props: any) => (
	<Subscribe to={args}>
		{(...conns) => {
			const state = getFromContainer(...conns, props)

			return <Component {...state} />
		}}
	</Subscribe>
)
