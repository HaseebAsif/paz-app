import React from 'react'
import PazzIcon from '../../images/pazzive-icon.svg'
import Gmail from '../../images/gmail.svg'
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Tiktok from '../../images/tiktok.svg'
import Farm from '../../images/farm.svg'
import Instagram from '../../images/instagram.svg'
import Reddit from '../../images/reddit.svg'
import Telegram from '../../images/telegram.svg'
import Discord from '../../images/discord.svg'
import FuzionSealUpdated from '../../images/fuzion-seal-updated.svg'

const Footer = () => {
  return (
    <section class="footer-section position-relative">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-6">
            <img src={PazzIcon} alt="pazz logo" class="footer-logo hover-magnify" />
            <p class="footer-txt pt-3">
              Copyright © 2021
              <a class="color-white" href="https://www.fuzion.team/" target="_blank">
                FuzionChain.
              </a>
              All Rights Reserved.
            </p>
            <ul class="d-flex">
              <li class="mx-1">
                <a target="_blank" href="mailto:team@teslasafe.finance">
                  <img src={Gmail} alt="gmail" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://twitter.com/fuzionchain">
                  <img src={Twitter} alt="twitter" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.facebook.com/FuzionChain/">
                  <img src={Facebook} alt="facebook" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.tiktok.com/@fuzionchain">
                  <img src={Tiktok} alt="ticktok" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://ricefarm.fi/">
                  <img src={Farm} alt="Farm" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.instagram.com/fuzionchain/">
                  <img src={Instagram} alt="instagram" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.reddit.com/r/TeslaSafe">
                  <img src={Reddit} alt="reddit" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://t.me/fuzionchain">
                  <img src={Telegram} alt="telegram" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://discord.gg/24uAPzKYFu">
                  <img src={Discord} alt="discord" class="hover-magnify footer-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <img src={FuzionSealUpdated} alt="Fuzion Seal Logo" class="fuzion-seal-logo hover-magnify" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
