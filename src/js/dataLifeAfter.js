let container = document.querySelector(".product-wrapper");
let form = document.getElementById("top-up-form");
const serverSelect = document.getElementById("server");

let item, price;
const dataLifeAfter = [
  {
    title: "65 Credits",
    harga: "Rp. 15.000",
  },
  {
    title: "330 Credits",
    harga: "Rp. 70.000",
  },
  {
    title: "558 Credits",
    harga: "Rp. 115.000",
  },
  {
    title: "1180 Credits",
    harga: "Rp. 215.000",
  },
  {
    title: "2286 Credits",
    harga: "Rp. 425.000",
  },
  {
    title: "3468 Credits",
    harga: "Rp. 665.000",
  },
  {
    title: "5768 Credits",
    harga: "Rp. 1.060.000",
  },
  {
    title: "7768 Credits",
    harga: "Rp. 1.412.000",
  },
];
dataLifeAfter.forEach((item) => {
  // Create the container div
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  // Create the radio input
  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = "credits";
  radioInput.id = item.title; 
  radioInput.value = item.title; 

  // Create the radio-tile div
  const radioTile = document.createElement("div");
  radioTile.classList.add("radio-tile");

  // Create the label
  const label = document.createElement("label");
  label.htmlFor = item.title; 

  // Create the title paragraph
  const titleParagraph = document.createElement("p");
  titleParagraph.textContent = item.title;

  
  // Create the harga paragraph
  const hargaParagraph = document.createElement("p");
  hargaParagraph.textContent = item.harga;
  hargaParagraph.classList.add("harga");

  // Append the title and harga paragraphs to the label
  label.appendChild(titleParagraph);
  label.appendChild(hargaParagraph);

  // Append the label to the radio-tile div
  radioTile.appendChild(label);

  // Append the radio input and radio-tile div to the inputContainer div
  inputContainer.appendChild(radioInput);
  inputContainer.appendChild(radioTile);
  
  

  // Append the inputContainer div to the container
  container.appendChild(inputContainer);
  radioInput.addEventListener("click", function () {
    title = item.title;
    price = item.harga;
    
    document.getElementById("form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(title);
    console.log(price);
  });
});

 

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  let id = document.getElementById("player-id").value;
  let server = serverSelect.value;
// Get the selected radio input (kategori)
let selectedRadioInput = document.querySelector('input[name="credits"]:checked');
// Check if kategori is not selected
if (!selectedRadioInput) {
 alert("Mohon pilih kategori top-up terlebih dahulu.");
 return;
}
// Validate the form fields
   if (!id) {
    alert("Mohon masukkan Player Account ID Anda.");
    return;
  }
  // Check if server is not selected
  if (server === "") {
    alert("Mohon pilih server terlebih dahulu.");
    return;
  }


  // If the form is valid, create the WhatsApp message
  const message = `Halo, saya ingin top-up akun LifeAfter saya dengan detail sebagai berikut:\nPlayer ID: ${id}\nServer: ${server}\nKategori: ${selectedRadioInput.value}\nHarga: ${price}`;

  // Encode the message for a WhatsApp URL
  const encodedMessage = encodeURIComponent(message);

  console.log(message);

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/6281213016169?text=${encodedMessage}`;

  // Open WhatsApp in a new tab with the pre-filled message
  window.open(whatsappURL, "_blank");

  // Reset the form after submission
  form.reset();

  // Uncheck the selected radio input (reset category selection)
  selectedRadioInput.checked = false;
});
