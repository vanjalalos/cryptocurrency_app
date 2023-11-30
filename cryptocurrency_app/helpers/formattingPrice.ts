const formattingPrice =(price:number, symbol:string)=>{
    const formattedPrice=`${symbol}${new Intl.NumberFormat('de-DE').format(
        price
      )}`
      return formattedPrice
};

export default formattingPrice