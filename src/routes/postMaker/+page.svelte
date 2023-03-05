<div class="container">
    <div class="container h-100 d-flex align-items-center justify-content-center">
        <span class="rounded-box">
            <h1 class="font-styled">Create Volunteer Event</h1>
            <form action="/api/signup" method="post">
    
                <div class="row p-2">
                    <div class="col">
                        <label for="name">Enter name of event: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="text" id="name" name="name" placeholder="Event name" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="time">Enter event start time: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="time" id="timeStart" name="start" placeholder=""/>
                    </div>
                </div>

                <div class="row p-2">
                    <div class="col">
                        <label for="timeEnd">Enter event end time: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="time" id="timeEnd" name="end" placeholder=""/>
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="address">Enter address of event: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="text" id="address" name="address" placeholder="123 Real Steet, City, OH" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="volunteerNum">Enter volunteers needed: </label>
                    </div>
    
                    <div class="col">
                        <input class = "smallText sendRight" type="number" id="volunteerNum" name="numVolunteersNeeded" placeholder="" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="descriptions">Enter description ef event: </label>
                        <p><small><i>(Optional)</i></small></p>
                    </div>
    
                    <div class="col">
                        <textarea  class = "largeText sendRight" id="descriptions" name="description" placeholder="" />
                    </div>
                </div>
    
                <input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
            </form>
        </span>
    </div>
    

    
</div>