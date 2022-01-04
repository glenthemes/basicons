document.addEventListener("DOMContentLoaded",() => { 
    initBasicons();
});

function initBasicons(){
	document.querySelectorAll("[class*='bsc-']").forEach(bsc => {	
		// identify bsc icon string
		var bsc_name = bsc.getAttribute("class").split("bsc-").pop();

		if(bsc_name.indexOf(" ") > -1){
			bsc_name = bsc_name.substring(0, bsc_name.lastIndexOf(" "));
		}
		
		// match icon name to icon svg url
		fetch("//basicons.xyz/raw_icons/" + bsc_name + ".svg")
		.then(svgspec => {
		  return svgspec.text();
		})
		.then(svgspec => {
		  bsc.innerHTML = svgspec;
		  if(bsc.querySelectorAll("meta[name='viewport']").length){
		    bsc.innerHTML = "";
		  }
		});
		
		// add .basicons class at the start of each
		var cur_classes = bsc.getAttribute("class");
		bsc.setAttribute("class","basicons " + cur_classes)
	});
}
