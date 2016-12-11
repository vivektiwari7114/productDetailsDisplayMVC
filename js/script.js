
    

    


var model ={
    
    itemList : [],
    'listOfItems': function(){
        model.pushValue();
        return model.itemList;
    },
    'pushValue': function(){
        model.itemList.push(
[
{
    id: '1',
    name: 'Mobile',
    url: 'images/p1.jpg'
    
},
{
    id: '2',
    name: 'Washing Machine',
    url: 'images/p2.gif'
    
},
{
    id: '3',
    name: 'Air Conditoner',
    url: 'images/p3.jpg'
    
},
{
    id: '4',
    name: 'Wall Painting',
    url: 'images/p4.jpg'
    
}
       
]
);
        
    },
    
    'getCurrentItem': function(givenId){
        
        var itemList = model.listOfItems()[0];
        for(var i=0; i < itemList.length; i++){
            if(itemList[i].id === givenId){
                return itemList[i];
            }
        }
        
    }
    
};

var view ={
    'init': function(){
        
        view.displayItemView()
        
        $('#listOfItems').click(function(event){
           var clickedId = event.target.id;
            var clickedItem = model.getCurrentItem(clickedId);
            console.log(clickedItem);
            view.renderDetailsView(clickedItem);
            
            
            
        });
        
    } ,
    'displayItemView': function(){
        var itemList = model.listOfItems()[0];
        console.log(itemList);
        var schema = '';
        
        for(var i=0; i < itemList.length; i++){
            schema += '<li id = '+itemList[i].id +'>' + itemList[i].name+'</li>';
        }
         $('#listOfItems').html('');
         $('#listOfItems').append(schema);
    },
    'renderDetailsView': function(clickedItem){
        console.log(clickedItem);
        
         $('#imageOfItem').html('');
        $('#nameOfItem').html('');
        
        var imageView = '<img src="' + clickedItem.url + '" width= "30%">';
        $('#imageOfItem').append(imageView);
        var setHeading = clickedItem.name;
        $('#nameOfItem').append(setHeading);
        
        
        
    }
    
};

var controller = {
    'initilaize': function(){
        
        view.init();
        
    }   
};

controller.initilaize();
