import PricingCard from "./PricingCard";
import Data from "../Data/PriceData";
import { AiOutlineArrowRight } from "react-icons/ai";
import priceVector from "../assets/vectors/Ecommerce.png";
import { useState } from "react";
import GetQuote from "./GetQuote";
import PriceTabs from "./PriceTabs";

const Pricing = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <div className=" flex justify-center items-center">
      <div>
        <div class="wrapper">
          <input type="radio" name="slider" id="tab-1" />
          <input type="radio" name="slider" id="tab-2" checked />
          <input type="radio" name="slider" id="tab-3" />
          <header>
            <label for="tab-1" class="tab-1">
              Basic
            </label>
            <label for="tab-2" class="tab-2">
              Standard
            </label>
            <label for="tab-3" class="tab-3">
              Team
            </label>
            <div class="slider"></div>
          </header>
          <div class="card-area">
            <div class="cards">
              <div class="row row-1">
                <div class="price-details">
                  <span class="price">19</span>
                  <p>For beginner use</p>
                </div>
                <ul class="features">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>100 GB Premium Bandwidth</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      FREE 50+ Installation Scripts WordPress Supported
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      One FREE Domain Registration .com and .np extensions only
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Unlimited Email Accounts & Databases</span>
                  </li>
                </ul>
              </div>
              <div class="row">
                <div class="price-details">
                  <span class="price">99</span>
                  <p>For professional use</p>
                </div>
                <ul class="features">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Unlimited GB Premium Bandwidth</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      FREE 200+ Installation Scripts WordPress Supported
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      Five FREE Domain Registration .com and .np extensions only
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Unlimited Email Accounts & Databases</span>
                  </li>
                </ul>
              </div>
              <div class="row">
                <div class="price-details">
                  <span class="price">49</span>
                  <p>For team collaboration</p>
                </div>
                <ul class="features">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>200 GB Premium Bandwidth</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      FREE 100+ Installation Scripts WordPress Supported
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>
                      Two FREE Domain Registration .com and .np extensions only
                    </span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Unlimited Email Accounts & Databases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button>Choose plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
