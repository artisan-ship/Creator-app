// Object we’re working with
var dataObject = {
  0: {"productId":1,"productTitle":"product 1","productPrice":"$10,00","productVendor":"vendor 1","productImage":"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?v=1530129318"},
  1: {"productId":2,"productTitle":"product 2","productPrice":"$15,00","productVendor":"vendor 1","productImage":"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-4_large.png?v=1530129360"},
  2: {"productId":2,"productTitle":"product 3","productPrice":"$20,00","productVendor":"vendor 1","productImage":"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458"}

};

// Cache of the template
var template = document.getElementById("template-list-item");
// Get the contents of the template
var templateHtml = template.innerHTML;
// Final HTML variable as empty string
var listHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (var key in dataObject) {
  listHtml += templateHtml.replace(/{{productId}}/g, dataObject[key]["productId"])
                          .replace(/{{productTitle}}/g, dataObject[key]["productTitle"])
                          .replace(/{{productPrice}}/g, dataObject[key]["productPrice"])
                          .replace(/{{productVendor}}/g, dataObject[key]["productVendor"])
                          .replace(/{{productImage}}/g, dataObject[key]["productImage"]);
}

// Replace the HTML of #list with final HTML
document.getElementById("list").innerHTML = listHtml;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";


}
