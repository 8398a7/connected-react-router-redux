# Connected React Router Redux

It's a HoC that updates the reducer when using connected-react-router.<br />
HoC implementation using [How to navigate with Redux action](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action) with store.dispatch.


## Installation

Using [npm](https://www.npmjs.com/):
```bash
$ npm install --save connected-react-router-redux
```
Or [yarn](https://yarnpkg.com/):
```bash
$ yarn add connected-react-router-redux
```

## Usage

```javascript
import { withRouterReducer } from 'connected-react-router-redux';
...

class AppComponent extends React.Component {
  ...
}
...
export default withRouterReducer(AppComponent);
```

#### connect(react-redux) usage.

```javascript
...
import { withRouterReducer } from 'connected-react-router-redux';
...

class AppComponent extends React.Component {
  ...
}
...
export default withRouterReducer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppComponent)
);
```

### TypeScript

```typescript
import { withRouterReducer } from 'connected-react-router-redux';
...

class AppComponent extends React.Component<AppComponentProps, {}> {
  ...
}
...
export default withRouterReducer(AppComponent);
```

#### connect(react-redux) usage.

```typescript
...
import { withRouterReducer } from 'connected-react-router-redux';
...

class AppComponent extends React.Component<AppComponentProps, {}> {
  ...
}
...
export default withRouterReducer(
  connect<MapStateToProps, MapDispatchToProps, React.ComponentClass<AppComponentProps>>(
    mapStateToProps,
    mapDispatchToProps,
  )(AppComponent)
);
```
