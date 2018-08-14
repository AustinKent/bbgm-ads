import {
  adUnits,
  priceGranularity,
  pubwiseSite
} from "./sites/SITE_TO_REPLACE";
import BBGMAds from "./BBGMAds";

const queue =
  window.bbgmAds && window.bbgmAds.cmd && Array.isArray(window.bbgmAds.cmd)
    ? window.bbgmAds.cmd
    : [];

const bbgmAds = new BBGMAds(queue, {
  adUnits,
  priceGranularity,
  pubwiseSite
});

export default bbgmAds;
