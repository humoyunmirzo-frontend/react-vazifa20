import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="d-flex topSection bg-white sticky-top border-bottom border-danger border-3 justify-content-between align-items-center p-3">
        <a href="#" className='btn btn-light border-light text-secondary'><i className="fas fa-arrow-left"></i> Overview page</a>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button className="btn-light btn activeBtn rounded-circle"><i className="fas fa-desktop"></i></button>
          <button className="btn-light btn rounded-circle"><i className="fas fa-tablet"></i></button>
          <button className="btn-light btn rounded-circle"><i className="fas fa-mobile"></i></button>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button className="btn"><i className="fab fa-github"></i></button>
          <button className="btn text-danger bg-light rounded-3"><i className="fas fa-download"></i> Free Download</button>
          <button className="btn btn-outline-light text-secondary  rounded-circle"><i className="fas fa-close"></i></button>
        </div>
      </div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-light py-5 text-center border-bottom mb-3">
          <h1 className="fw-bolder pt-4 pb-1">Welcome to Blog Home!</h1>
          <div className="lead pb-4">A Bootstrap 5 starter layout for your next blog homepage</div>
        </div>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="row border-bottom pb-4 gx-4 gy-4">
                <div className="col-12">
                  <div className="card">
                    <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title">Featured Post Title</h2>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                      <a href="#" className="btn btn-primary">Read more <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h5 className="card-title">Post title</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                      <a href="#" className="btn btn-primary">Read more <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h5 className="card-title">Post title</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                      <a href="#" className="btn btn-primary">Read more <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h5 className="card-title">Post title</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                      <a href="#" className="btn btn-primary">Read more <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h5 className="card-title">Post title</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam</p>
                      <a href="#" className="btn btn-primary">Read more <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-header">Search</div>
                <div className="card-body">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">Categories</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#!">Web Design</a></li>
                        <li><a href="#!">HTML</a></li>
                        <li><a href="#!">Freebies</a></li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#!">JavaScript</a></li>
                        <li><a href="#!">CSS</a></li>
                        <li><a href="#!">Tutorials</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">Side Widget</div>
                <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
              </div>
            </div>
          </div>
          <nav aria-label="Pagination">
            <ul className="pagination justify-content-center my-4">
              <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
              <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
              <li className="page-item"><a className="page-link" href="#!">2</a></li>
              <li className="page-item"><a className="page-link" href="#!">3</a></li>
              <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
              <li className="page-item"><a className="page-link" href="#!">15</a></li>
              <li className="page-item"><a className="page-link" href="#!">Older</a></li>
            </ul>
          </nav>
        </div>
      </main>
      <footer>
        <div className="bg-dark py-5 text-center">
          <p className='text-white'>Copyright © Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
