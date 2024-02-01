let container = document.querySelector(".product-wrapper");
let form = document.getElementById("top-up-form");
let item, price;
const dataCallOfDuty = [
  {
    title: "31 CP",
    harga: "Rp. 5.000",
  },
  {
    title: "62 CP",
    harga: "Rp. 10.000",
  },
  {
    title: "127 CP",
    harga: "Rp. 20.000",
  },
  {
    title: "320 CP",
    harga: "Rp. 50.000",
  },
  {
    title: "645 CP",
    harga: "Rp. 100.000",
  },
  {
    title: "800 CP",
    harga: "Rp. 120.000",
  },
  {
    title: "1373 CP",
    harga: "Rp. 200.000",
  },
  {
    title: "2059 CP",
    harga: "Rp. 300.000",
  },
  {
    title: "2749 CP",
    harga: "Rp. 380.000",
  },
  {
    title: "3564 CP",
    harga: "Rp. 500.000",
  },
  {
    title: "5618 CP",
    harga: "Rp. 730.000",
  },
  {
    title: "7656 CP",
    harga: "Rp. 1.000.000",
},
    {
    title: "15312 CP",
    harga: "Rp. 2.000.000",
    },
    {
      title: "38280 CP",
      harga: "Rp. 5.000.000",
    },
  {
    title: "76560 CP",
    harga: "Rp. 10.000.000",
  },
];
dataCallOfDuty.forEach((item) => {
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
  const message = `Halo, saya ingin top-up akun Call Of Duty Mobile saya dengan detail sebagai berikut:\nPlayer ID: ${id}\nKategori: ${title}\nHarga: ${price}`;

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