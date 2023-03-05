<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const option1 = document.getElementById('option1');
		const option2 = document.getElementById('option2');

		const display1 = document.getElementById('display1');
		const display2 = document.getElementById('display2');

		if (option1 && display1 && display2) {
			display1.style.display = 'block';
			option1.addEventListener('change', function () {
				// Check if the radio button is checked
				console.log('orireo');
				display1.style.display = 'block';
				display2.style.display = 'none';
			});
		}

		if (option2 && display1 && display2) {
			option2.addEventListener('change', function () {
				// Check if the radio button is checked
				console.log('ofsreo');
				// The radio button is checked
				display1.style.display = 'none';
				display2.style.display = 'block';
			});
		}
	});
</script>

<div class="container">
	<div class="position-absolute top-40 start-55">
		
		<input class="font-styled" type="radio" name="option" value="option1" id="option1" checked /> Volunteer

		<input class="font-styled" type="radio" name="option" value="option2" id="option2" /> Organization seeking Volunteer

		<div id="display1" style="display:none; padding-top: 10px;">
		<span class="rounded-box">
			<form action="process_signup_volunteer" method="post">
				<label class="font-styled" for="name">Enter name: </label>
				<input type="text" id="name" name="name" /><br /><br />

				<label class="font-styled" for="email">Enter email: </label>
				<input type="text" id="email" name="email" /><br /><br />

				<label class="font-styled" for="address">Enter address: </label>
				<input type="text" id="address" name="address" /><br /><br />

				<label class="font-styled" for="password">Create password: </label>
				<input type="text" id="password" name="password" /><br /><br />

				<label class="font-styled" for="password">Enter phone number: </label>
				
				<input class="font-styled" type="text" id="password" name="password" >
				<p><small>(Optional)</small></p>

				<input  class="font-styled rounded-pill float-right" type="submit" value="Submit" />
			</form>
		</span>
		</div>

		<div id="display2" style="display:none; padding-top: 10px;">
			<span class="rounded-box">
			<form action="process_signup_volunteer" method="post">
				<label class="font-styled" for="name">Enter organization: </label>
				<input type="text" id="name" name="name" /><br /><br />

				<label class="font-styled" for="email">Enter email: </label>
				<input type="text" id="email" name="email" /><br /><br />

				<label class="font-styled" for="address">Enter website: </label>
				
				<input type="text" id="address" name="address">
				<p><small>(Optional)</small></p>

				<label class="font-styled" for="password">Create password: </label>
				<input type="text" id="password" name="password" /><br /><br />

				<label class="font-styled" for="password">Enter phone number: </label>
				
				<input class="font-styled" type="text" id="password" name="password">
				<p><small>(Optional)</small></p>

				<input  class="font-styled rounded-pill float-right" type="submit" value="Submit" />
			</form>
		</span>
		</div>
	</div>
</div>
