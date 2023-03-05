<div class="container h-100 d-flex align-items-center justify-content-center">
	<span class="rounded-box">
		<h1 class="font-styled">Login</h1>
		<form action="process_login" method="post">
			<label class="font-styled" style="padding-right: 37px" for="email"> Email: </label>
			<input
				class="rounded-2"
				type="email"
				id="email"
				name="email"
				placeholder="Input your email here"
			/>
			<div class="form-group pt-2">
				<label class="font-styled" for="password">Password: </label>
				<input
					class="rounded-2"
					type="password"
					id="password"
					name="password"
					placeholder="Input your password here"
				/>
			</div>
			<div class="form-group pt-3">
				<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
			</div>
		</form>
	</span>
</div>
