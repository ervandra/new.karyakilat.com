import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Syarat & Ketentuan | Karya Kilat",
  description: "Syarat dan ketentuan layanan Karya Kilat",
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold font-serif text-primary mb-8">
          Syarat & Ketentuan
        </h1>
        <p className="text-muted-foreground mb-8">
          Terakhir diperbarui: 3 Februari 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Tentang Layanan
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Karya Kilat menyediakan layanan pembuatan Digital Headquarters—website profesional 
              dan infrastruktur digital untuk pemilik bisnis dan eksekutif di area BSD dan Gading Serpong.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Komitmen Pengerjaan
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Kami berkomitmen menyelesaikan proyek dalam:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li><strong>14 hari kerja</strong> untuk paket Professional dan Executive</li>
              <li><strong>21 hari kerja</strong> untuk paket Authority (karena kompleksitas lebih tinggi)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Timeline dimulai setelah brief dan materi lengkap diterima dari klien.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Pembayaran
            </h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li><strong>50% di muka</strong> sebagai tanda jadi untuk memulai proyek</li>
              <li><strong>50% pelunasan</strong> sebelum go-live</li>
              <li>Pembayaran melalui transfer bank atau e-wallet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Revisi
            </h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Setiap paket mencakup hingga <strong>3 kali revisi mayor</strong></li>
              <li>Revisi minor (typo, warna, spacing) tidak terbatas selama periode support</li>
              <li>Permintaan di luar lingkup awal akan dikenakan biaya tambahan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Hak Kepemilikan
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Setelah pelunasan penuh, klien memiliki hak penuh atas:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-4">
              <li>Source code website</li>
              <li>Semua aset desain yang dibuat</li>
              <li>Domain (jika dibeli melalui kami)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Kebijakan Pembatalan
            </h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Pembatalan sebelum pengerjaan dimulai: refund 80% dari DP</li>
              <li>Pembatalan setelah pengerjaan dimulai: DP tidak dapat dikembalikan</li>
              <li>Pembatalan dalam 48 jam pertama setelah DP: refund penuh</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Batasan Tanggung Jawab
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Karya Kilat tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-4">
              <li>Kerugian bisnis akibat downtime hosting pihak ketiga</li>
              <li>Konten yang disediakan klien (keakuratan, legalitas)</li>
              <li>Performa SEO (yang bergantung pada banyak faktor eksternal)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Penyelesaian Sengketa
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Setiap sengketa akan diselesaikan secara musyawarah terlebih dahulu. 
              Jika tidak tercapai kesepakatan, akan menggunakan mediasi di wilayah hukum Tangerang, Banten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Hubungi Kami
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Untuk pertanyaan tentang Syarat & Ketentuan ini:
            </p>
            <ul className="list-none text-foreground/80 mt-4 space-y-2">
              <li><strong>Email:</strong> halo@karyakilat.com</li>
              <li><strong>WhatsApp:</strong> 0851-2435-4868</li>
              <li><strong>Alamat:</strong> Gading Serpong, Tangerang</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
