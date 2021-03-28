import React from 'react';

export default function MessageBox(props) {
	return <div className="alert">{props.children}</div>;
}
