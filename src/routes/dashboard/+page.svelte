<script>
	import { onMount } from 'svelte';
    import { API_URL } from '$lib/env.js';

	/**
	 * @type {string | any[]}
	 */
	let events = [];
	/**
	 * @type {string | any[]}
	 */
	let user = [];

	async function loadData() {
		const eventRequest = await fetch(API_URL + '/events', { credentials: 'include' });
		const userEventRequest = await fetch(API_URL + '/users?full=true', {
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
        <div class="row">
            <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
            <div id="map"></div>
        </div>
	</div>
</div>
