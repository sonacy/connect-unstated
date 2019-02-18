import { connect } from 'connected-unstated'
import React, { PureComponent } from 'react'
import CounterContainer from './counterContainer'

interface IProps extends ReturnType<typeof mapContainersToProps> {}

class Counter extends PureComponent<IProps> {
	render() {
		const { count, add, minus } = this.props
		return (
			<div>
				<button onClick={minus}>-</button>
				<span>{count}</span>
				<button onClick={add}>+</button>
			</div>
		)
	}
}

const mapContainersToProps = (counter: CounterContainer, ownProps: any) => ({
	add: counter.increment,
	count: counter.state.count,
	minus: counter.decrement,
})

export default connect(CounterContainer)(mapContainersToProps)(Counter)
