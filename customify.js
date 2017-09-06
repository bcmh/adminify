(function() {
  function getShopifyCustomifyLink() {
    var shopifyDomain =
        "//" +
        document.head
          .querySelector("#AdminifyShopifyUrl")
          .getAttribute("content"),
      shopifyContent = document.head.querySelector("#AdminifyShopifyEdit");
    themeId = document.head.querySelector("#CustomifyThemeID");

    return (
      shopifyDomain +
      "/admin/themes/" +
      themeId.getAttribute("content") +
      "/editor/#" +
      window.location.pathname
    );
  }
  window.open(getShopifyCustomifyLink(), "_adminify");
})();
