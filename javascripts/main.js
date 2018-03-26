
var portfolio_json;
_.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
      };
$(document).ready(function() {
      $("#portfolio article a").click(function(event){
      	event.preventDefault();
      })
      $('.cntl').cntl({
            revealbefore: 300,
            anim_class: 'cntl-animate',
            onreveal: function(e){
                console.log(e);
            }
      });
      
      $(".icons").prepend('<li><a href="'+resume_link+'" title="resume" target="_blank" class="icon fa fa-file-text"><span class="label">Download CV</span></a></li>');
      $("#resume_link").attr("href",resume_link);
      portfolio_json = {
      	"ConstellationAtlas":{
      		"title": "Constellation Atlas",
      		"img":[
      			"images/img/ConstellationAtlas/slide_1.jpg",
      			"images/img/ConstellationAtlas/slide_2.jpg",
      			"images/img/ConstellationAtlas/slide_3.jpg"
      			],
      		"tags":["THREE.js", "OpenGL", "JavaScript", "CSS3D","Java","jQuery"],
      		"description": "The Constellation Atlas is a virtual simulation of the universe on the web using Three.js. We implemented two versions of the Constellation Atlas respectively to two approaches, one uses Points class with basic 2D texture for each star while the other employs a more advanced custom shaders for SphereGeometry objects.",
      		"git": "https://github.com/thuy616/ConstellationsAtlas",
      		"research": "https://goo.gl/GVbuob",
      		"demo": "http://thuy616.github.io/ConstellationsAtlas/",
      	},
      	"DotA2":{
      		"title": "DotA2 Spatio-Temporal Game Analysis and Visualization",
      		"img":[
      			"images/img/DotA2/all-heat.png",
      			"images/img/DotA2/all-live.png",
      			"images/img/DotA2/box.png",
      			"images/img/DotA2/pro-live.png",
      			],
      		"tags":["D3.js","Java", "REST", "Bootstrap","jQuery", "Plotly.js"],
      		"description": "DotA2 is one of the most played online digital games in the world. This project does a spatio-temporal analysis of 200 games from 4 skill tiers of DotA2. This includes trajectory motions at different times of the game and Win/Lose HeatMaps. This project also explores how the average Euclidean distance between team players affects the gameplay in different skill tiers.",
      		"git": "https://github.com/CodeTaha/Dota-Analysis",
      		"research": "https://www.academia.edu/22194561/DotA2_Spatio-Temporal_Game_Analysis",
      		"demo": "http://taha-k.github.io/Dota-Analysis/web/",
      	},
        "ReactChat":{
          "title": " ReactChat - A mock chat application developed using React and Flux",
          "img":[
            "images/img/ReactChat/slide_1.png",
            ],
          "tags":["React", "Flux", "Jest", "Gulp", "Bootstrap"],
          "description": "It includes functionality such as Group and Personal chat as well as sending image attachments. It is build using Flux's unidirectional flow pattern. Unit tests implemented using Jest.",
          "git": "https://github.com/CodeTaha/ReactChat",
          "research": null,
          "demo": "https://taha-k.github.io/ReactChat/dist/",
        },
      	"AmRead":{
      		"title": "AmRead - A REST API & WS-I application exploring Amazon Product Advertising API",
      		"img":[
      			"images/img/AmRead/slide_1.png",
      			"images/img/AmRead/slide_2.png",
      			"images/img/AmRead/slide_3.png",
      			],
      		"tags":["Java", "REST API", "WS-I", "underscore.js","Amazon Product Advertising API", "GoodReads API", "Bootstrap","jQuery"],
      		"description": "It is a Java based REST & WS-I application that can search for books available on Amazon depending on author, title, publication etc. Then a person can read the reviews for that book made available through GoodReads API. Finally there is a demo transaction gateway that simulates the procedure of a real transaction gateway using client_id, client_secret and threeway handshake.",
      		"git": "https://github.com/CodeTaha/AmReads",
      		"research": null,
      		"demo": "http://54.148.130.167/AmRead/",
      	},
      	"DataScience":{
      		"title": "Closeness between Websites depending on the frequency of infrequent words shared between them",
      		"img":[
      			"images/img/DataScience/slide_1.png",
      			"images/img/DataScience/slide_2.png",
      			],
      		"tags":["D3.js","Java", "Hadoop", "Map_Reduce"],
      		"description": " This project uses Hadoop Map-Reduce to determine the closeness between websites depending on the wordcount of the infrequent words shared between them. The visualization is a small subset of the final output which is a frce directed graph. Two nodes(websites) can then be selected to see the word frequency.",
      		"git": "https://github.com/deniskulicek/Data-Science-TUDelft",
      		"research": "https://www.academia.edu/22256975/Closeness_between_websites_depending_of_WordCount",
      		"demo": "http://taha-k.github.io/datasciViz/",
      	},
      	"Pollican":{
      		"title": "Pollican: Social Hub for Polls and Surveys",
      		"img":[
      			"images/img/Pollican/slide_2.png",
      			"images/img/Pollican/slide_3.png",
      			"images/img/Pollican/slide_1.png",
      			],
      		"tags":["D3.js","Java", "SpringMVC", "REST", "Bootstrap","jQuery"],
      		"description": "Pollican is a social hub for taking polls and surveys which is currently under Beta testing. The main objective is that users can create free polls and surveys.<br> These polls are then targeted to the relevant audience to solve them. This targeted audience is found by information retrieval of publicly available Twitter data and data retrieved from Facebook and LinkedIn.",
      		"git": "https://github.com/CodeTaha/Pollican",
      		"research": null,
      		"demo": "http://54.148.130.167/",
      	},
      	"Civis":{
      		"title": "Civis: Be more green. Be more social.",
      		"img":[
      			"images/img/Civis/slide_1.jpg",
      			],
      		"tags":["Node.js", "ExpressJS", "REST API", "Facebook API","jQuery"],
      		"description": "CIVIS project explores the potential of social networks and communities to significantly reduce energy use and carbon emission. It will achieve this goal by developing business models for the resulting energy value system and support it with the necessary ICT.",
      		"git": "https://github.com/CIVIS-project/YouPower",
      		"research": null,
      		"demo": "https://app.civisproject.eu/",
      	},
        "AwesomeWSD":{
          "title": "Awesome-wsd: JS Gamestore, and portal",
          "img":[
            "images/img/Awesome-wsd/slide_1.jpg",
            "images/img/Awesome-wsd/slide_2.jpg",
            "images/img/Awesome-wsd/slide_3.jpg",
            "images/img/Awesome-wsd/slide_4.jpg",
            ],
          "tags":["Python", "Django", "REST API", "Django Rest Framework","jQuery"],
          "description": "A mock gaming Portal where developers can upload JS games and players can play games after buying. Buying process simulates actual transaction gateway process.",
          "git": "https://github.com/CIVIS-project/YouPower",
          "research": null,
          "demo": "http://awesome-wsd.herokuapp.com/",
        }
      }
});
var template= _.template('\
            <div class="thumbnail">\n\
              <div id="myCarousel" class="carousel slide" data-ride="carousel">\n\
              	<ol class="carousel-indicators">\n\
              		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n\
              	</ol>\n\
              	<div class="carousel-inner" role="listbox">\n\
              		<div class="item active">\n\
						        <img src="{{img}}" alt="Chania" width="auto" height="200px">\n\
					</div>\n\
              	</div>\n\
              	<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">\n\
			      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n\
			      <span class="sr-only">Previous</span>\n\
				</a>\n\
				<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">\n\
			      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n\
			      <span class="sr-only">Next</span>\n\
				</a>\n\
              </div>\n\
              <div class="caption">\n\
              	<div class="tags"></div></br>\n\
                <p>{{description}}</p></br>\n\
                <center><ul class="icons">\n\
                    <li title="Git"><a href="{{git}}" class="icon fa-github" target="_blank"><span class="label">Github</span></a></li>\n\
                    <li id="research-link" title="Research Paper"><a href="{{research}}" class="icon fa-paperclip" target="_blank"><span class="label">Research Paper</span></a></li>\n\
                    <li id="demo-link" title="Demo"><a href="{{demo}}" class="icon fa-desktop" target="_blank"><span class="label">Demo</span></a></li>\n\
                </ul></center>\n\
              </div>\n\
            </div>\n\
            <div class="modal-footer">\n\
              <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>\n\
            </div>');

var fillModal = function(port){
	var port_id = port.getAttribute("data-port_id");
	var data = portfolio_json[port_id]
	console.log(port_id, data);
	$("#myModalLabel").html(data.title);
	
    $("#myModalBody").empty();
    $("#myModalBody").append(template({
            img:  data.img[0],
            description: data.description,
            git: data.git,
            research: data.research,
            demo: data.demo
    }));

    for(img in data.img){
    	
    	if(img==0){
			/*$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+img+'" class="active"></li>');
    		$(".carousel-inner").append('<div class="item active">\n\
						        <img src='+data.img[img]+' alt="Chania" width="460" height="345">\n\
						      </div>');*/
    		
    	} else {
    		console.log(img)
    		$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+img+'"></li>');
    		$(".carousel-inner").append('<div class="item">\n\
						        <img src='+data.img[img]+' alt="Chania" width="auto" height="200px">\n\
						      </div>');
    		
    	}
    }
    for(tag in data.tags){
    	$(".tags").append('<i class="fa fa-tag"></i>'+data.tags[tag]+" ");
    	
    }
    if(data.research==null){
    	$("#research-link").remove();
    }
}

