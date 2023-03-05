<script>
	import { onMount } from 'svelte';

	/**
	 * @type {string | any[]}
	 */
	let events = [];
	/**
	 * @type {string | any[]}
	 */
	let user = [];

	async function loadData() {
		const eventRequest = await fetch('http://localhost:8000/events', { credentials: 'include' });
		const userEventRequest = await fetch('http://localhost:8000/users?full=true', {
			credentials: 'include'
		});
		const tst = await userEventRequest.json();
		user = [tst];
		events = await eventRequest.json();
		console.log(events);
	}

	onMount(loadData);
</script>

<div class="container">
	<div class="container">
		<div class="row">
			<div class="col">
				{#if user[0]}
					<div
						class="rounded border border-secondary"
						style="background-color: transparent; padding: 5px; margin: 10px"
					>
						<h1>
							{user[0].name}
						</h1>
						<h3>
							{user[0].username}
						</h3>
						<h5>Edit Profile</h5>
					</div>
				{/if}

				{#if user[0]}
					<div
						class="rounded border border-secondary"
						style="background-color: transparent; padding: 5px; margin: 10px"
					>
						<h1>Current Commitments!</h1>

						{#each user[0].currentCommitments as event}
							<h3>{event.name}</h3>
							<h5>{event.location.address}</h5>
							<p>{event.description}</p>
						{/each}
					</div>
				{/if}
			</div>
			<div class="col">
				{#if user[0]}
					<div
						class="rounded border border-secondary"
						style="background-color: transparent; padding: 5px; margin: 10px"
					>
						<h1>Groups!</h1>

						{#each user[0].groupList as group}
							<h3>{group.name}</h3>
							<h5>{group.leader}</h5>
							<p>{group.description}</p>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
