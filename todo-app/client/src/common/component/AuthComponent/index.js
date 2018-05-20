import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let token = localStorage.getItem('token');

export default function AuthComponent({component: WrapperComponent, ...rest}) {
	return (
		<Route
			{...rest}
			render={props =>
			token ? (
				<WrapperComponent {...props} />
			) : (
			<Redirect
			  to={{
			    pathname: "/login"
			  }}
			/>
			)
			}
		/>
	);
}