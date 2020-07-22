import * as pubsub from "../index";
// <li><img src="<%= item.media.m %>"/></li>

// Pre-compile template and "cache" it using closure
const $lastQuery = document.getElementById("lastQuery");
const $searchResults = document.getElementById("searchResults");
const $flickrSearch = <HTMLFormElement>document.getElementById("flickrSearch");
const $query = <HTMLInputElement>document.getElementById("query");

// Subscribe to the new search tags topic
pubsub.subscribe("/search/tags", function (e, tags) {
  console.log("subscribe tags", tags);
  // $("#lastQuery").html("<p>Searched for:<strong>" + tags + "</strong></p>");
});

// Subscribe to the new results topic
pubsub.subscribe("/search/resultSet", function (e, results) {
  console.log("results", results);
  // $("#searchResults").empty().append(resultTemplate(results));
});

// Submit a search query and publish tags on the /search/tags topic
$flickrSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const tags = $query.value.trim();

  if (!tags) {
    return;
  }

  console.log("submit tags", tags);

  pubsub.publish("/search/tags", [tags]);
});

// Subscribe to new tags being published and perform
// a search query using them. Once data has returned
// publish this data for the rest of the application
// to consume

pubsub.subscribe("/search/tags", function (e, tags) {
  (async () => {
    console.log("subscribe tags", tags);
    const response = await fetch("http://api.flickr.com/services/feeds/photos_public.gne");

    console.log("response", response);
  })();

  // pubsub.publish("/search/resultSet", { items: data.items });
});
