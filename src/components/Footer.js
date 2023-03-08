import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <span> Cozy Cuddles </span>
      </div>

      <div className="footer__flexbox">

        <div className="footer__flexbox-item">
          <div className="footer__navigation">
            <ul className="footer__list">

              <li className="footer__item"><a href="
              https://developedbydrewford.netlify.app/" className="footer__link" target="_blank">
                Developed by Drewford</a></li>

              <li className="footer__item"><a href="https://www.adoptapet.com" className="footer__link" target="_blank">Adopt A Pet For Real</a></li>


            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="footer__flexbox-item">
          <div className="footer__copyright">
            <p>
              &copy;2023 by Cozy Cuddles. Webpage developed by <a href="https://developedbydrewford.netlify.app/" className="footer__link" target="_blank">Andrew Cook</a>. This website is intended to be recreational and a portfolio project. The pets featured on this website are happily housed by families.
            </p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer