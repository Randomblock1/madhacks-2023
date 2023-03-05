<script>
	import { onMount } from 'svelte';

	/**
	 * @type {string | any[]}
	 */
	let events = [];

	async function loadEvents() {
		const eventRequest = await fetch('http://localhost:8000/events', { credentials: 'include' });
		const userEventRequest = await fetch('http://localhost:8000/users', { credentials: 'include' });
		events = await eventRequest.json();
		const userEvents = (await userEventRequest.json())['currentCommitments'];
		for (let i = 0; i < events.length; i++) {
			events[i]['isRegistered'] = userEvents.includes(events[i]['_id']);
		}
		console.log(events);
		console.log(userEvents);
	}

	onMount(loadEvents);

	/**
	 * @param {{ [x: string]: boolean; }} event
	 */
	function determineStyle(event) {
		const event_id = event['_id'];
		if (event['isRegistered'] == true) {
			return 'btn-danger';
		}
		return 'btn-success';
	}

	/**
	 * @param {{ [x: string]: boolean; }} event
	 */
	function determineText(event) {
		const event_id = event['_id'];
		if (event['isRegistered'] == true) {
			return 'Unregister';
		}
		return 'Register';
	}
</script>

<div class="container">
	<h1>Events</h1>
	{#each events as event}
		<div class="rounded-box m-2" style="width: 50%">
			<h2>{event['name'] || 'Undefined Name'}</h2>
			<h3>{(event['org'] || 'Undefined Org')['name'] || 'Undefined Org Name'}</h3>
			<p>{(event['location'] || 'Undefined Location')['address'] || 'Undefined Address'}</p>
			<p>{event['time'] || 'Undefined Time'}</p>
			<p>{event['description'] || 'Undefined Description'}</p>
			<p>
				Volunteers: {event['numVolunteersCurrently'] || 'Unknown'} out of {event[
					'numVolunteersNeeded'
				] || 'Unknown'}
			</p>
			<button class="btn {determineStyle(event)} font-styled rounded-pill p-2"
				>{determineText(event)}</button
			>
		</div>
		<br />
	{/each}
</div>
