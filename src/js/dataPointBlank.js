let container = document.querySelector(".product-wrapper");
let form = document.getElementById("top-up-form");
let item, price;
const dataPointBlank = [
  {
    title: "1200 PB Cash",
    harga: "Rp. 10.000",
  },
  {
    title: "2400 PB Cash",
    harga: "Rp. 22.000",
  },
  {
    title: "6000 PB Cash",
    harga: "Rp. 55.000",
  },
  {
    title: "12000 PB Cash",
    harga: "Rp. 110.000",
  },
  {
    title: "24000 PB Cash",
    harga: "Rp. 220.000",
  },
  {
    title: "36000 PB Cash",
    harga: "Rp. 330.000",
  },
  {
    title: "60000 PB Cash",
    harga: "Rp. 550.000",
  },
];
dataPointBlank.forEach((item) => {
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

// Get the selected radio input (kategori)
let selectedRadioInput = document.querySelector('input[name="credits"]:checked');
// Check if kategori is not selected
if (!selectedRadioInput) {
 alert("Mohon pilih kategori top-up terlebih dahulu.");
 return;
}
  // Validate the form fields (you can add more validation if needed)
  if (!id) {
    alert("Please fill in all the fields.");
    return;
  }

  // If the form is valid, create the WhatsApp message
  const message = `Halo, saya ingin top-up akun Point Blank saya dengan detail sebagai berikut:\nPlayer ID: ${id}\nKategori: ${title}\nHarga: ${price}`;

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
