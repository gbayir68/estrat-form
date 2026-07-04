// Aşamalar arası pürüzsüz yukarı kayma (Git-Up) fonksiyonu
function nextStep(current, next) {
    // Geçerli aşamadaki zorunlu alan kontrolü
    const currentInput = document.querySelector(`#step${current} input`);
    if (currentInput && !currentInput.checkValidity()) {
        alert("Lütfen bu alanı doldurunuz.");
        return;
    }

    // Aktif aşamayı gizle, sonrakini yukarı kaydırarak göster
    document.getElementById(`step${current}`).classList.remove('active');
    document.getElementById(`step${next}`).classList.add('active');
}

function prevStep(current, prev) {
    // Geri dönme fonksiyonu
    document.getElementById(`step${current}`).classList.remove('active');
    document.getElementById(`step${prev}`).classList.add('active');
}

// Otomatik Yaş Grubu Hesaplama Motoru
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    if (!birthDateInput) return;

    const birthDate = new Date(birthDateInput);
    const birthYear = birthDate.getFullYear();
    
    // Şu anki yılı (2026) esas alarak yaş hesabı yapıyoruz
    const currentYear = 2026; 
    const age = currentYear - birthYear;

    const ageBox = document.getElementById('ageBox');
    const ageResult = document.getElementById('ageResult');

    let group = "";
    if (age >= 6 && age <= 9) {
        group = "6-9 Yaş Grubu";
    } else if (age >= 10 && age <= 12) {
        group = "10-12 Yaş Grubu";
    } else if (age < 6) {
        group = "6 Yaş Altı (Atölye için Küçük)";
    } else {
        group = "12 Yaş Üstü Group";
    }

    // Ekranda şık mühür kutusunu göster ve yazdır
    ageResult.innerText = group;
    ageBox.style.display = "block";
}

// Form Tamamlandığında WhatsApp'a Bilgileri Fırlatma Motoru
document.getElementById('gitUpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    // Tüm bilgileri kutulardan çekiyoruz
    const name = document.getElementById('childName').value;
    const birthDate = document.getElementById('birthDate').value;
    const ageGroup = document.getElementById('ageResult').innerText;
    const workshop = document.querySelector('input[name="workshop"]:checked').value;
    const phone = document.getElementById('parentPhone').value;

    // Velinin telefonunda açılacak hazır WhatsApp metnini tasarlıyoruz
    const whatsappText = `Merhaba Estrat Kültür Sanat! Ön kayıt formunu doldurdum.%0A%0A` +
                         `*Öğrenci Adı Soyadı:* ${name}%0A` +
                         `*Doğum Tarihi:* ${birthDate}%0A` +
                         `*Belirlenen Yaş Grubu:* ${ageGroup}%0A` +
                         `*Tercih Edilen Atölye:* ${workshop}%0A` +
                         `*Veli Telefon:* ${phone}`;

    // Senin WhatsApp numaran (Buradaki 5XXXXXXXXX kısmını kendi numaranla değiştir Usta)
    const myPhoneNumber = "905322635841"; 

    // Telefonun WhatsApp uygulamasını bu mesajla tetikliyoruz
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${whatsappText}`;

    // Veliyi WhatsApp'a uçuruyoruz
    window.open(whatsappUrl, '_blank');
});
