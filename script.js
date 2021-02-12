var deck=document.createElement('div');
    deck.setAttribute("class","row row-cols-sm-1 row-cols-md-2");
    deck.setAttribute('id','new');

async function myNewFunction(){
    
    var name=document.getElementById('get').value;
    var fixerdata = await fetch('http://api.tvmaze.com/search/shows?q='+name);
var fixerresp = await fixerdata.json();
//console.log(fixerresp.length);
//console.log(fixerresp);

var k=0; var sum=0;
function doit(){
    deck.innerHTML="";

    for(var i=k;i<fixerresp.length;i++){
        
        var card=document.createElement('div');
card.setAttribute("class","col mb-4");
var scard=document.createElement('div');
scard.setAttribute("class","card");

var body=document.createElement('div');
body.setAttribute("class","card-body");
var h5=document.createElement('div');
h5.setAttribute("class","card-title");
h5.innerHTML='Show Title: '+fixerresp[i].show.name;
var genres=document.createElement('div');

genres.setAttribute("class","card-title");

if(fixerresp[i].show.genres=="")
fixerresp[i].show.genres='no info';

genres.innerHTML='Genre: '+fixerresp[i].show.genres;
var p=document.createElement('p');
p.setAttribute("class","card-text");
p.innerHTML='Summary: '+fixerresp[i].show.summary;
var footer=document.createElement('div');
footer.setAttribute("class","card-footer");
var small=document.createElement('small');
small.setAttribute("class","text-muted");
small.innerHTML='Language: '+fixerresp[i].show.language;

footer.append(small);
body.append(h5,genres,p);
scard.append(body,footer);
card.append(scard);

deck.append(card);
document.body.append(deck);

 
    }
}
doit()
}

//myNewFunction()


