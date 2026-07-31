document.addEventListener('DOMContentLoaded', function () {
  var mainImage = document.getElementById('product-main-image');
  var thumbnails = document.querySelectorAll('[data-product-thumbnail]');
  var quantityInput = document.getElementById('product-quantity');

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      if (!mainImage) return;

      mainImage.src = thumbnail.getAttribute('data-full-image');
      mainImage.alt = thumbnail.getAttribute('data-image-alt');
      thumbnails.forEach(function (item) { item.classList.remove('is-active'); });
      thumbnail.classList.add('is-active');
    });
  });

  document.querySelectorAll('[data-quantity-change]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!quantityInput) return;

      var quantity = parseInt(quantityInput.value, 10) || 1;
      quantity += button.getAttribute('data-quantity-change') === 'increase' ? 1 : -1;
      quantityInput.value = Math.max(1, quantity);
    });
  });
});
