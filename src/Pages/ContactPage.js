import React, { useState } from 'react';
import Tittle from '../Components/Tittle';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faMapMarkerAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';
import { motion } from 'framer-motion';

function ContactPage() {
	const [isSent, setIsSent] = useState(false);
	const [isSending, setIsSending] = useState(false);
	function sendEmail(e) {
		e.preventDefault();
		setIsSending(true);
		emailjs
			.sendForm(
				'service_i9cv5rq',
				'template_3ssodgw',
				e.target,
				'user_V6snipPpYP4SS1Dr0uAd9'
			)
			.then(
				(result) => {
					if (result.text === 'OK') {
						setIsSent(true);
						setIsSending(false);
					}
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}
	const pageTransition = {
		type: 'tween',
		ease: 'linear',
		duration: 2,
	};
	const pageVariants = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	return (
		<motion.div
			initial="out"
			exit="out"
			animate="in"
			transition={pageTransition}
			variants={pageVariants}
		>
			<div className="title">
				<Tittle title={'Contact Me'} span={'Contact Me'} />
			</div>
			<div className="map-sect">
				{isSent ? (
					<MessageBox>Message Sent Successfuly!</MessageBox>
				) : (
					<form className="form" onSubmit={sendEmail}>
						<div>
							{/* <input type="hidden" name="contact_number" /> */}
							<label>Name</label>
							<input type="text" name="user_name" required />
						</div>
						<div>
							<label>Email</label>
							<input type="email" name="user_email" required />
						</div>
						<div>
							{' '}
							<label>Message</label>
							<textarea rows="5" name="message" required />
						</div>
						<div>
							{isSending ? (
								<LoadingBox></LoadingBox>
							) : (
								<button className="primary" type="submit" value="Send">
									Send
								</button>
							)}
						</div>
					</form>
				)}

				<div className="ContactPage">
					<div className="contact-sect">
						<div className="ContactItem">
							<div className="contact">
								<div className="right-items">
									<ul>
										<li>
											{' '}
											<div>
												<h6>Address</h6>
												<p>
													<FontAwesomeIcon
														className="icon-fa"
														icon={faMapMarkerAlt}
													></FontAwesomeIcon>
													Brgy. Calayo, Nasugbu, Batangas, Philippines
												</p>
											</div>
										</li>
										<li>
											{' '}
											<div>
												<h6>Email</h6>
												<p>
													<FontAwesomeIcon
														className="icon-fa"
														icon={faEnvelope}
													></FontAwesomeIcon>
													zlatko@zlatkonikoloski.com
												</p>
											</div>
										</li>
										<li>
											<div>
												<h6>Phone</h6>
												<p>
													<FontAwesomeIcon
														className="icon-fa"
														icon={faPhoneAlt}
													></FontAwesomeIcon>
													+63 998 4279031
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactPage;
