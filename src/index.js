import {
  adUnits,
  dfpCurrency,
  priceGranularity,
  publisherName,
  pubwiseSite
} from "./sites/SITE_TO_REPLACE";
import BBGMAds from "./BBGMAds";
import cmpFactory from "./vendor/cmpFactory";

cmpFactory(publisherName);

const queue =
  window.bbgmAds && window.bbgmAds.cmd && Array.isArray(window.bbgmAds.cmd)
    ? window.bbgmAds.cmd
    : [];

const bbgmAds = new BBGMAds(queue, {
  adUnits,
  dfpCurrency,
  priceGranularity,
  pubwiseSite
});

export default bbgmAds;
