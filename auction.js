alert('JavaScript is working')



function setBid(highestBid, bid){
  var currentPrice = document.getElementById('highestBid').innerHTML;
  console.log(currentPrice);
  var bidPrice = document.getElementById('bid').value;
  console.log(bidPrice);

  if (bidPrice > currentPrice){
    document.getElementById('highestBid').innerHTML = bidPrice;

  }


  // for(i =0;i < currentPrice; i++){
  //   if(bidPrice > currentPrice[i]){
  //     currentPrice[i].innerHTML = bidPrice;
  //   }
  // }

}
