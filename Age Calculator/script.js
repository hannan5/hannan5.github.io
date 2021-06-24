// var  input_Date = prompt('Enter Your Birth Date');
// var  input_Month = prompt('Enter Your Birth Month');
// var  input_Year = prompt('Enter Your Birth Year');

// var input_Dates = new Date(input_Date)
// var input_Months = new Date(input_Month)
// var input_Years = new Date(input_Year)

// // var full_Date = (input_Date + '-' + input_Month + '-' + input_Year)
// // console.log(full_Date);

// var date = new Date();

// var age = date.getFullYear() - input_Years.getFullYear();
// var m = date.getMonth() - input_Months.getMonth();
// if (m < 0 || (m === 0 && date.getDate() < input_Dates.getDate())) 
// {
//     age--;
// }
// console.log('Your' + age + 'is' + m);




// // console.log(date.getTime())

// // var curr_Date = date.getDate();
// // console.log(curr_Date);

// // var curr_Month = date.getMonth();
// // console.log(curr_Month);

// // var curr_Year = date.getFullYear();
// // console.log(curr_Year);


// // var new_date = new Date("june 18, 2021")
// // console.log(new_date);
// // console.log(input_Year - curr_Year);
// // console.log(input_Month - curr_Month);
// // console.log(input_Year - curr_Year);

// // const Month = [
// //     ['jan','January',1],
// //     ['Feb','February',2],
// //     ['Mar','March',3],
// //     ['Apr','Aprail',4],
// //     ['May','May',5],
// //     ['jun','June',6],
// //     ['july','July',7],
// //     ['Aug','August',8],
// //     ['Sep','September',9],
// //     ['Oct','Octuber',10],
// //     ['Nov','November',11],
// //     ['Dec','December',12],
// // ]

// // for(let i =0)





////// //////////////////////////////////////////////////////////////////////////////////////////////////////////////



const calculate_age=()=> {
   let date =  document.getElementById('date_field').value;
   let month =  document.getElementById('month_field').value;
   let Year =  document.getElementById('year_field').value;
console.log(date);
console.log(month);
console.log(Year);

   if(date>31){
       alert('Please Input Valid Date');
       return;
   }
   let dob = new Date(`${date} ${month} ${Year}`)
   console.log(dob);
   let now = new Date();

   var differnce = now - dob;
   // console.log(differnce);

   let final_date =( differnce / (1000 * 60 * 60 * 24));

   console.log(Math.floor(final_date));

   let final_month = differnce / (1000 * 60 * 60 * 24 * 30);

   console.log(Math.floor(final_month));

   let final_year = differnce / (1000 * 60 * 60 * 24 * 30 * 12)

   console.log(Math.floor(final_year));

   // console.log(final_date);

   new_month = (now.getMonth() - dob.getMonth())
   new_date = (now.getDate() - dob.getDate())

   // if()

document.getElementById('year_output_h6').innerHTML = Math.floor(final_year);
document.getElementById('month_output_h6').innerHTML = Math.floor(Math.abs(new_month));
document.getElementById('days_output_h6').innerHTML = Math.floor(Math.abs(new_date));




// var a = now.getMonth
// console.log(now.getMonth(1) - final_month);
}