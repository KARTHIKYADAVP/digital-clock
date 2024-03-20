function fun()
{
    let timeZone=new Date()
    let day=timeZone.getDay()

    switch(day)
    {
        case 0: day="SUNDAY"
        break
        case 1: day="MONDAY"
        break
        case 2: day="TUESDAY"
        break
        case 3: day="WEDNESDAY"
        break
        case 4: day="THURSDAY"
        break
        case 5: day="FRIDAY"
        break
        case 6: day="SATDAY"
        break

    }

    document.getElementById("a").innerHTML=day

    let date=timeZone.getDate()
    let month=timeZone.getMonth()
    let year=timeZone.getFullYear()

    switch(month)
    {
        case 0: month="JAN"
        break
        case 1: month="FEB"
        break
        case 2: month="MAR"
        break
        case 3: month="APR"
        break
        case 4: month="MAY"
        break
        case 5: month="JUNE"
        break
        case 6: month="JULY"
        break
        case 7: month="AUG"
        break
        case 8: month="SEP"
        break
        case 9: month="OCT"
        break
        case 10: month="NOV"
        break
        case 11: month="DEC"
        break

    }
     let z=date+"-"+month+"-"+year
    document.getElementById("b").innerHTML=z

    let hours=timeZone.getHours()
    let mins=timeZone.getMinutes()
    let secs=timeZone.getSeconds()

    let ampm=""

    if(hours>=12)
    {
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }

    let y=hours+":"+mins+":"+secs+""+ampm
    document.getElementById("c").innerHTML=y
    
    setTimeout (function() {fun(),1000})

       if (day=="SUNDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 
        /* else if(day=="MONDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 
        else  if (day=="TUESDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 
         else if (day=="WEDNESDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 
         else if (day=="THURSDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 
         else if (day=="FRIDAY")
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        }  */
        else 
        {
             document.getElementById("maindiv").style.backgroundImage="url('images-removebg-preview (4).png')"
            document.getElementById("maindiv").style.backgroundSize="cover"
              
        } 

        


    
} 