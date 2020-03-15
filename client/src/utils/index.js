import moment from 'moment'

export function transform (data, type, byDates = true){
    if(byDates){
        const dates = getDates(data) 
        return dates.map(date=>{
            return {date, type, quantity: data.filter(e => e.date === date && e.type === type).length}
        })
    }
    else{
        let inds = 0
        let coms = 0
        data.forEach(e=> e.type === 1 ? coms++: inds++ )
        return [{type:0, value:inds}, {type:1 ,value: coms}]
    }
 }

 export function dataFeeder(quantity) {

    const datatofeed = []

    for (let index = 0; index < quantity; index++) {
        const type = getRandom(3, 1)
        datatofeed.push({
            type: type == 2 ? 0 : 1,
            name: type == 2 ? "Person" + datatofeed.length : "Company" + datatofeed.length,
            gender: type == 2 ? getRandom(3, 1) == 2 ? 0 : 1 : undefined,
            date: moment().day(getRandom(undefined, -30)).format("MMM YY")
        })

    }
    return datatofeed

}

function getRandom(num = 10, q = -1) {
    return (Math.floor(Math.random() * num)) * q;
}


function getDates (data){
    const dates = []
    data.forEach(e => {
        if(!dates.includes(e.date))
            dates.push(e.date) 
    });
    return dates  
 }