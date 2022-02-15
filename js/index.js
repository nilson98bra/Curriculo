console.log("Hello")


let el = [...document.getElementsByClassName("portfolio-skills")]
el.forEach((element,index) => {
    element.addEventListener("click",(e)=>{
        let div=element.children[1]
        let projectlist = [...div.children]
        if(e.target.classList.contains("project")==false){
            if(div.classList.contains("portfolio-projects")==false){

                div.classList.remove("portfolio-projects-remove")
                div.classList.add("portfolio-projects-height")
                div.classList.add("portfolio-projects")
                
                setTimeout(()=>{
                    projectlist.forEach((project)=>{
                        project.children[0].classList.remove("hide-project")
                    })
                },700)
    
                
            }
            else{
                div.classList.add("portfolio-projects-remove")
                setTimeout(()=>{
    
                    div.classList.remove("portfolio-projects-height")
                    div.classList.remove("portfolio-projects")
                },700)
                projectlist.forEach((project)=>{
                    project.children[0].classList.add("hide-project")
                })
                
              
            }
        }

        
    })
});