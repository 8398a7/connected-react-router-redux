import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

interface InterfaceWithRouterReducer {
  dispatch: Dispatch;
}

export const withRouterReducer = compose(
  connect<{}, InterfaceWithRouterReducer>(null, (dispatch: Dispatch): InterfaceWithRouterReducer => ({ dispatch })),
  (Component: React.ComponentClass<any, any>) => class extends React.Component<InterfaceWithRouterReducer, {}> {
    public componentDidMount = () => this.props.dispatch(push(window.location.pathname + window.location.search));
    public render = () => <Component {...this.props} />;
  },
);
