<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estrat Kültür Sanat - Ön Kayıt Formu</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <div class="form-container">
        <div class="logo-area">
            <h2>ESTRAT KÜLTÜR SANAT</h2>
            <p>Çocuk Atölyeleri Ön Kayıt Formu</p>
        </div>

        <form id="estratForm">
            
            <!-- SANA ÖZEL SÜREÇ - 1. SAYFA: VELİ BİLGİLERİ -->
            <div class="form-page active" id="page1">
                <h3 class="page-title">1. Veli İletişim Bilgileri</h3>
                
                <label for="parentName">Veli Adı - Soyadı:</label>
                <input type="text" id="parentName" placeholder="Ahmet Yılmaz" required>

                <label for="parentPhone">Veli Telefon Numarası:</label>
                <input type="tel" id="parentPhone" placeholder="0555XXXXXXX" pattern="[0-9]{11}" required>

                <button type="button" class="next-btn" onclick="goToPage(2)">Çocuk Bilgilerine Geç →</button>
            </div>

            <!-- 2. SAYFA: ÇOCUK & ATÖLYE BİLGİLERİ -->
            <div class="form-page" id="page2">
                <h3 class="page-title">2. Öğrenci & Atölye Tercihi</h3>

                <label for="childName">Çocuğun Adı - Soyadı:</label>
                <input type="text" id="childName" placeholder="Zeynep Yılmaz" required>

                <label for="birthDate">Çocuğun Doğum Tarihi:</label>
                <input type="date" id="birthDate" onchange="calculateAge()" required>
                
                <div class="calculated-age-box" id="ageBox" style="display:none;">
                    <span>Belirlenen Yaş Grubu:</span>
                    <strong id="ageResult">--</strong>
                </div>

                <label>Tercih Edilen Atölye:</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="workshop" value="Yaratıcı Drama" required>
                        <span>Yaratıcı Drama / Tiyatro</span>
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="workshop" value="Müzik Atölyesi">
                        <span>Müzik Atölyesi</span>
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="workshop" value="Gastronomi Mutfak">
                        <span>Gastronomi Mutfak</span>
                    </label>
                </div>

                <label>Herhangi bir alerji durumu var mı?</label>
                <div class="radio-group-row">
                    <label class="radio-inline"><input type="radio" name="allergy" value="Yok" checked> Yok</label>
                    <label class="radio-inline"><input type="radio" name="allergy" value="Var"> Var</label>
                </div>

                <label class="checkbox-option">
                    <input type="checkbox" id="kvkkCheck" required>
                    <span>KVKK ve Görsel Kullanım İznini Onaylıyorum.</span>
                </label>

                <div class="btn-group">
                    <button type="button" class="prev-btn" onclick="goToPage(1)">← Geri</button>
                    <button type="submit" class="submit-btn">Başvuruyu Tamamla <i class="fab fa-whatsapp"></i></button>
                </div>
            </div>
        </form>
    </div>

    <!-- Sabit WhatsApp İletişim Butonu -->
    <a href="https://wa.me/905XXXXXXXXX?text=Merhaba,%20Estrat%20Kültür%20Sanat%20eğitimleri%20hakkında%20bilgi%20almak%20istiyorum." class="fixed-whatsapp" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

</body>
</html>
