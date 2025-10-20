import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Users, Target, Award } from "lucide-react";

const CompanyProfile = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-foreground">Company Profile</h1>
          <p className="text-muted-foreground mt-2">Learn more about Healthy One</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* About Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">About Us</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Healthy One adalah platform kesehatan digital yang menyediakan akses mudah 
            ke produk-produk kesehatan berkualitas. Kami berkomitmen untuk menjadi 
            teman sehat Anda setiap hari dengan menyediakan marketplace yang aman, 
            terpercaya, dan mudah digunakan.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Misi kami adalah membuat layanan kesehatan lebih mudah diakses oleh 
            semua orang melalui teknologi digital. Kami percaya bahwa kesehatan 
            bukan hanya soal fisik, tetapi juga ketenangan pikiran dalam 
            mendapatkan produk kesehatan yang tepat.
          </p>
        </section>

        {/* Services Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Marketplace Kesehatan
              </h3>
              <p className="text-muted-foreground">
                Belanja produk kesehatan dengan mudah dan aman melalui aplikasi kami.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Telemedicine
              </h3>
              <p className="text-muted-foreground">
                Konsultasi dengan dokter profesional dari rumah Anda.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pengiriman Cepat
              </h3>
              <p className="text-muted-foreground">
                Produk kesehatan dikirim dengan cepat dan aman ke lokasi Anda.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Produk Terpercaya
              </h3>
              <p className="text-muted-foreground">
                Semua produk dijamin original dan berkualitas tinggi.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tim Healthy One terdiri dari profesional kesehatan, teknologi, dan 
            bisnis yang berdedikasi untuk memberikan layanan terbaik kepada 
            pelanggan kami. Kami bekerja setiap hari untuk memastikan platform 
            kami tetap aman, mudah digunakan, dan memenuhi kebutuhan kesehatan Anda.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CompanyProfile;
