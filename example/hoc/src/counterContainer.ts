import { Container } from 'unstated'

interface IState {
	count: number
}

export default class CounterContainer extends Container<IState> {
	state = {
		count: 0,
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 })
	}

	decrement = () => {
		this.setState({ count: this.state.count - 1 })
	}
}
