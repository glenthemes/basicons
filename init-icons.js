/*------------------------------------------------------

   Basicons (c) Solomon Omojola 2021

   * SITE: dub.sh/basicons-2021
   * LIST (NAMES ONLY): git.new/basicons-2021-list
   * USAGE: git.new/basicons-2021

-------------------------------------------------------*/

window.basicons = function(){
	let initBasicons = () => {
		document.querySelectorAll("[class*='bsc-']")?.forEach(bsc => {
			// identify bsc icon string
			let bsc_name = bsc.getAttribute("class").split("bsc-").pop();
			if(bsc_name.indexOf(" ") > -1){
				bsc_name = bsc_name.substring(0, bsc_name.lastIndexOf(" "));
			}

			// match icon name to icon svg url
			fetch("//glenthemes.github.io/basicons/2021/svg/" + bsc_name + ".svg")
			.then(svgspec => {
			  return svgspec.text();
			})
			.then(svgspec => {
			  bsc.innerHTML = svgspec;
			  if(bsc.querySelectorAll("meta[name='viewport']").length){
				bsc.innerHTML = "";
			  }
			}).catch(error => {
				console.error(error)
			})

			// add .basicons class at the start of each
			let cur_classes = bsc.getAttribute("class");
			bsc.setAttribute("class","basicons " + cur_classes)
		})
		
	}
	
	document.readyState == "loading" ?
    document.addEventListener("DOMContentLoaded", () => initBasicons()) :
    initBasicons();
}

basicons();
