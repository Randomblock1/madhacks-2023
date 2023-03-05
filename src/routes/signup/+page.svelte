<div class="container h-100 d-flex align-items-center justify-content-center">
	<span class="rounded-box">
		<h1 class="font-styled">Sign Up</h1>
		<form action="/api/signup" method="post">
			<div class="row align-items-start p-2">
				<div class="col">
					<p>Account Type:</p>
				</div>

				<div class="col">
					<input type="radio" name="type" value="volunteer" id="volunteer" checked /> Volunteer
				</div>

				<div class="col">
					<input type="radio" name="type" value="organization" id="organization" /> Organization
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
					<input type="email" id="email" name="email" placeholder="email@example.com" />
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

			<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
		</form>
	</span>
</div>
