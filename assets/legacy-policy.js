(() => {
  const destination = document.currentScript.dataset.policyDestination;
  const target = new URL(destination, location.origin);
  target.search = location.search;
  target.hash = location.hash;
  location.replace(target.href);
})();
