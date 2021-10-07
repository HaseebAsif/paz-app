import React from "react";
import { useWeb3Context } from "../../contexts/ConnectWeb3";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import PazziveLogo from "../../images/pazzive-logo.svg";
import WalletButton from "../ConnectButton";

const NavBar = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const { isConnect } = useWeb3Context();
  return (
    <div className="custom-container">
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" href="#">
          <img src={PazziveLogo} alt="Pazzive Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"></path>
              </g>
            </g>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto mt-2">
            <li className="nav-item">
              <a className="metamask-btn">
                <span>Add PAZ to Metamask</span>
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="price-btn" href="#">
                $0.258
              </a>
            </li>
            <li className="nav-item ml-2">
              <div
                className="btn-main connectBtn"
                style={{ marginTop: "-10px" }}
              >
                {!isConnect ? (
                  <>
                    <span className="mas">Connect Wallet</span>
                    <WalletButton
                      type="button"
                      name="Hover"
                      provider={provider}
                      loadWeb3Modal={loadWeb3Modal}
                      logoutOfWeb3Modal={logoutOfWeb3Modal}
                    />
                  </>
                ) : (
                  <>
                    <span className="mas">Disconnect</span>
                    <button onClick={logoutOfWeb3Modal} name="Disconnect">
                      Disconnect
                    </button>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
