let container = document.querySelector(".product-wrapper");
let form = document.getElementById("top-up-form");
const serverSelect = document.getElementById("server");
let item, price;
const dataRagnarok = [
  {
    title: "6+1 Big Cat Coins",
    harga: "Rp. 20.000",
  },
  {
      title: "12+2 Big Cat Coins",
      harga: "Rp. 30.000",
    },
    {
        title: "18+3 Big Cat Coins",
        harga: "Rp. 50.000",
    },
    {
        title: "24+4 Big Cat Coins",
        harga: "Rp. 70.000",
  },
  {
    title: "30+6 Big Cat Coins",
    harga: "Rp. 90.000",
  },
  {
    title: "60+12 Big Cat Coins",
    harga: "Rp. 170.000",
  },
  {
    title: "298+25 Big Cat Coins",
    harga: "Rp. 350.000",
  },
  {
    title: "598+75 Big Cat Coins",
    harga: "Rp. 799.000",
  },
  {
    title: "1196+150 Big Cat Coins",
    harga: "Rp. 1.700.000",
  },
  {
    title: "2120+300 Big Cat Coins",
    harga: "Rp. 3.500.000",
  },
  {
    title: "2990+750 Big Cat Coins",
    harga: "Rp. 8.000.000",
  },
];
dataRagnarok.forEach((item) => {
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
  titleParagraph.classList.add("title");
  
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
  // Validate the form fields (you can add more validation if needed)
  if (!id) {
    alert("Please fill in all the fields.");
    return;
  }
// Check if server is not selected
if (server === "") {
  alert("Mohon pilih server terlebih dahulu.");
  return;
}
  // If the form is valid, create the WhatsApp message
  const message = `Halo, saya ingin top-up akun Ragnarok M: Eternal Love saya dengan detail sebagai berikut:\nPlayer ID: ${id}\nServer: ${server}\nKategori: ${title}\nHarga: ${price}`;

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