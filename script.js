const months=[31,28,31,30,31,30,31,31,30,31,30,31];
function agecalculate(){
    let today=new Date();
    let inputDate=new Date(document.getElementById('input-date').value);
    let birthyear,birthmonth,birthday;
    let birthdetails={
        year:inputDate.getFullYear(),
        months:inputDate.getMonth()+1,
        date:inputDate.getDate(),
        
    }
    let currentyear = today .getFullYear();
    let currentmonth = today .getMonth()+1;
    let currentdate= today .getDate();
    leapchecker(currentyear);
    if(birthdetails.year>currentyear ||
        (birthdetails.months>currentmonth && birthdetails.year==currentyear) ||
        (birthdetails.date>currentdate && birthdetails.month==currentmonth && birthdetails.year==currentyear )
    )
    {
        alert('not born yet');
        displayresult("-","-","-");
        return;
    }
    birthyear=currentyear-birthdetails.year;
    if(currentmonth>=birthdetails.month){
        birthmonth=currentmonth-birthdetails.month;

    }
    else{
        birthyear--;
        birthmonth=12+currentmonth-birthdetails.month;

    }
    if(currentdate>=birthdetails.date){
        birthday=currentdate-birthdetails.date;
    }
    else{
        birthmonth--;
        let day=months[currentmonth-2];
        birthday=day+currentdate-birthdetails.date;
        if(birthmonth<0){
            birthmonth=11;
            birthyear--;
        }

    }
    displayresult(birthyear,birthmonth,birthday);
    function displayresult(byear,bmonth,bday){
        document.getElementById('year').textContent=byear;
        document.getElementById('month').textContent=bmonth;
        document.getElementById('day').textContent=bday;

    }
}
function leapchecker(year){
    if(year%4==0||(year%100==0&&year%400==0)){
        months[1]=29;
    }
    else{
        months[1]=28;
    }
}