const calculate = ()=>{

    let date = new Date( document.getElementById("dateinput").value) ;
    let course = document.getElementById("selection").value;
    console.log(date);
    let duration;
    let enddate;
    if(course=="Full Stack"){
        duration=90;
        enddate = date.setDate(date.getDate()+90)
    }
    if(course=="Web Development"){
        duration=100;
        enddate = date.setDate(date.getDate()+100)
    }
    if(course=="Ims"){
        duration=80;
        enddate = date.setDate(date.getDate()+80)

    }
    if(course=="Sap"){
        duration=180;
        enddate = date.setDate(date.getDate()+180)

    }
    let finaldate =date.toDateString()

    document.getElementById("divid").innerHTML=`The ${course} course end date is ${finaldate}  and the duration is ${duration} days`
}

document.getElementById("btnid").addEventListener("click",calculate);