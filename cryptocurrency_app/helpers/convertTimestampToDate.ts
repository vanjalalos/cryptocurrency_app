
const convertTimestampToDate=(timestamp:number)=>{
    const date = new Date(timestamp);
    return (date.toLocaleDateString('en-GB'))
}

export default convertTimestampToDate