
let videos = [
      {
            name: 'Terapia Xamânica | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TDUZPeEnPNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      },
     
      {
            name: 'Masterclass Terapia Xamânica da Medicina da Floresta - Aula 2 - Xamã Cientista',
            content:`<iframe width="560" height="315" src="https://www.youtube.com/embed/wnH3FU3qeXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; ; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      },
      {
            name: 'Unindo os versus Xamanismo e Ciência - Xamã Cientista',
            content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/r-u8bR2xwkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      {
            name:'POR ONDE A SAÚDE COMEÇA? Corpo, mente ou espirito?',
            content:'<iframe width="560" height="315" src="https://www.youtube.com/embed/dsOcfq3zoUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      {
            name: 'Práticas xamanicas xamacientista com',
            content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nBfFsOfdOKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }

]
let handleModal= {
      open(){
            document.querySelector('aside').classList.remove('disable')
      },
      close(){
            document.querySelector('aside').classList.add('disable')
      }
}

let Dom = {
      count: 0,
      sectionContent(content= ''){
            
            Dom.count ++
            
            if(Dom.count === 2 ){
                  let html =
                        `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    <img src="../assets/payContent.jpg" alt="pay me now" onclick="handleModal.open()">
                              </div>     
                        </section>
                        
                        `
                  Dom.count = 0
                  
                  return html
            }
            else{
                  let html =
                  `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    
                              </div>     
                        </section>
                  
                  `
              return html
            }       
      },
      createSection(video = {name:'', content:''}){
            let section = document.createElement('section')
            section.innerHTML += Dom.sectionContent(video.content)
            return section
      },
      insertInBody(){
            let allVideos = document.getElementById('allVideos')
            videos.forEach(video=>{
                  let section = Dom.createSection(video)
                  allVideos.appendChild(section)
            })  
      }
}
let app = {
      init(){
            try {
                  Dom.insertInBody()
            } catch (error) {
                  console.log(error.message)
            }
      }
}
app.init()


