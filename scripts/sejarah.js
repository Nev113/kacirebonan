const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

const budayaData = [
  {
    title: "Era Kerajaan",
    image: "./assets/head-kingdom.jpg",
    description: `Cirebon didirikan oleh Sunan Gunung Jati pada abad ke-15 sebagai
            kerajaan Islam. Nama "Cirebon" berasal dari kata "Caruban" yang
            berarti campuran, mencerminkan perpaduan budaya yang ada di kota
            ini.`,
    items: [
      {
        year: "1479",
        content: `Pada tahun 1479, Sunan Gunung Jati mendeklarasikan Cirebon sebagai
            kesultanan Islam yang merdeka, melepaskan diri dari kekuasaan
            Kerajaan Pajajaran. Di bawah kepemimpinannya, Cirebon dengan cepat
            berkembang menjadi pusat kekuatan politik dan penyebaran agama Islam
            yang sangat berpengaruh di Jawa Barat.`,
      },
      {
        year: "1482",
        content: `Pada tahun 1482, untuk mengukuhkan kedaulatan Kesultanan Cirebon
            yang baru merdeka, Sunan Gunung Jati mendirikan Keraton Pakungwati
            sebagai pusat pemerintahan resmi. Nama keraton ini diambil dari nama
            istrinya, Ratu Dewi Pakungwati, yang merupakan putri dari Pangeran
            Cakrabuana. Pembangunan istana ini menjadi simbol fisik berdirinya
            sebuah negara yang berdaulat, berfungsi sebagai pusat kendali
            politik, strategi militer, dan dakwah Islam. Kompleks Keraton
            Pakungwati inilah yang menjadi cikal bakal dan bagian inti dari
            Keraton Kasepuhan yang kita kenal hingga sekarang.`,
      },
      {
        year: "1529",
        content: `Pada tahun 1529, peran Kesultanan Cirebon sebagai pusat penyebaran
            Islam di Jawa Barat telah mapan dan tak terbantahkan. Menyusul
            keberhasilan strategis seperti penaklukan Pelabuhan Sunda Kelapa
            pada 1527 yang melemahkan Kerajaan Pajajaran, pengaruh Cirebon
            meluas dengan pesat. Di bawah kepemimpinan Sunan Gunung Jati, yang
            merupakan seorang Raja sekaligus Wali Songo, Cirebon menjadi
            mercusuar dakwah. Dari keraton inilah para ulama dan mubalig diutus
            secara sistematis ke berbagai wilayah Priangan untuk menyiarkan
            Islam melalui pendekatan budaya yang damai. Cirebon pun menjelma
            menjadi pusat pendidikan Islam, menarik para santri dari segenap
            tatar Sunda untuk belajar sebelum kembali menyebarkan ajaran Islam
            di daerah asal mereka.`,
      },
    ],
  },
  {
    title: "Era Kolonial",
    image: "./assets/head-colonial.jpg",
    description: `Pada masa kolonial Belanda, Cirebon menjadi pelabuhan penting untuk perdagangan rempah-rempah. VOC mendirikan kantor dagang dan benteng untuk mengontrol perdagangan di wilayah ini.`,
    items: [
      {
        year: "1619",
        content: `Setelah Jan Pieterszoon Coen menaklukkan Jayakarta dan mendirikan Batavia pada 1619, VOC secara agresif memperluas pengaruh dagangnya di sepanjang pesisir utara. Cirebon, sebagai salah satu pelabuhan dagang penting, mulai merasakan tekanan ekonomi dan politik dari Kompeni. Secara bertahap, VOC mulai memaksakan kontrak-kontrak dagang yang merugikan, mengintervensi urusan lokal, dan secara perlahan menggerogoti independensi ekonomi kesultanan, sebuah proses yang akan berpuncak pada perjanjian-perjanjian di kemudian hari yang secara resmi menempatkan Cirebon di bawah kendali VOC.   `,
      },
      {
        year: "1677",
        content: `Pada tahun 1677, Kesultanan Cirebon mengalami krisis internal yang parah setelah Panembahan Ratu II wafat. Kekacauan ini diperparah oleh intervensi dari Kesultanan Banten dan Mataram. Di tengah situasi ini, VOC melihat peluang emas untuk menanamkan pengaruhnya. Sultan Ageng Tirtayasa dari Banten kemudian menobatkan dua putra Panembahan Ratu II, yaitu Pangeran Martawijaya dan Kartawijaya, sebagai Sultan Sepuh dan Sultan Anom. Namun, penobatan ini justru menjadi awal dari perpecahan Kesultanan Cirebon dan membuka pintu bagi VOC untuk masuk sebagai "penengah". Peristiwa inilah yang menjadi landasan bagi perjanjian-perjanjian selanjutnya, seperti Perjanjian 1681, yang secara resmi menempatkan kesultanan-kesultanan di Cirebon di bawah protektorat dan kendali VOC, sekaligus mengakhiri kedaulatan penuh mereka.`,
      },
      {
        year: "1906",
        content: `Pada tanggal 1 April 1906, pemerintah kolonial Hindia Belanda secara resmi membentuk Gemeente Cheribon (Kotamadya Cirebon). Langkah ini merupakan bagian dari kebijakan desentralisasi yang bertujuan mengintegrasikan wilayah-wilayah secara langsung ke dalam struktur administrasi kolonial. Pembentukan kotamadya ini secara efektif menghapus sisa-sisa kekuasaan pemerintahan yang masih dimiliki oleh kesultanan-kesultanan di Cirebon. Sejak saat itu, seluruh urusan pemerintahan, hukum, dan keuangan kota berada di bawah kendali langsung seorang burgemeester (walikota) yang ditunjuk oleh Belanda, dan Cirebon pun resmi menjadi bagian penuh dari wilayah Hindia Belanda. Peran para Sultan direduksi menjadi sebatas pemimpin seremonial dan budaya, tanpa otoritas politik yang berarti.`,
      },
    ],
  },
  {
    title: "Era Kemerdekaan",
    image: "./assets/head-modern.jpg",
    description: `Setelah kemerdekaan Indonesia, Cirebon berkembang menjadi kota industri dan pariwisata. Kota ini mempertahankan warisan budayanya sambil beradaptasi dengan perkembangan zaman modern.`,
    items: [
      {
        year: "1945",
        content:
          "Segera setelah berita Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 tersiar, semangat perjuangan langsung berkobar di Cirebon. Para pemuda dan tokoh lokal dengan cepat menyebarkan maklumat tersebut dan mulai mengorganisir upaya pengambilalihan kekuasaan dari tangan Jepang. Momen paling signifikan bagi Cirebon adalah ketika para sultan, terutama Sultan Sepuh PRA Alexander Rajaningrat, secara tegas menyatakan bahwa Kesultanan Cirebon berdiri di belakang Republik Indonesia yang baru lahir. Pernyataan dukungan ini memberikan legitimasi historis yang kuat bagi pemerintah RI di Cirebon dan menegaskan bahwa institusi kesultanan yang telah berabad-abad lamanya kini menjadi bagian tak terpisahkan dari negara Indonesia yang merdeka.",
      },
      {
        year: "1950",
        content: `Melalui Undang-Undang Nomor 16 Tahun 1950 yang dikeluarkan oleh pemerintah Republik Indonesia, status Cirebon secara resmi ditetapkan sebagai "Kota Besar" atau Kotamadya. Peraturan ini menjadi bagian dari penataan administrasi wilayah yang lebih luas di awal kemerdekaan, yang bertujuan untuk membentuk daerah-daerah otonom di lingkungan Provinsi Jawa Barat, Jawa Tengah, dan Jawa Timur. Dengan ditetapkannya status ini, Cirebon memiliki pemerintahan yang otonom dan terpisah dari kabupaten di sekitarnya, serta memiliki wewenang untuk mengatur urusan rumah tangganya sendiri di bawah sistem pemerintahan Republik Indonesia.`,
      },
      {
        year: "1999",
        content: `Seiring dengan gelombang Reformasi di Indonesia, Undang-Undang Nomor 22 Tahun 1999 tentang Pemerintahan Daerah disahkan. Peraturan ini menjadi titik balik penting bagi daerah-daerah di seluruh Indonesia, termasuk Kota Cirebon. Berdasarkan UU tersebut, Cirebon, bersama dengan kota dan kabupaten lainnya, memperoleh kewenangan otonomi yang luas, nyata, dan bertanggung jawab. Ini berarti Pemerintah Kota Cirebon memiliki keleluasaan lebih besar untuk mengatur dan mengurus rumah tangganya sendiri, mulai dari perencanaan pembangunan, pengelolaan keuangan, hingga pemanfaatan sumber daya lokal, yang secara fundamental mengubah hubungan antara pemerintah pusat dan daerah.`,
      },
      {
        year: "2000",
        content: `Memasuki milenium baru hingga sekarang, Pemerintah Kota Cirebon secara intensif memfokuskan pengembangannya pada sektor pariwisata budaya dan sejarah. Dengan modal kekayaan warisan seperti Keraton Kasepuhan, Kanoman, dan Kacirebonan, serta Makam Sunan Gunung Jati yang menjadi pusat wisata ziarah, Cirebon memantapkan citranya sebagai "Kota Wali". Upaya ini didukung oleh promosi gencar terhadap aset budaya lainnya, termasuk Batik Mega Mendung yang mendunia, seni Tari Topeng, dan kekayaan kuliner khas seperti Nasi Jamblang dan Empal Gentong. Peningkatan infrastruktur, terutama akses Tol Cipali, telah mempercepat pertumbuhan Cirebon sebagai salah satu destinasi utama di Jawa Barat bagi wisatawan yang mencari pengalaman sejarah, budaya, dan kuliner yang otentik.`,
      },
    ],
  },
];

const containerSection = document.querySelector(".container-kingdom");

function createEraHTML(eraData) {
  let htmlContent = `
    <div class="head-kingdom-section">
      <img src="${eraData.image}" alt="${eraData.title}" />
      <div class="head-text">
        <h3>${eraData.title}</h3>
        <p>${eraData.description}</p>
      </div>
    </div>
  `;

  eraData.items.forEach((item, index) => {
    htmlContent += `
      <div class="item-kingdom">
        <div class="timeline"></div>
        <div class="timeline-dot">
          <div class="time-indicator">${item.year}</div>
        </div>
        <div class="item-text">
          <p>${item.content}</p>
        </div>
      </div>
    `;
  });

  return htmlContent;
}

function generateAllErasHTML() {
  let allHTML = "";
  budayaData.forEach((era) => {
    allHTML += createEraHTML(era);
  });
  return allHTML;
}

if (containerSection) {
  containerSection.innerHTML = generateAllErasHTML();
}
