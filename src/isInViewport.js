// https://gist.github.com/jjmu15/8646226
export default element => {
  if (!element) {
    return false;
  }

  if (
    document.visibilityState === undefined ||
    document.visibilityState !== "visible"
  ) {
    return false;
  }

  if (element.style.display === "none") {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
};
