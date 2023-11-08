import "./custom.css"

function Home(){
  return (
    <> 
     <>
  <title>Software Website</title>
  <nav className="navbar navbar-default">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          GreatApp
        </a>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </ul>
        
      </div>
      {/* /.navbar-collapse */}
    </div>
    {/* /.container */}
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div id="content">
          <h1>Upcoming App!</h1>
          <h3>
            Leggings venmo asymmetrical irony lyft.
            <br />
            <br /> Banh mi mustache food truck waistcoat williamsburg.
            <br /> Beard pork belly pour-over twee,
            <br />
            slow-carb cray quinoa scenester fam iPhone pitchfork.
          </h3>
          <hr />
          <button className="btn btn-default btn-lg">
            <i className="fa fa-cloud-download" aria-hidden="true" /> Download
            Now
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* SCRIPTS 
BOOTSTRAP ALWAYS NEEDS JQUERY RAN FIRST */}
</>

    </>
  )
}

export default Home;