import adUnitsAll from "./adUnits/SITE_TO_REPLACE";
import BBGMAds from "./BBGMAds";

const queue =
  window.bbgmAds && window.bbgmAds.cmd && Array.isArray(window.bbgmAds.cmd)
    ? window.bbgmAds.cmd
    : [];

const bbgmAds = new BBGMAds(queue, adUnitsAll);

export default bbgmAds;
