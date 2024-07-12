const month = ['jan','feb','march','april','may']

const indexmonth = month.indexOf('april');

if(indexmonth != -1){
    const updateMonth = month.splice(indexmonth,1,'April');
    console.log(month);

}else{
    console.log('no such data found');
}