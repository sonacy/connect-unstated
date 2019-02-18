# connect-unstated

> connect hoc for unstated

## Installation

```sh
yarn add connect-unstated
```

## Guide

> connect(container args)(mapContainersToProps)(App)

### Examples

### HOC

```js
const mapContainersToProps = (
  connA: ContainerA,
  connB: ContainerB,
  ownProps: IProps
) => ({
  update: connA.update,
  get: connA.get,
  list: connA.list,
  check: connB.check
  id: ownProps.match.params.id,
})

export default connect(
  ContainerA,
  ContainerB
)(mapContainersToProps)(App)
```
