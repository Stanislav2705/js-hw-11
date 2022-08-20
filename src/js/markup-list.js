function createGallery({
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  const markup = `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div>`;
  return markup;
}

function generateContentGallery(data) {
  return data.reduce((acc, item) => acc + createGallery(item), '');
}

export { generateContentGallery };
