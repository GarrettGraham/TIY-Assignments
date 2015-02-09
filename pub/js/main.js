$(document).ready(function(data) {
//                console.log()
// saw that Jared wrote a test for the json data. id like to understand that more: use watch mocha in terminal to run the test? looking at the code is a helpful reminder of the syntax of jquery and he explained to me the classes being called but im still fuzzy on the function names, like he wrote user and i wrote users. is there a difference?
                
    });
    
    $.getJSON("octocat.json", function(user) {
        $('.profileHeader').find('img').append(user.avatar_url),
        $('.profileHeader').find('h4').append(user.name),
        $('.profileHeader').find('h5').append(data.login), //carolina said to call the data.login in order to populate the h5 but jared wrote user.login. which is it?
        $('.profileHeader').find('').append(user.company),
        $('profileHeader').find('').append(user.email),
        $('profileHeader').find('').append(user.blog),
        $('.profileHeader').find('').append(user.followers),
        $('
    });

//$('button').click(function (postComment) {
//    $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/248/comments?access_token=74bb82cbc3e64f93285bab5934430939524b8472", comment)
//    });
        //pretty sure this isnt correct