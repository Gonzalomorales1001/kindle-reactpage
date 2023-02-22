import React from 'react'

const CardApp = ({item,darkMode}) => {
  return (
  <div className="col-12 col-md">
    <div className={`card ${darkMode&&"text-bg-dark"}`}>
      <div className="card-body d-flex flex-column align-items-center">
      <i className={`fa ${item.icono} ${darkMode?"text-secondary":"text-dark"} fa-4x`} aria-hidden="true"></i>
      <p className="text-muted fs-3 fs-md-2">{item.texto1}</p>
      <p className="text-muted">{item.texto2}</p>
      </div>
    </div>
  </div>
  )
}

export default CardApp