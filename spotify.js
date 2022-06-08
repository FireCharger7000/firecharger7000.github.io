//Replace with your Last.fm username.
username="HelpDylan04";

$("#Spotify a").attr("href", "http://www.last.fm/user/" + username + "/now");

$.get( "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + username + "&api_key=1f633977acf0e2d0630ec11dbc350d3e&format=json", function( data ) 
{
	if (typeof data.toptrack.track[0]["@attr"] != "undefined")
	{
	    artist=data.toptrack.track[0].artist["#text"];
    	track=data.toptrack.track[0].name;
    	artwork=data.toptrack.track[0].image[1]["#text"];
    	$("#artwork").attr("src", artwork);
   	  $("#track").html(track + "<br>" + artist + "<br><br>");
    	$("Spotify").fadeIn("slow");
	}
});