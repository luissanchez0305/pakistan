<section class="section-page smaller-card-xs">
  <div class="container">
    <div class="row">
      <div class="offset-lg-2 col-12 col-sm-12 col-md-12 col-lg-8">
        <div class="col-md-12">
          <a class="btn btn-secondary mb-4" href="/assets">Assets</a>
          <div class="card-info-dark text-center">
            <div class="card card-limit-zero">
              <div class="card-body">
                <div
                  class="flex section-img section-tablet section-tablet-null-border"
                >
                  <span
                    ><img
                      class="img-table-profile "
                      src="src/img/etf-500.png"
                      alt=""
                  /></span>
                  <div
                    style="flex-grow: 2; text-align: left;
                          "
                    class="pt-2 pl-2 sb-font"
                  >
                    <strong><h5>ETF S&P 500 Volatility</h5></strong>
                  </div>
                  <div>
                    <h6><strong>159,98 USD</strong></h6>
                    <br />
                    <small
                      style="color: rgb(22, 199, 98); margin-top: -25px; display: block;"
                      >+0,12%</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 card-info-dark">
          <h5 class="mb-2">
            Trading
          </h5>
          <div class="card card-noLimit">
            <div class="card-body card-noLimit">
              <a class="btn btn-primary btn-block" href="#">
                <h6>Forex Trading</h6>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="price-tab"
                data-toggle="tab"
                href="#price"
                role="tab"
                aria-controls="price"
                aria-selected="true"
                >Price History</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="false"
                >Trading Conditions</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="schedule-tab"
                data-toggle="tab"
                href="#schedule"
                role="tab"
                aria-controls="schedule"
                aria-selected="false"
                >Schedule</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="about-tab"
                data-toggle="tab"
                href="#about"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="forecast-tab"
                data-toggle="tab"
                href="#forecast"
                role="tab"
                aria-controls="forecast"
                aria-selected="false"
                >Forecast</a
              >
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="price"
              role="tabpanel"
              aria-labelledby="price-tab"
            >
              <div class="text-right tabs-lip">
                <div
                  class="btn-group btn-group-sm pt-3 pb-3"
                  role="group"
                  aria-label="Small button group"
                >
                  <button type="button" class="btn btn-outline-primary">
                    1h
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    1D
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    1W
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    1M
                  </button>
                </div>
              </div>
              <div class="chart-container">
                <canvas id="chart-price"></canvas>
              </div>
              <div class="text-center">
                <div class="pt-3 pb-3 text-center tabs-lip">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary btn-sm"
                  >
                    Price Change
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Min / Max
                  </button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="mt-3">Show trade amount in</h3>
              <div class="text-right">
                <div
                  class="btn-group btn-group-sm pt-3 pb-3"
                  role="group"
                  aria-label="Small button group"
                >
                  <button type="button" class="btn btn-outline-primary">
                    USD
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    EUR
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    BRL
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    RUB
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h6>Forex</h6>
                  <small>
                    <strong>Commisions</strong>
                  </small>
                  <table class="table small-table">
                    <tbody>
                      <tr>
                        <td class="ligth-p">
                          Minimum commission for opening a trade
                        </td>
                        <td class="text-right">0,02 %</td>
                      </tr>
                      <tr>
                        <td class="ligth-p">Maximum overnight fee</td>
                        <td class="text-right">
                          0,02 %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <small>
                    <strong>Commisions</strong>
                  </small>
                  <table class="table small-table">
                    <tbody>
                      <tr>
                        <td class="ligth-p">
                          Minimum commission for opening a trade
                        </td>
                        <td class="text-right">0,02 %</td>
                      </tr>
                      <tr>
                        <td class="ligth-p">Maximum overnight fee</td>
                        <td class="text-right">
                          0,02 %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-md-6">
                  <h6>Fixed Time</h6>
                  <small>
                    <strong>Trade Restrictions</strong>
                  </small>
                  <table class="table small-table">
                    <tbody>
                      <tr>
                        <td class="ligth-p">
                          Minimum commission for opening a trade
                        </td>
                        <td class="text-right">0,02 %</td>
                      </tr>
                      <tr>
                        <td class="ligth-p">Maximum overnight fee</td>
                        <td class="text-right">
                          0,02 %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="schedule"
              role="tabpanel"
              aria-labelledby="schedule-tab"
            >
              <h6 class="mt-3">Today's Trading Session</h6>
              <br />
              <h6>Trading Calendar</h6>
              <h6>Octubre de 2020</h6>
              <div id="calendar"></div>
            </div>
            <div
              class="tab-pane fade"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h3 class="mb-3 mt-3">3M Company</h3>
              <div class="row">
                <div class="col-12">
                  <div class="card-info-dark mini-auto">
                    <a href="assets-details">
                      <div class="card smaller-card left-img-assets">
                        <div class="card-body">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>Initial price</td>
                                <td class="text-right">1,57590</td>
                              </tr>
                              <tr>
                                <td>Forecast</td>
                                <td class="text-right">
                                  <strong style="color: rgb(22, 199, 98);">
                                    1,56630 - 1,57590
                                  </strong>
                                </td>
                              </tr>
                              <tr>
                                <td>within the next</td>
                                <td class="text-right">
                                  10 d : 05 h : 52 min: 21 s
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <p>
                One of the biggest chemical conglomerates. Among other things,
                it produces consumer and medical goods. It was the 3M Company
                that developed the transparent adhesive tape, copying machine
                and even the technology of intraoral 3D scanning. The company
                has offices and production facilities in 70 countries. Its
                annual sales amount to tens of billions of US dollars.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="forecast"
              role="tabpanel"
              aria-labelledby="forecast-tab"
            >
              <div class="card-info-dark mt-3">
                <a href="assets-details">
                  <div class="card smaller-card left-img-assets">
                    <div class="card-body">
                      <img src="src/img/etf-500.png" alt="" />
                      <h5 class="card-title">ETF S&amp;P 500 Volatility</h5>
                      <table class="table">
                        <tbody>
                          <tr>
                            <td style="color:rgb(22, 199, 98)">
                              Expected rise of
                            </td>
                            <td
                              style="color:rgb(22, 199, 98)"
                              class="text-right"
                            >
                              <strong>
                                +1,51 %
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p class="card-text">
                        Buy now in order to sell with a profit at
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <small class="ligth-p">
                Risk Disclosure Statement The price forecast is based on the
                historical trend dynamics and the asset price seasonality. The
                forecast may inform you about the prevailing market trend, but
                it does not guarantee a positive result of your trades. We
                disclaim all liability for your actions taken based on the
                forecast.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
