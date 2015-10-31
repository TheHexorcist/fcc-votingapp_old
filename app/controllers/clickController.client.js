'use strict';

(function () {


   var addCat = document.querySelector('#btn-addtext-cats');
   var delCat = document.querySelector('#btn-deltext-cats');
   var genPoll = document.querySelector('#btn-genpoll-cats');
   var addButton = document.querySelector('.btn-add');
   var deleteButton = document.querySelector('.btn-delete');
   var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/clicks';

   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));
   
   addCat.addEventListener('click', function () {
      var inputtxt = document.createElement("input");
      inputtxt.type = "text";
      inputtxt.placeholder = "Option ?";

      var textcats = document.querySelector('#text-cats p');
      textcats.appendChild(inputtxt);
      textcats.appendChild(document.createElement("br"));
      
   }, false);
   
   delCat.addEventListener('click', function () {
      var textcats = document.querySelector('#text-cats p');
      textcats.removeChild(textcats.lastChild);
      textcats.removeChild(textcats.lastChild);
   }, false);
   
   genPoll.addEventListener('click', function () {
      //console.log("test");
   }, false);

   addButton.addEventListener('click', function () {
      //console.log('test');
      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

   deleteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

})();
