// Memory
// 8gb
document.getElementById('8gb').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('extra-memory')
    const extraMemoryCostInt = parseFloat(extraMemoryCost.innerText);
    if(extraMemoryCost.innerText == '180' ){
       extraMemoryCost.innerText = extraMemoryCostInt - 180;
       const totalPrice = document.getElementById('total-cost')
       const updatePrice = parseFloat(totalPrice.innerText) - 180;
       totalPrice.innerText = updatePrice;
       const bonusTotal = document.getElementById('bonus');
       const bonusTotalText = parseFloat(bonusTotal.innerText);
       const updateBonusPrice = bonusTotalText - 180;
       bonusTotal.innerText = updateBonusPrice;
    }
   })
   
   //16gb
   document.getElementById('16gb').addEventListener('click', function(){ 
       const extraMemoryCost = document.getElementById('extra-memory')
       const extraMemoryCostInt = parseFloat(extraMemoryCost.innerText);
       if(extraMemoryCost.innerText == '0'){
           extraMemoryCost.innerText = extraMemoryCostInt + 180;
           const totalPrice = document.getElementById('total-cost');
           const updatePrice = parseFloat(totalPrice.innerText) + 180;
           totalPrice.innerText = updatePrice
           const bonusTotal = document.getElementById('bonus');
       const bonusTotalText = parseFloat(bonusTotal.innerText);
       const updateBonusPrice = bonusTotalText + 180;
       bonusTotal.innerText = updateBonusPrice;
       }
       
   }) 
   
   
   // storage
   // 256gb
   document.getElementById('256gb').addEventListener('click',function(){
       const extraStorageCost = document.getElementById('extra-storage');
       const extraStorageCostInt = parseFloat(extraStorageCost.innerText);
       const totalPrice = document.getElementById('total-cost')
       const totalpriceInt = parseFloat(totalPrice.innerText);
       const bonusTotal = document.getElementById('bonus');
       const bonusTotalText = parseFloat(bonusTotal.innerText);
       if(extraStorageCost.innerText == '100'){
           extraStorageCost.innerText = extraStorageCostInt - 100;
           totalPrice.innerText = totalpriceInt - 100;
           const updateBonusPrice = bonusTotalText - 100;
             bonusTotal.innerText = updateBonusPrice;
       }
       else if(extraStorageCost.innerText == '180'){
           extraStorageCost.innerText = extraStorageCostInt - 180;
           totalPrice.innerText = totalpriceInt - 180;
           const updateBonusPrice = bonusTotalText - 180;
            bonusTotal.innerText = updateBonusPrice;
           
       }
   })
   //512gb
   document.getElementById('512gb').addEventListener('click',function(){
       const extraStorageCost = document.getElementById('extra-storage');
       const extraStorageCostInt = parseFloat(extraStorageCost.innerText);
       const totalPrice = document.getElementById('total-cost')
       const totalpriceInt = parseFloat(totalPrice.innerText);
       const bonusTotal = document.getElementById('bonus');
       const bonusTotalText = parseFloat(bonusTotal.innerText);
       if(extraStorageCost.innerText == '0'){
           extraStorageCost.innerText = extraStorageCostInt + 100;
           totalPrice.innerText = totalpriceInt + 100;
           const updateBonusPrice = bonusTotalText + 100;
           bonusTotal.innerText = updateBonusPrice;
       }
       else if(extraStorageCost.innerText == '180'){
           extraStorageCost.innerText = extraStorageCostInt - 80;
           totalPrice.innerText = totalpriceInt - 80;
           const updateBonusPrice = bonusTotalText - 80;
           bonusTotal.innerText = updateBonusPrice;
   
       }
   })
   // 1TB
   document.getElementById('1tb').addEventListener('click',function(){
       const extraStorageCost = document.getElementById('extra-storage');
       const extraStorageCostInt = parseFloat(extraStorageCost.innerText);
       const totalPrice = document.getElementById('total-cost')
       const totalpriceInt = parseFloat(totalPrice.innerText);
       const bonusTotal = document.getElementById('bonus');
       const bonusTotalText = parseFloat(bonusTotal.innerText);
       if(extraStorageCost.innerText == '0'){
           extraStorageCost.innerText = extraStorageCostInt + 180;
           totalPrice.innerText = totalpriceInt + 180;
           const updateBonusPrice = bonusTotalText + 180;
           bonusTotal.innerText = updateBonusPrice;
       }
       else if(extraStorageCost.innerText == '100'){
           extraStorageCost.innerText = extraStorageCostInt + 80;
           totalPrice.innerText = totalpriceInt + 80;
           const updateBonusPrice = bonusTotalText + 80;
           bonusTotal.innerText = updateBonusPrice;
       }
   })
   
   //delivery
   //free
   document.getElementById('free').addEventListener('click', function(){
   const deliveryCharge = document.getElementById('del-cost');
   const deliveryChargeInt = parseFloat(deliveryCharge.innerText)
   const totalPrice = document.getElementById('total-cost')
   const totalpriceInt = parseFloat(totalPrice.innerText);
   const bonusTotal = document.getElementById('bonus');
   const bonusTotalText = parseFloat(bonusTotal.innerText);
   if(deliveryCharge.innerText == '20'){
       deliveryCharge.innerText = deliveryChargeInt - 20;
       totalPrice.innerText = totalpriceInt - 20;
       const updateBonusPrice = bonusTotalText - 20;
       bonusTotal.innerText = updateBonusPrice;
   }
   })
   
   // not-free
   document.getElementById('not-free').addEventListener('click', function(){
   const deliveryCharge = document.getElementById('del-cost');
   const deliveryChargeInt = parseFloat(deliveryCharge.innerText)
   const totalPrice = document.getElementById('total-cost')
   const totalpriceInt = parseFloat(totalPrice.innerText);
   const bonusTotal = document.getElementById('bonus');
   const bonusTotalText = parseFloat(bonusTotal.innerText);
   if(deliveryCharge.innerText == '0'){
       deliveryCharge.innerText = deliveryChargeInt + 20;
       totalPrice.innerText = totalpriceInt + 20;
       const updateBonusPrice = bonusTotalText + 20;
       bonusTotal.innerText = updateBonusPrice;
   }
   })
   
   //bonus
   function bonus(){
    const bonusTotal = document.getElementById('bonus');
    const bonusTotalText = parseFloat(bonusTotal.innerText);
    const inputText = document.getElementById('promo');
    if(inputText.value == 'stevekaku'){
       const updateBonusPrice = bonusTotalText * (1 - (20 / 100));
       bonusTotal.innerText = updateBonusPrice;
    }
    else{
       alert('this promo is not valid')
    }
   
   }