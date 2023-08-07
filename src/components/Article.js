import React from "react";

function Article({ article }) {
  const { title, date, preview } = article;
  const minutesToRead = Math.ceil(preview.split(" ").length / 200);

  const coffeeEmoji = "☕️";
  const bentoBoxEmoji = "🍱";

  let readIndicator = "";

  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    readIndicator = coffeeEmoji.repeat(coffeeCups) + ` ${minutesToRead} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    readIndicator = bentoBoxEmoji.repeat(bentoBoxes) + ` ${minutesToRead} min read`;
  }

  const defaultDate = "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <small>{readIndicator}</small>
    </article>
  );
}

export default Article;