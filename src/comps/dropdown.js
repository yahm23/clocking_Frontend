import React, { useState , useEffect, setErrors } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';


export const DropdownStaff = ()=>{
    var [allStaff,setStaff] = useState('');
    var [specificStaff,setSpecificStaff] = useState([]);

    async function fetchData() {
        await fetch("http://localhost:4000/api/staff")
        .then(response => response.json())
        .then(response => {
            setStaff(response);            
        })
        
        .catch(err => {
            setErrors(err)
            console.log("ERRRORRR");
            
        });
    }
    
    useEffect(() => {
    fetchData();
    return () => {
        console.log('unmounting...') 
    }
    },[]);


    const handleChange = (event) => {
        let ID = event;
        setSpecificStaff(allStaff.find(staff=>(staff._id===ID)))
       
    }

    const handleClick = ()=>{ 
        if(specificStaff.dates){
            // Lets first check a staff member has been selected from the drop down list,
            // if not we'll hit the alert at the bottom of the code block alerting us to 
            // do that. 
          
            var updatedPerson= specificStaff; // Setting new variable as the selected person
            var currentTimeDate= new Date(); // Recording the current date & time
            
            // Below we're extracting specifics from the date object
            var month = currentTimeDate.getMonth() + 1; // Months run from 0-11 in Date(), so +1 to compensate
            var day = currentTimeDate.getDate()
            var year = currentTimeDate.getFullYear()
      
            var hour = currentTimeDate.getHours()
            var mins = currentTimeDate.getMinutes()
            
            // Without the conditional below, if it was 5 minutes past 1, instead of getting '1:05'
            // we'd get '1:5', which is very confusing.
            if(mins.toString().length===1){
                mins = `0${mins}`
            }
            
           // Every click to clock-in/out will 
           // produce a new date var below to store in
           // the date arrays of that staff member.
            var newDate =
                {"date":`${day}/${month}/${year}`,
            "times":
                    {"clockedIn":!specificStaff.clockedIn,
                    "specificTime":`${hour}:${mins}`}
            }
            
            // Need to update the status of the person to opposite of their last
            // clocked in status 
            updatedPerson.clockedIn = !specificStaff.clockedIn;
            
            // Take the last recorded dates array of that staff.
            // and push the new date after the click
            updatedPerson.dates = specificStaff.dates
            updatedPerson.dates.push(newDate)
            
            // Sending a PUT or update request to the specific Staff
            const patchURL = `http://localhost:4000/api/staff/${specificStaff._id}`
      
            fetch(patchURL, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  // These values are getting updated/replaced
                    name:updatedPerson.name,
                    clockedIn:updatedPerson.clockedIn,
                    dates:updatedPerson.dates
                })
            })
            .then(()=>{
            alert('Your time has been logged');
            window.location.reload();   
            })
        }
      
        else{
            alert('Please pick a name');
      
        }
      }
    
    if(allStaff){
        return (
            <div className="clockingSys">
                <Dropdown>

                    <DropdownButton title={specificStaff.name? specificStaff.name:"Select Name"} onSelect={handleChange} >
                        {allStaff.map(person=>(
                            <Dropdown.Item value={person._id} eventKey={person._id}>{person.name}</Dropdown.Item>
                            ))}
                    </DropdownButton>
                </Dropdown>

                <> {specificStaff.clockedIn?      
                <button onClick={handleClick} className="clockingButton" id="out">Clock Out</button>  
                :
                <button onClick={handleClick} className="clockingButton" id="In">Clock In</button>  
                }
                </>
        </div>
        )
    } else {
        return null
    }

}

export default DropdownStaff

