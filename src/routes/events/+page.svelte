<script>
	import { onMount } from 'svelte';
	import { API_URL } from '$lib/env.js';
	import { ensureLogin } from '$lib/ensureLogin';

	/**
	 * @type {string | any[]}
	 */
	let events = [];

	async function loadEvents() {
		const eventRequest = await fetch(API_URL + '/events', { credentials: 'include' });
		const userEventRequest = await fetch(API_URL + '/user', { credentials: 'include' });
		events = await eventRequest.json();
		const userEvents = (await userEventRequest.json())['currentCommitments'];
		for (let i = 0; i < events.length; i++) {
			events[i]['isRegistered'] = userEvents.includes(events[i]['_id']);
			events[i]['buttonStyle'] = determineStyle(events[i]);
			events[i]['buttonText'] = determineText(events[i]);
			events[i]['distance'] = calcDist(events[i].location.lat, events[i].location.lon, userEvents.location.lat, userEvents.location.lon, "N");
		}
		console.log(events);
		console.log(userEvents);
	}

	onMount(loadEvents);
	onMount(ensureLogin);

	/**
	 * @param {{ [x: string]: boolean; }} event
	 */
	function determineStyle(event) {
		const event_id = event['_id'];
		if (event['isRegistered'] == true) {
			return 'btn-outline-danger';
		}
		return 'btn-outline-success';
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

	/**
	 * @param {{ [x: string]: any; numVolunteersCurrently: any; isRegistered: any; }} event
	 */
	function modifyRegistration(event) {
		const event_id = event['_id'];
		const event_url = API_URL + '/events/' + event_id;
		if (event['isRegistered'] == true) {
			fetch(event_url + '/unregister', {
				method: 'PATCH',
				credentials: 'include'
			});
			event.numVolunteersCurrently -= 1;
		} else {
			fetch(event_url + '/register', {
				method: 'PATCH',
				credentials: 'include'
			});
			event.numVolunteersCurrently += 1;
		}
		event.isRegistered = !event.isRegistered;
		// Determine the new button style and text
		const newButtonStyle = determineStyle(event);
		const newButtonText = determineText(event);

		// Update the button style and text
		event['buttonStyle'] = newButtonStyle;
		event['buttonText'] = newButtonText;

		events = events;
	}

	 /**
	 * @param {number} lat1
	 * @param {number} lon1
	 * @param {number} lat2
	 * @param {number} lon2
	 * @param {string} unit
	 */
	 function calcDist(lat1, lon1, lat2, lon2, unit) {
		
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

</script>

<div class="container">
	<h1 class="font-styled">Events</h1>
	{#if events == ''}
		<h2 class="font-styled">Loading events...</h2>
	{/if}
	{#each events as event}
		<div class="rounded-box m-2" style="width: 50%">
			<h2>{event['name'] || 'Undefined Name'}</h2>
			<h3>{(event['org'] || 'Undefined Org')['name'] || 'Undefined Org Name'}</h3>
			<p>{(event['location'] || 'Undefined Location')['address'] || 'Undefined Address'}</p>
			<p>
				{Intl.DateTimeFormat(navigator.language, {
					weekday: 'long',
					month: 'short',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric'
				}).format(new Date(event['time']))}
			</p>
			<p>{event['description'] || 'Undefined Description'}</p>
			<p>
				Volunteers: {event['numVolunteersCurrently'] || 'Unknown'} out of {event[
					'numVolunteersNeeded'
				] || 'Unknown'}
			</p>
			<p>
				Distance away: {event['distance'] || "Unknown"}
			</p>
			<button
				on:click={() => modifyRegistration(event)}
				class="btn {event.buttonStyle} font-styled rounded-pill p-2">{event.buttonText}</button
			>
		</div>
		<br />
	{/each}
</div>
