import React from 'react'

export default function AdminNav() {
  React.useEffect(() => {
    let links = document.querySelectorAll('a.nav-link');
   
    if(window.location.pathname=="/admin/ImportExport"){
      links[0].classList.remove('active');
      links[2].classList.remove('active');
      links[3].classList.remove('active');
      links[4].classList.remove('active');
      links[5].classList.remove('active');
      links[1].classList.add('active');
      links[6].classList.remove('active');
      }
      if(window.location.pathname=="/admin/"){
        links[1].classList.remove('active');
        links[2].classList.remove('active');
        links[3].classList.remove('active');
        links[4].classList.remove('active');
        links[5].classList.remove('active');
        links[0].classList.add('active');
        links[6].classList.remove('active');
        }
        if(window.location.pathname=="/admin/preprocess"){
          links[1].classList.remove('active');
        links[0].classList.remove('active');
        links[3].classList.remove('active');
        links[4].classList.remove('active');
        links[5].classList.remove('active');
        links[2].classList.add('active');
        links[6].classList.remove('active');
          }
          if(window.location.pathname=="/admin/adminnotifications"){
            links[1].classList.remove('active');
          links[0].classList.remove('active');
          links[3].classList.remove('active');
          links[4].classList.remove('active');
          links[2].classList.remove('active');
          links[6].classList.add('active');
          links[5].classList.remove('active');
            }
            if(window.location.pathname=="/admin/modeltraining"){
              links[1].classList.remove('active');
            links[0].classList.remove('active');
            links[3].classList.add('active');
            links[4].classList.remove('active');
            links[2].classList.remove('active');
            links[5].classList.remove('active');
            links[6].classList.remove('active');
              }
              if(window.location.pathname=="/admin/makeprediction"){
              links[1].classList.remove('active');
              links[0].classList.remove('active');
              links[4].classList.add('active');
              links[3].classList.remove('active');
              links[2].classList.remove('active');
              links[5].classList.remove('active');
              links[6].classList.remove('active');
                }
                if(window.location.pathname=="/admin/usermanagement"){
                  links[1].classList.remove('active');
                  links[0].classList.remove('active');
                  links[4].classList.remove('active');
                  links[3].classList.remove('active');
                  links[2].classList.remove('active');
                  links[6].classList.remove('active');
                  links[5].classList.add('active');
                    }

  
  }, []);
  return (
    <div style={{width: '80%', marginLeft: '10%', marginTop: '2%',background:'#D4D4D4'}}>
       <nav className="nav nav-tabs nav-pills nav-fill">
  <a id="nav-view" className="nav-link" aria-current="page" href="/admin/">View Data</a>
  <a id="nav" className="nav-link"  href="/admin/ImportExport">Import/Export Data</a>
  <a id="nav" className="nav-link" href="/admin/preprocess">Preprocess Data</a>
  <a id="nav" className="nav-link" href="/admin/modeltraining">Model Training</a>
  <a id="nav" className="nav-link" href="/admin/makeprediction">Model Testing</a>
  <a id="nav" className="nav-link" href="/admin/usermanagement">User Management</a>
  <a id="nav" className="nav-link" href="/admin/adminnotifications">Notifications</a>
  
</nav>
</div>
  )
}
