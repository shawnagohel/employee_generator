//generate html for engineer
const generateVcardsEng = (dataEng) => {
    console.log(dataEng);
    if (dataEng){
      return `
          
          ${dataEng.map(x => {
             return `
             <div class="col-sm-12 col-md-6 col-lg-4 mt-2">
                <div class="card">
                   <div class="header bg-primary text-center text-white">
                     <h5>${x.name}</h5>
                     <span class="d-flex justify-content-center"><i class="fa fa-laptop" aria-hidden="true"></i><h5>${x.getRole()}</h5></span>
                   </div>
                   <div class="card-body">
                      <ul class="list-group list-group-flush border border-primary">
                         <li class="list-group-item text-center"><i class="fas fa-id-card-alt">: </i>${x.id}</li>
                         <li class="list-group-item text-center"><i class="fas fa-envelope">: </i><a href="mailto:${x.email}@email.com">${x.email}</a></li>
                         <li class="list-group-item text-center"><i class="fab fa-github">: </i><a href="https://www.github.com/${x.github}" target="_blank">${x.github}</a></li>
                       </ul>
                   </div>
               </div>
             </div>
            `;
          }).join('')}
       `;
    };
 };
 
 //generate html for the Intern
 const generateVcardsInt = (dataInt) => {
    if(dataInt){
       return `
          
          ${dataInt.map(x => {
             return `
             <div class="col-sm-12 col-md-6 col-lg-4 mt-2">
                <div class="card">
                   <div class="header bg-primary text-center text-white">
                     <h5>${x.name}</h5>
                     <span class="d-flex justify-content-center"><i class="fa fa-laptop" aria-hidden="true"></i><h5>${x.getRole()}</h5></span>
                   </div>
                   <div class="card-body">
                     <ul class="list-group list-group-flush border border-primary">
                       <li class="list-group-item text-center"><i class="fas fa-id-card-alt">: </i>${x.id}</li>
                       <li class="list-group-item text-center"><i class="fas fa-envelope">: </i><a href="mailto:${x.email}@email.com">${x.email}</a></li>
                       <li class="list-group-item text-center"><i class="fas fa-school">: </i>${x.school}</li>
                     </ul>
                   </div>
                </div>
             </div>
             `
          })}
       `
    }
 };
 
 
 //base html and manager html
 module.exports = (templateData) => {
    console.log(templateData);
    const {manager,engineer,intern} = templateData;
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
        <title>Document</title>
    
    </head>
    
    <body>
        <nav class="navbar navbar-dark bg-dark">
              <span class="text-white navbar-text">My Team</span>
        </nav>
        <main>
            <div class="container">
                <div class="row mt-4">
                   <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                       <div class="card">
                         <div class="header bg-primary text-center text-white">
                            <h5>${manager.name}</h5>
                            <span class="d-flex justify-content-center"><i class="fas fa-mug-hot" aria-hidden="true"></i><h5>${manager.getRole()}</h5></span>
                         </div>
                       <div class="card-body">
                          <ul class="list-group list-group-flush border border-primary">
                              <li class="list-group-item text-center"><i class="fas fa-id-card-alt">: </i>${manager.id}</li>
                              <li class="list-group-item text-center"><i class="fas fa-envelope">: </i><a href="mailto:${manager.email}@email.com">${manager.email}</a></li>
                              <li class="list-group-item text-center"><i class="fas fa-phone">: </i>${manager.offNumber}</li>
                          </ul>
                       </div>
                     </div>
                  </div>
                </div>
                <div class="row mt-4">
                    ${generateVcardsEng(engineer)}
                    ${generateVcardsInt(intern)}
                </div>
            </div>
          
        </main>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>
    `
 };