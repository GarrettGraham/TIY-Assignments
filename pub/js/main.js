// !?!?!MUST have the apis folder withing the pub folder(the document root) in order for the jquery functions to work correctly and for the data to be populated within the index.html file!?!?!

$(document).ready(function(data) {
//                console.log()
// saw that Jared wrote a test for the json data. id like to understand that more: use watch mocha in terminal to run the test? looking at the code is a helpful reminder of the syntax of jquery and he explained to me the classes being called but im still fuzzy on the function names, like he wrote user and i wrote users. is there a difference?
                
    });
    
    $.getJSON("octocat.json", function(data) {
        $('.profileHeader').find('img').append(user.avatar_url),
        $('.profileHeader').find('h4').append(user.name),
        $('.profileHeader').find('h5').append(data.login), //carolina said to call the data.login in order to populate the h5 but jared wrote user.login. which is it?
        $('.profileHeader').find('').append(user.company),
        $('profileHeader').find('').append(user.email),
        $('profileHeader').find('').append(user.blog),
        $('.profileHeader').find('').append(user.followers),
        
    });

//$('button').click(function (postComment) {
//    $.postJSON("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/248/comments?access_token=74bb82cbc3e64f93285bab5934430939524b8472", comment)
//    });
//        pretty sure this isnt correct
        
//====================================
//Notations from Peers: 09-02-15
//====================================
//    maddie did $.getJSON
//                    $('').text
//                    
//    Adam did $.getJSON
//                    $('').html
        
/*        
===========================================================================
Class Notes about the Assignment 20
===========================================================================

 <!-- !!The below script code is for the API info to be ued for the assignment
             I still need to play major catch up in order to understand the DOM, JSOn
                and the API stuff and synthesize the knowledge and commit it to memory!! -->
<!--
        
    $(document).ready(function() {

        var userData = $.getJSON("https://api.github.com/users/:user");

        userData.done(function(json) {
        var user =json;

        $("#myname").html(user.name); ::this it the code from Adam; this is the code i want to do ONCE i get the data
        $(#myusername").html(user.login);
});

$('.main-tabs a[href="#repositories"]').on('click', function() {
    //populate the repositories JUST IN TIME...
    userData.done(function(user){ 
    $.getJSON(user.repos_url);
}); // on(click, .main-tabs a[href="#repositories"]

    <script>
        var octocat;
            
            var promise = $.get('https://api.github.com/users/octocat',
                function(data) {
                    console.log('done!',data.login);
                    octocat = data;
                }
            );
            
            console.log(octocat);
            
            promise.done(function(data) {
                console.log('second callback', data);
            });

            promise.done(function() {
                console.log('third callback', octocat.login);
            });
        
        </script>
        
-->
        


*/
        