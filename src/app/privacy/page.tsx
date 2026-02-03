import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Kebijakan Privasi | Karya Kilat",
  description: "Kebijakan privasi dan perlindungan data Karya Kilat",
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold font-serif text-primary mb-8">
          Kebijakan Privasi
        </h1>
        <p className="text-muted-foreground mb-8">
          Terakhir diperbarui: 3 Februari 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Pendahuluan
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Karya Kilat (&quot;kami&quot;, &quot;kita&quot;, atau &quot;Perusahaan&quot;) berkomitmen untuk melindungi privasi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi 
              pribadi Anda ketika Anda menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Kami mengumpulkan informasi berikut:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Nama dan informasi kontak (email, nomor WhatsApp)</li>
              <li>Informasi bisnis yang Anda berikan melalui formulir konsultasi</li>
              <li>Data analitik website (melalui Google Analytics)</li>
              <li>Cookies untuk meningkatkan pengalaman browsing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Memproses permintaan konsultasi dan layanan</li>
              <li>Menghubungi Anda terkait layanan yang diminati</li>
              <li>Meningkatkan website dan layanan kami</li>
              <li>Mengirimkan informasi tentang penawaran khusus (dengan persetujuan Anda)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Layanan Pihak Ketiga
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Kami menggunakan layanan pihak ketiga berikut:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li><strong>Google Analytics:</strong> Untuk menganalisis penggunaan website</li>
              <li><strong>WhatsApp Business:</strong> Untuk komunikasi dengan klien</li>
              <li><strong>Vercel:</strong> Untuk hosting website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Keamanan Data
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda 
              dari akses tidak sah, perubahan, pengungkapan, atau penghancuran.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Hak Anda
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Meminta penghapusan data Anda</li>
              <li>Menarik persetujuan untuk komunikasi marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Hubungi Kami
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Untuk pertanyaan tentang Kebijakan Privasi ini, hubungi kami di:
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
