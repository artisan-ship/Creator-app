productImage = "url('https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?v=1530129318')";

productTitle = 'Test Product';
productPrice = '$10,00';
productVendor = 'Test Vendor';

document.getElementById("product-image").style.backgroundImage = productImage;
document.getElementById("product-title").innerHTML = productTitle;
document.getElementById("product-price").innerHTML= productPrice;
document.getElementById("product-vendor").innerHTML= productVendor;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
