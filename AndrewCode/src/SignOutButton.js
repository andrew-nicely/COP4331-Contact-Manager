import React from 'react';

const SignOutButton = ({onRouteChange, text}) => {
	return(
		<p onClick={() => onRouteChange('testsignout')}className="f6 link dim br3 ba ph2 pv2 db black pointer light-gray">{text}</p>
	)
}

export default SignOutButton;

//bw2 br3 b--black f6 link dim black db pointer