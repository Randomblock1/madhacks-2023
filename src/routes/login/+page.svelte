<div class="container h-100 d-flex align-items-center justify-content-center">
	<span class="rounded-box">
		<h1 class="font-styled">Login</h1>
		<form action="process_login" method="post">
			<div class="row align-items-start p-2">
				<div class="col">
					<label class="font-styled" style="padding-right: 37px" for="email"> Email: </label>
				</div>

				<div class="col">
					<input
						class="rounded-2"
						type="email"
						id="email"
						name="email"
						placeholder="email@example.com"
					/>
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<label class="font-styled" for="password">Password: </label>
				</div>

				<div class="col">
					<input
						class="rounded-2"
						type="password"
						id="password"
						name="password"
						placeholder="**********"
					/>
				</div>
			</div>

			<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
		</form>
	</span>
</div>
