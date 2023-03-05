<script>
	import { ensureLogin } from '$lib/ensureLogin';
	import { onMount } from 'svelte';

	import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
	import { API_URL } from '$lib/env';

	/**
	 * @type {any}
	 */
	let startTime;
	/**
	 * @type {any}
	 */
	let endTime;


    /**
	 * @type {string}
	 */
    let org_id;

    async function getUserData() {
        ensureLogin();
    const userAuthData = await fetch(API_URL + '/', { credentials: 'include' });
    org_id = (await userAuthData.json())['id'];
}

	onMount(getUserData);
</script>

<div class="container">
	<div class="container h-100 d-flex align-items-center justify-content-center">
		<span class="rounded-box">
			<h1 class="font-styled">Create Volunteer Event</h1>
			<form action="{API_URL}/events" method="post">
				<div class="row p-2">
					<div class="col">
						<label for="name">Enter name of event: </label>
					</div>

					<div class="col">
						<input class="sendRight" type="text" id="name" name="name" placeholder="Event name" />
					</div>
				</div>

				<div class="row p-2">
					<div class="col">
						<label for="time">Enter event start time: </label>
					</div>

					<div class="col">
						<DatePicker
							selected={false}
							time={true}
							on:date-selected={(e) => (startTime = e.detail)}
						/>
						<input
							class="sendRight"
							type="text"
							id="timeStart"
							name="timeStart"
							value={(startTime || '')['date'] || ''}
						/>
					</div>
				</div>

				<div class="row p-2">
					<div class="col">
						<label for="timeEnd">Enter event end time: </label>
					</div>

					<div class="col">
						<DatePicker
							selected={false}
							time={true}
							on:date-selected={(e) => (endTime = e.detail)}
						/>
						<input
							class="sendRight"
							type="text"
							id="timeEnd"
							name="timeEnd"
							value={(endTime || '')['date'] || ''}
						/>
					</div>
				</div>

				<div class="row p-2">
					<div class="col">
						<label for="address">Enter address of event: </label>
					</div>

					<div class="col">
						<input
							class="sendRight"
							type="text"
							id="address"
							name="address"
							placeholder="123 Real Steet, City, OH"
						/>
					</div>
				</div>

				<div class="row p-2">
					<div class="col">
						<label for="volunteerNum">Enter volunteers needed: </label>
					</div>

					<div class="col">
						<input
							class="smallText sendRight"
							type="number"
							id="volunteerNum"
							name="numVolunteersNeeded"
							name="numVolunteersNeeded"
							placeholder=""
						/>
					</div>
				</div>

				<div class="row p-2">
					<div class="col">
						<label for="description">Enter description ef event: </label>
						<p><small><i>(Optional)</i></small></p>
					</div>

					<div class="col">
						<textarea
							class="largeText sendRight"
							id="description"
							name="description"
							placeholder=""
						/>
					</div>
				</div>

                <input type="hidden" name="org" value={org_id} />

				<input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
			</form>
		</span>
	</div>
</div>
