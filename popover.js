$(function() {
  
  var createPopover = function (content, item, title) {
                       
        var $pop = $(item);
        
        $pop.popover({
            placement: 'right',
            title: ( title || '&nbsp;' ) /*+ ' <a class="close" href="#">&times;</a>'*/,
            trigger: 'click',
            html: true,
            content: function () {
                return $(content).html();
            }
        }).on('shown.bs.popover', function(e) {
            //console.log('shown triggered');
            // 'aria-describedby' is the id of the current popover
            var current_popover = '#' + $(e.target).attr('aria-describedby');
            var $cur_pop = $(current_popover);
          
            /*$cur_pop.find('.close').click(function(){
                //console.log('close triggered');
                $pop.popover('hide');
            });*/
          
            $cur_pop.find('.cancel').click(function(){
                //console.log('OK triggered');
                $pop.popover('hide');
            });
        });

        return $pop;
    };

  // create popover

    //drinks
    createPopover('#popup-corona','#show-corona', 'Corona');
    createPopover('#popup-guiness','#show-guiness', 'Guiness');
    createPopover('#popup-budweiser','#show-budweiser', 'Budweiser');
    createPopover('#popup-sapporo','#show-sapporo', 'Sapporo');
    
    createPopover('#popup-sauvignon','#show-sauvignon', 'Sauvignon Blanc');
    createPopover('#popup-pinotGrigio','#show-pinotGrigio', 'Pinot Grigio');
    createPopover('#popup-pinotNoir','#show-pinotNoir', 'Pinot Noir');
    
    createPopover('#popup-martini','#show-martini', 'Martini');
    createPopover('#popup-whiskey','#show-whiskey', 'Whiskey');
    createPopover('#popup-mojito','#show-mojito', 'Mojito');
    createPopover('#popup-vodka','#show-vodka', 'Vodka');
    
    createPopover('#popup-coke','#show-coke', 'Coke');
    createPopover('#popup-gingerAle','#show-gingerAle', 'Ginger Ale');
    createPopover('#popup-orangeJuice','#show-orangeJuice', 'Orange Juice');
    
    createPopover('#popup-cappuccino','#show-cappuccino', 'Cappuccino');
    createPopover('#popup-hotChocolate','#show-hotChocolate', 'Hot Chocolate');
    createPopover('#popup-tea','#show-tea', 'Tea');

    //foods
    createPopover('#popup-buffaloChickenNachos','#show-buffaloChickenNachos', 'Buffalo Chicken Nachos');
    createPopover('#popup-chickenStrips','#show-chickenStrips', 'Chicken Strips');
    createPopover('#popup-chiptoleHoneyChicken','#show-chiptoleHoneyChicken', 'Chipotle Honey Chicken');
    createPopover('#popup-tacoCups','#show-tacoCups', 'Taco Cups');

    createPopover('#popup-baconOnionBurger','#show-baconOnionBurger', 'Bacon Onion Burger');
    createPopover('#popup-chickenBurger','#show-chickenBurger', 'Chicken Burger');
    createPopover('#popup-cheeseburger','#show-cheeseburger', 'Cheeseburger');

    createPopover('#popup-butterChickenPoutine','#show-butterChickenPoutine', 'Butter Chicken Poutine');
    createPopover('#popup-loadedPoutine','#show-loadedPoutine', 'Loaded Poutine');
    createPopover('#popup-regularPoutine','#show-regularPoutine', 'Regular Poutine');

    createPopover('#popup-brownieExplosion','#show-brownieExplosion', 'Brownie Explosion');
    createPopover('#popup-cherryCheesecake','#show-cherryCheesecake', 'Cherry Cheesecake');
    createPopover('#popup-chocolateTorte','#show-chocolateTorte', 'Chocolate Torte');
    createPopover('#popup-panCookie','#show-panCookie', 'Pan Cookie');



});