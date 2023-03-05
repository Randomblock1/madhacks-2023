<div class="container">
	<form action="process_login" method="post">
		<div class="position-absolute top-50 start-50 translate-middle">
			<span class="rounded-box">
				<label class="font-styled" style="padding-right: 37px" for="email"> Email: </label>
				<input
					class="rounded-2 float-left"
					type="text"
					id="email"
					name="email"
					placeholder="Input your email here"
				/>
				<div class="form-group pt-2">
					<label class="font-styled" for="password">Password: </label>
					<input
						class="rounded-2"
						type="text"
						id="password"
						name="password"
						placeholder="Input your password here"
					/>
				</div>
				<div class="form-group pt-3">
					<input class="font-styled rounded-pill float-right" type="submit" value="Submit" />
				</div>
			</span>
		</div>
	</form>
</div>
