let container = document.querySelector(".product-wrapper");
let form = document.getElementById("top-up-form");
let item, price;
const dataMobileLegends = [
  {
    title: "25 Diamonds + 3 Bonus",
    harga: "Rp. 8.100",
  },
  {
    title: "40 Diamonds + 4 Bonus",
    harga: "Rp. 12.000",
  },
  {
    title: "54 Diamonds + 6 Bonus",
    harga: "Rp. 16.000",
  },
  {
    title: "78 Diamonds + 8 Bonus",
    harga: "Rp. 30.500",
  },
  {
    title: "154 Diamonds + 16 Bonus",
    harga: "Rp. 46.000",
  },
  {
    title: "169 Diamonds + 19 Bonus",
    harga: "Rp. 50.000",
  },
  {
    title: "200 Diamonds + 22 Bonus",
    harga: "Rp. 60.000",
  },
  {
    title: "256 Diamonds + 40 Bonus",
    harga: "Rp. 76.000",
  },
  {
    title: "369 Diamonds + 41 Bonus",
    harga: "Rp. 110.000",
  },
  {
    title: "503 Diamonds + 65 Bonus",
    harga: "Rp. 142.500",
  },
  {
    title: "775 Diamonds + 102 Bonus",
    harga: "Rp. 220.000",
  },
  {
    title: "1003 Diamonds + 156 Bonus",
    harga: "Rp. 285.000",
  },
  {
    title: "1709 Diamonds + 303 Bonus",
    harga: "Rp. 505.000",
  },
  {
    title: "4003 Diamonds + 827 Bonus",
    harga: "Rp. 1.140.000",
  },
  {
    title: "5003 Diamonds + 1047 Bonus",
    harga: "Rp. 1.500.000",
  },
];
// Ambil elemen input untuk player-id
const playerIdInput = document.getElementById("player-id");

// Tambahkan event listener untuk mengontrol input
playerIdInput.addEventListener("input", function () {
  // Ganti teks seluruhnya dengan hanya angka
  this.value = this.value.replace(/\D/g, "");
});
dataMobileLegends.forEach((item) => {
  const linkedData = document.createElement("a");

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
  inputContainer.appendChild(linkedData);
  linkedData.appendChild(radioInput);
  linkedData.appendChild(radioTile);
 
  // Tambahkan event listener untuk mengontrol input

  // Append the inputContainer div to the container
  container.appendChild(inputContainer);
  radioInput.addEventListener("click", function () {
    title = item.title;
    price = item.harga;

 // Ganti tautan href ke bagian "Isi Data" dengan menggunakan smooth scrolling
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

  // Get the selected radio input (kategori)
  let selectedRadioInput = document.querySelector(
    'input[name="credits"]:checked'
  );
  // Check if kategori is not selected
  if (!selectedRadioInput) {
    alert("Mohon pilih kategori top-up terlebih dahulu.");
    return;
  }
  // Get form values
  let id = document.getElementById("player-id").value;
  let username = document.getElementById("player-username").value;
  // Validate the form fields (you can add more validation if needed)
  if (!id || !username) {
    alert("Please fill in all the fields.");
    return;
  }

  // If the form is valid, create the WhatsApp message
  const message = `Halo, saya ingin top-up akun Mobile Legends saya dengan detail sebagai berikut:\nPlayer ID: ${id}\nUsername: ${username}\nKategori: ${title}\nHarga: ${price}`;

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
