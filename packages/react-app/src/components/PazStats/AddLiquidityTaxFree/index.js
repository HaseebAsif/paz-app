import React, { useState } from 'react'
import PazziveIcon from '../../../images/pazzive-icon.svg'
import Arrow from '../../../images/arrow.svg'
import BNCIcon from '../../../images/bnc-icon-circle.svg'


const AddLiquidityTaxFree = () => {
  const [CurrencyToggle, setCurrencyToggle] = useState(true)

  return (
    <div class="col-md-6 mt-3">
      <div class="stat-card">
        <div class="media-body pt-3">
          <p class="stat-card-subheading mb-3">Add Liquidity Tax Free Section</p>
          <div
            className={`your-stat-card-1 d-flex ${CurrencyToggle ? 'flex-column' : 'flex-column-reverse'}`}
            style={{ height: 'auto' }}
          >
            <div className="media mt-0">
              <div className="media-body pt-3 d-flex ">
                <img style={{ width: '37%' }} src={PazziveIcon} alt="" />

                <p className="your-stat-subheading liquidity-subheading mb-0 ml-2 d-flex flex-column">
                  PAZ <span>Bal 0</span>
                </p>
              </div>
              <input type="number" className="add-liquidity-amount mt-3 w-75" placeholder="100.00" />
            </div>

            <div className="d-flex justify-content-center mt-2">
              <img src={Arrow} onClick={() => setCurrencyToggle(!CurrencyToggle)} />
            </div>

            <div className="media mt-0">
              <div className="media-body pt-3 d-flex ">
                <img style={{ width: '37%' }} src={BNCIcon} alt="" />

                <p className="your-stat-subheading liquidity-subheading mb-0 ml-2 d-flex flex-column">
                  BNB <span>Bal 0</span>
                </p>
              </div>
              <input type="number" className="add-liquidity-amount mt-3 w-75" placeholder="2000.00" />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <p class="stat-card-subheading ">Total liquidity pool</p>
            <p class="stat-card-subheading ">1 USDC = 0.949535 USDT</p>
          </div>
          <div className="d-flex justify-content-between">
            <p class="stat-card-subheading ">Mininmum recieved</p>
            <p class="stat-card-subheading ">0.949535 USDT</p>
          </div>
          <div className="d-flex justify-content-between">
            <p class="stat-card-subheading ">Slippage</p>
            <p class="stat-card-subheading slippage-count ">5.05%</p>
          </div>
        </div>
        <div>
          <p className="be-aware-txt">Please be aware of the high price impact</p>
          <div className="d-flex justify-content-between">
            <button className="liquidity-approve-btn">Approve</button>
            <button className="insufficient-balance-btn">Insufficient Balance</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddLiquidityTaxFree
