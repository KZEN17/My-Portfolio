import React from 'react';
import Tittle from '../Components/Tittle';
import emailjs from 'emailjs-com';
function ContactPage() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_i9cv5rq',
				'template_3ssodgw',
				e.target,
				'user_V6snipPpYP4SS1Dr0uAd9'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	return (
		<div>
			<div className="title">
				<Tittle title={'Contact Me'} span={'Contact Me'} />
			</div>

			<div className="map-sect">
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
						<button className="primary" type="submit" value="Send">
							Send
						</button>
					</div>
				</form>
			</div>
			{/* <div className="ContactPage">
				<div className="contact-sect">
					<div className="ContactItem">
						<div className="contact">
							<img src={phone} alt="" />
							<div className="right-items">
								<h6>Address</h6>
								<p>Brgy. Calayo, Nasugbu, Batangas, Philippines</p>
								<h6>Email</h6>
								<p>zlatko@zlatkonikoloski.com</p>
								<h6>Phone</h6>
								<p>+63 998 4279031</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default ContactPage;
