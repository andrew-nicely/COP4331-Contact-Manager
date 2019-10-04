import React from 'react';

const SignOutButton = ({onRouteChange, text}) => {
	return(
		<p onClick={() => onRouteChange('testsignout')}className="f6 link dim black db pointer">{text}</p>
	)
}

export default SignOutButton;