<div class="container h-100 d-flex align-items-center justify-content-center">
	<span class="rounded-box">
		<h1 class="font-styled">Sign Up</h1>
		<form action="/api/signup" method="post">
			<p>
				Account Type:
				<input type="radio" name="type" value="volunteer" id="volunteer" checked /> Volunteer
				<input type="radio" name="type" value="organization" id="organization" /> Organization
			</p>

			<label for="name">Enter your name: </label>
			<input type="text" id="name" name="name" /><br /><br />

			<label for="email">Enter your email: </label>
			<input type="email" id="email" name="email" /><br /><br />

			<label for="address">Enter your address: </label>
			<input type="text" id="address" name="address" /><br /><br />

			<label for="password">Enter a password: </label>
			<input type="password" id="password" name="password" /><br /><br />

			<label for="phone">Enter your phone number: </label>
			<p><small>(Optional)</small></p>
			<input type="tel" id="phone" name="phone" /><br /><br />

			<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
		</form>
	</span>
</div>
