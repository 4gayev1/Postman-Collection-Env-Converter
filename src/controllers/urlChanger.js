function changeCollectionUrls(collectionJson) {
  try {
    function changeUrls(requests) {
      if (requests.item) {
        changeUrls(requests.item);
      } else {
        if (Array.isArray(requests)) {
          requests.map((request) => {
            const urlData = request.request.url;
            const urlParts = urlData.raw.split("/");
            const path = "/" + urlParts.slice(3).join("/");

            urlData.raw = `{{envSubdomain}}{{baseURL}}${path}`;
            urlData.host = ["{{envSubdomain}}{{baseURL}}"];
          });
        } else {
          const urlData = requests.request.url;
          const urlParts = urlData.raw.split("/");
          const path = "/" + urlParts.slice(3).join("/");

          urlData.raw = `{{envSubdomain}}{{baseURL}}${path}`;
          urlData.host = ["{{envSubdomain}}{{baseURL}}"];
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
