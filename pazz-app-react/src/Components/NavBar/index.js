import React from "react";

const NavBar = () => {
  return (
    <div class="custom-container">
      <nav class="navbar navbar-expand-md fixed-top">
        <a class="navbar-brand" href="#">
          <img src="./assets/img/pazzive-logo.svg" alt="Pazzive Logo" />
        </a>
        <button
          class="navbar-toggler"
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
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto mt-2">
            <li class="nav-item">
              <a class="metamask-btn" onclick="addToken()">
                <span>Add PAZ to Metamask</span>
              </a>
            </li>
            <li class="nav-item ml-2">
              <a class="price-btn" href="#">
                $0.258
              </a>
            </li>
            <li class="nav-item ml-2">
              <div class="btn-main connectBtn" style={{ marginTop: "-10px" }}>
                <span class="mas">Connect Wallet</span>
                <button onclick="connectAccount()" type="button" name="Hover">
                  Connect Wallet
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
