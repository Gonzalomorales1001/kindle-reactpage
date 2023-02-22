import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <footer className={`d-flex justify-content-evenly gap-3 gap-md-0 align-items-center p-5 flex-column flex-md-row ${darkMode?"bg-black text-light":"bg-secondary text-dark"}`}>
        <div>
            <h2><i className="fa fa-ravelry" aria-hidden="true"></i> Kindle</h2>
            <p><i className="fa fa-phone" aria-hidden="true"></i> +1 2 345 678-9101 </p>
            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> kindle@kindle.com </p>
        </div>
        <div>
            <h4 className="text-center">Nuestras Redes</h4>
            <div className="d-flex align-items-center justify-content-evenly gap-3 flex-column">
                <a className='nav-link d-block w-100 d-flex align-items-center justify-content-between gap-2'><i className="fa-3x fa fa-facebook-square" aria-hidden="true"></i> <span>facebook.com/kindle</span></a>
                <a className='nav-link d-block w-100 d-flex align-items-center justify-content-between gap-2'><i className="fa-3x fa fa-instagram" aria-hidden="true"></i> <span>instagram.com/kindle</span></a>
                <a className='nav-link d-block w-100 d-flex align-items-center justify-content-between gap-2'><i className="fa-3x fa fa-twitter-square" aria-hidden="true"></i> <span>twitter.com/kindle</span></a>
                <a className='nav-link d-block w-100 d-flex align-items-center justify-content-between gap-2'><i className="fa-3x fa fa-github-square" aria-hidden="true"></i> <span>github.com/kindle</span></a>
            </div>
        </div>
        <div>
            <h5 className='text-center'>Menu</h5>
            <hr />
            <a className='d-block my-3 text-center nav-link' href="">Contact</a>
            <a className='d-block my-3 text-center nav-link' href="">About</a>
            <a className='d-block my-3 text-center nav-link' href="">Terms & Conditions</a>
            <a className='d-block my-3 text-center nav-link' href="">Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer