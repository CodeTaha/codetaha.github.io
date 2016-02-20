
var portfolio_json;
_.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
      };
$(document).ready(function() {
      $("#portfolio article a").click(function(event){
      	event.preventDefault();
      })
      console.log('This would be the main JS file.');
      portfolio_json = {
      	"ConstellationAtlas":{
      		"title": "Constellation Atlas",
      		"img":["images/img/ConstellationAtlas.png"],
      		"description": "The Constellation Atlas is a virtual simulation of the universe on the web using Three.js. We implemented two versions of the Constellation Atlas respectively to two approaches, one uses Points class with basic 2D texture for each star while the other employs a more advanced custom shaders for SphereGeometry objects.",
      		"git": "https://github.com/thuy616/ConstellationsAtlas",
      		"research": "https://goo.gl/GVbuob",
      		"demo": "http://thuy616.github.io/ConstellationsAtlas/",
      	}
      }
});
var template= _.template('\
            <div class="thumbnail">\n\
              <img src="{{img}}" alt="...">\n\
              <div class="caption container">\n\
                <h4><center>{{description}}</center></h4></br>\n\
                <center><ul class="icons">\n\
                    <li title="Git"><a href="{{git}}" class="icon fa-github" target="_blank"><span class="label">Github</span></a></li>\n\
                    <li title="Research Paper"><a href="{{research}}" class="icon fa-paperclip" target="_blank"><span class="label">Research Paper</span></a></li>\n\
                    <li title="Demo"><a href="{{demo}}" class="icon fa-desktop" target="_blank"><span class="label">Demo</span></a></li>\n\
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
}

