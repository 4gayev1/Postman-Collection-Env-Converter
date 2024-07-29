function changeCollectionUrls(collectionJson) {

  function requestModifier(urlData){
    const urlParts = urlData.raw.split("/");
    const path = "/" + urlParts.slice(3).join("/");

    urlData.raw = `{{envSubdomain}}{{baseUrl}}${path}`;
    urlData.host = ["{{envSubdomain}}{{baseUrl}}"];
  }

  try {
    function changeUrls(requests) {
      if (requests.item) {
        changeUrls(requests.item);
      } else {
        if (Array.isArray(requests)) {
          requests.map((request) => {
            requestModifier(request.request.url);
          });
        } else {
          requestModifier(requests.request.url);
        }
      }
    }

    collectionJson.item.map((request) => changeUrls(request));

    console.log("Urls has been changed successfully");
    return collectionJson;
  } catch (e) {
    console.log("Something went wrong in urlChanger", e.message);
  }
}

module.exports = changeCollectionUrls;
