import * as pubsub from "../index";

const $ratings = <HTMLDivElement>document.getElementById("ratings");
const $users = <HTMLDivElement>document.getElementById("users");

type UserType = {
  name: string;
};

pubsub.subscribe("/new/user", function (topic: string, data: UserType) {
  if (!data) {
    return;
  }
  const $row = document.createElement("p");
  $row.innerText = data.name;

  $users.appendChild($row);
});

type RatingType = {
  title: string;
  rating: string;
};
pubsub.subscribe("/new/rating", function (topic: string, data: RatingType) {
  if (!data) {
    return;
  }
  const $row = document.createElement("p");
  $row.innerText = `${data.title} - ${data.rating}`;

  $ratings.appendChild($row);
});

const $twitterHandle = <HTMLInputElement>document.getElementById("twitter_handle");
const $movieSeen = <HTMLInputElement>document.getElementById("movie_seen");
const $movieRating = <HTMLSelectElement>document.getElementById("movie_rating");

function handleAddNewUser(event: Event) {
  event.preventDefault();

  const strUser = $twitterHandle.value;
  const strMovie = $movieSeen.value;
  const strRating = $movieRating.value;

  pubsub.publish("/new/user", { name: strUser });

  pubsub.publish("/new/rating", { title: strMovie, rating: strRating });
}
document.getElementById("add").addEventListener("click", handleAddNewUser);
