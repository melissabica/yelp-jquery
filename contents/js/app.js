$( "#doctors" ).on( "click", function( event ) {
    listDoctors()
})

$( "#users" ).on( "click", function( event ) {
    listUsers()
})

$( "#restaurants" ).on( "click", function( event ) {
    listRestaurants()
})

$( "#search" ).on( "click", function( event ) {
    search.load()
})