import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export default function LoadingBox() {
	return (
		<div className="sending">
			<FontAwesomeIcon icon={faSpinner} spin="true"></FontAwesomeIcon>
			Sending...
		</div>
	);
}
