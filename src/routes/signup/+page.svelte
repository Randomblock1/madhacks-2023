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
	<input type="radio" name="option" value="option1" id="option1" checked /> Volunteer

	<input type="radio" name="option" value="option2" id="option2" /> Organization seeking Volunteer

	<div id="display1" style="display:none;">
		Element 1
		<form action="process_signup_volunteer" method = "post">
			<label for="name">Enter name: </label>
			<input type="text" id="name" name="name" /><br /><br />

			<label for="email">Enter email: </label>
			<input type="text" id="email" name="email" /><br /><br />

			<label for="address">Enter Adress: </label>
			<input type="text" id="address" name="address" /><br /><br />

			<label for="password">Create password: </label>
			<input type="text" id="password" name="password" /><br /><br />

			<label for="password">Enter phone number: </label>
			<p><small>(Optional)</small></p>
			<input type="text" id="password" name="password" /><br /><br />

			<input type="submit" value="Submit" />
		</form>
	</div>

	<div id="display2" style="display:none;">
		<form action="process_signup_volunteer" method = "post">
			<label for="name">Enter organization: </label>
			<input type="text" id="name" name="name" /><br /><br />

			<label for="email">Enter email: </label>
			<input type="text" id="email" name="email" /><br /><br />

			<label for="address">Enter website: </label>
			<p><small>(Optional)</small></p>
			<input type="text" id="address" name="address" /><br /><br />

			<label for="password">Create password: </label>
			<input type="text" id="password" name="password" /><br /><br />

			<label for="password">Enter phone number: </label>
			<p><small>(Optional)</small></p>
			<input type="text" id="password" name="password" /><br /><br />
            
			<input type="submit" value="Submit" />
		</form>
	</div>
</div>
