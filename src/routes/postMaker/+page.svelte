<div class="container">

    <div class="container h-100 d-flex align-items-center justify-content-center">
        <span class="rounded-box">
            <h1 class="font-styled">Create Volunteer Event</h1>
            <form action="http://localhost:8000/events" method="post">
    
                <div class="row p-2">
                    <div class="col">
                        <label for="name">Enter name of event: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="string" id="name" name="name" placeholder="Event name" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="time">Enter event start time: </label>
                    </div>
    
                    <div class="col">
                        <input class = "sendRight" type="time" id="start" name="start" placeholder=""/>
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
                        <input class = "sendRight" type="string" id="location" name="address" placeholder="123 Real Steet, City, OH" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="volunteerNum">Enter volunteers needed: </label>
                    </div>
    
                    <div class="col">
                        <input class = "smallText sendRight" type="Number" id="numVolunteersNeeded" name="numVolunteersNeeded" placeholder="" />
                    </div>
                </div>
    
                <div class="row p-2">
                    <div class="col">
                        <label for="description">Enter description ef event: </label>
                        <p><small><i>(Optional)</i></small></p>
                    </div>
    
                    <div class="col">
                        
                        <input  class = "largeText sendRight" id="description" name="description" />
                        
                    </div>
                </div>
    
                <input class="btn btn-success font-styled rounded-pill" type="submit" value="Submit" />
            </form>
        </span>
    </div>
    

    
</div>