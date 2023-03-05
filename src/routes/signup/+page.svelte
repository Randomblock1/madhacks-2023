<div class="container h-100 d-flex align-items-center justify-content-center">
	<span class="rounded-box">
		<h1 class="font-styled">Sign Up</h1>
		<form action="{API_URL}/register" method="post">
			<div class="row align-items-start p-2">
				<div class="col">
					<p>Account Type:</p>
				</div>

				<div class="col">
					<input type="radio" name="isOrg" value="volunteer" id="volunteer" checked /> Volunteer
				</div>

				<div class="col">
					<input type="radio" name="isOrg" value="organization" id="organization" /> Organization
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label for="name">Enter your name: </label>
				</div>

				<div class="col">
					<input type="text" id="name" name="name" placeholder="John Doe" />
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label for="email">Enter your email: </label>
				</div>

				<div class="col">
					<input type="email" id="email" name="username" placeholder="email@example.com" />
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label for="address">Enter your address: </label>
				</div>

				<div class="col">
					<input type="text" id="address" name="address" placeholder="123 Real Steet, City, OH" />
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label for="password">Enter a password: </label>
				</div>

				<div class="col">
					<input type="password" id="password" name="password" placeholder="**********" />
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label for="phone">Enter your phone number: </label>
					<p><small><i>(Optional)</i></small></p>
				</div>

				<div class="col">
					<input type="tel" id="phone" name="phone" placeholder="123-456-7890" />
				</div>
			</div>

			<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit"  />
			<!--on:click={handleClick}
			<div>{status}</div>-->
		</form>
	</span>
</div>

<script>
	import { API_URL } from '$lib/env.js';
/*
let status = '';

const handleClick = async () => {
	const sgMail = require('@sendgrid/mail')
	//sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
  	to: 'test@example.com', // Change to your recipient
  	from: 'test@example.com', // Change to your verified sender
  	subject: 'Sending with SendGrid is Fun',
	text: 'and easy to do anywhere, even with Node.js',
  	html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
}*/
</script>
