import React from "react";
import { useWeb3Context } from "../../contexts/ConnectWeb3";
import PazzDropdown from "../../components/PazDropDown";
import AddLiquidityTaxFree from "./AddLiquidityTaxFree/index";
import MobileIcon from "../../images/mobile-icon.svg";
import RewardIcon from "../../images/reward-icon.svg";
import GiftIcon from "../../images/gift-icon.svg";
import TaxIcon from "../../images/tax-icon.svg";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import WalletButton from "../ConnectButton";

const YourStatsSection = () => {
  const { isConnect } = useWeb3Context();
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  return (
    <section className="your-stat-section">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-12">
            <p className="section-heading">YOUR STATS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card-1">
              <div className="media">
                <img className="mr-3" src={MobileIcon} alt="mobile-icon" />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading">Total PAZ Holdings</p>
                  {!isConnect ? (
                    <h5 className="your-stat-heading mt-0">
                      Connect wallet to view
                    </h5>
                  ) : (
                    <>
                      <h5 className="your-stat-heading mt-2 color-white">
                        510,301,281
                      </h5>
                      <p className="color-white">$43,253</p>
                    </>
                  )}
                </div>
              </div>
              {!isConnect ? (
                <a href="" className="buy-btn mt-3 is-disabled">
                  Buy $PAZ
                </a>
              ) : (
                <a href="" className="buy-btn-2 is-disabled">
                  Buy $PAZ
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card-2">
              <div className="media">
                <img className="mr-3" src={RewardIcon} alt="reward-icon" />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading">Total BUSD Paid</p>
                  {!isConnect ? (
                    <h5 className="your-stat-heading mt-0">
                      Connect wallet to view
                    </h5>
                  ) : (
                    <>
                      <h5 className="your-stat-heading mt-2 color-white">
                        53.254
                      </h5>
                      <p className="color-white">$3,253</p>
                    </>
                  )}
                </div>
              </div>
              {!isConnect ? (
                <div
                  className="btn-main mt-3"
                  style={{ width: "100%", height: "46px" }}
                >
                  <span className="mas">Connect Wallet</span>
                  <WalletButton
                    type="button"
                    name="Hover"
                    style={{ background: "#4a4a4a8c" }}
                    provider={provider}
                    loadWeb3Modal={loadWeb3Modal}
                    logoutOfWeb3Modal={logoutOfWeb3Modal}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {!isConnect ? (
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-3">
              <div className="stat-card">
                <div className="media">
                  <img className="mr-3 mt-2" src={GiftIcon} alt="gift-icon" />
                  <div className="media-body pt-3">
                    <p className="stat-card-subheading mb-0">
                      Pending BUSD Rewards
                    </p>

                    <p className="stat-card-heading">Connect wallet to view</p>
                  </div>
                </div>
                <div className="btn-main card-connect-btn">
                  <span className="mas">Connect Wallet</span>
                  <WalletButton
                    type="button"
                    name="Hover"
                    provider={provider}
                    loadWeb3Modal={loadWeb3Modal}
                    logoutOfWeb3Modal={logoutOfWeb3Modal}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mt-3">
              <div className="stat-card">
                <div className="media">
                  <img className="mr-3 mt-2" src={TaxIcon} alt="tax-icon" />
                  <div className="media-body pt-3">
                    <p className="stat-card-subheading mb-0">
                      Current PAZ sell tax
                    </p>
                    <p className="stat-card-heading color-white">21.73%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <div className="pending-BUSD-part mt-3 col-lg-12 col-md-12">
                <div class="col-lg-12 col-md-12 mt-3 stats-pending-busd-rewards">
                  <div class="media">
                    <img class="mr-3 mt-2" src={GiftIcon} alt="gift-icon" />
                    <div class="media-body pt-3">
                      <p class="stat-card-subheading mb-0">
                        Pending BUSD Rewards
                      </p>
                      <p class="stat-card-heading color-white">3,254</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="claim-btn connect-claim-reward-button"
                  >
                    Claim Reward
                  </button>
                </div>
              </div>
              <div
                className="reinvest-reward col-lg-12 col-md-12 mt-0"
                style={{ paddingBottom: "150px" }}
              >
                <div className="col-lg-12 mt-3 reinvest-part">
                  <label className="pending-BUSD-label">
                    Automatically reinvest reward in
                  </label>
                  <form className="form-inline approve-form align-items-baseline">
                    <div className="pazz-app-dropdown-menu mt-3">
                      <PazzDropdown />
                    </div>
                    <input
                      type="submit"
                      className="form-control is-disabled mt-3"
                      value="Save Changes"
                    />
                  </form>
                </div>
              </div>

              <div
                className="pending-BUSD-part mt-3 col-lg-12 col-md-12"
                style={{ height: "auto", borderRadius: "11px  " }}
              >
                <div className="col-lg-12 col-md-12 mt-3">
                  <label className="reinvest-label mt-3 text-center">
                    Reinvest reward (Avalaible BUSD 40,000)
                  </label>
                  <form className="form-inline approve-form reinvest-reward-form d-flex justify-content-center align-items-center flex-column dropdown-select-form col-lg-12 col-md-12">
                    <div
                      className="pazzive-drop-down-menu"
                      style={{ width: "inherit" }}
                    >
                      <PazzDropdown />
                    </div>
                    <input
                      type="number"
                      className="reinvest-amount mt-3"
                      placeholder="Enter amount to reinvest tax-free"
                    />
                    <input
                      type="submit"
                      className="form-control is-disabled mt-3"
                      style={{ width: "inherit" }}
                      value="Re-Invest"
                    />
                  </form>
                </div>
              </div>
            </div>
            <AddLiquidityTaxFree />
          </div>
        )}
      </div>
      <div className="sell-tax mt-3">
        <div className="row">
          <div className="col-md-12">
            <p className="sell-tax-percentage mb-0">Sell Tax: 45%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStatsSection;
