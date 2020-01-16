window.addEventListener('DOMContentLoaded', function(){
    'use strict';
//Чтобы при изменении ползунка менялось значение в инпуте
    $(function () {
        $("#filter__range").slider({
           min: 0,
           max: 8820,
           values: [0,5000],
           range: true,
           stop: function(event, ui) {
           $("input#priceMin").val($("#filter__range").slider("values",0));
           $("input#priceMax").val($("#filter__range").slider("values",1));
     
           $('.price-range-min.value').html($("#filter__range").slider("values",0));
           $('.price-range-max.value').html($("#filter__range").slider("values",1));
         },
         slide: function(event, ui){
           $("input#priceMin").val($("#filter__range").slider("values",0));
           $("input#priceMax").val($("#filter__range").slider("values",1));
     
           $('.price-range-min.value').html($("#filter__range").slider("values",0));
           $('.price-range-max.value').html($("#filter__range").slider("values",1));
         }
       });
     //Чтобы при изменении инпутов менялось положение ползунков
       $("input#priceMin").on('change', function(){
           var value1=$("input#priceMin").val();
           var value2=$("input#priceMax").val();
         if(parseInt(value1) > parseInt(value2)){
               value1 = value2;
               $("input#priceMin").val(value1);
           $('.price-range-min.value').html(value1);
           }
           $("#filter__range").slider("values", 0, value1);
         $('.price-range-min.value').html(value1);
       });
     
       $("input#priceMax").on('change', function(){
           var value1=$("input#priceMin").val();
           var value2=$("input#priceMax").val();
           if (value2 > 8820) { value2 = 8820; $("input#priceMax").val(8820)}
           if(parseInt(value1) > parseInt(value2)){
               value2 = value1;
               $("input#priceMax").val(value2);
           $('.price-range-max.value').html(value2);
           }
           $("#filter__range").slider("values",1,value2);
         $('.price-range-max.value').html(value2);
       });
     //Цепляет на range спанчики со значением
     //  $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
     //  $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
     });
    
});
