jQuery("button[type='submit']").on('load', function() {
    console.log('iframe loaded?');
});

jQuery(document).ready(function() {
    // var x = document.getElementsByTagName("iframe");
    // var z = jQuery('#form-wrapper iframe');
    // var y = jQuery('#form-wrapper iframe').html();
    
    // console.log(x);
    // console.log(y);
    

    // $(x[1]).on('load', function() {
    //     console.log('loaded from bottom');
    //     alert("loaded from bottom")
    // });


    /*********************/
    alert("document is ready jquery");
    
});

document.addEventListener("DOMContentLoaded", function(){
    alert("DomContentLoaded");
});

window.addEventListener('load', function(){
    alert("Hell yeah");
    jQuery('#text-00000008-acc').load(function() {
         var gimme = jQuery("#text-00000008-acc")
         console.log("look: " + gimme);;
     });
});


