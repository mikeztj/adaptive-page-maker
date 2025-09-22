import { Button } from "@/components/ui/button";
import heroImage from "@/assets/healthcare-hero.jpg";
import healthyOneLogo from "@/assets/healthy-one-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-health relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-health-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-health-primary/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-health-secondary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-health-primary rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-4">
            <img 
              src={healthyOneLogo} 
              alt="Healthy One Logo" 
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm text-health-primary/70">Teman sehatmu setiap hari.</p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-health-primary leading-tight">
                Rawat dirimu,
                <br />
                <span className="text-health-secondary">kami yang siapkan</span>
                <br />
                produknya.
              </h2>
              
              <p className="text-lg text-health-primary/80 leading-relaxed max-w-lg">
                Kesehatan bukan cuma soal fisik, tapi juga tentang ketenangan 
                pikiran. Di Healthy One, Anda bisa belanja semua kebutuhan 
                produk kesehatan tanpa repot dengan menggunakan 
                Marketplace kami.
              </p>
            </div>

            {/* Google Play Button */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-float hover:scale-105 group"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <div className="text-xs opacity-75">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Healthcare professionals and medical services"
                className="w-full h-auto rounded-3xl shadow-float hover:shadow-lg transition-all duration-500 hover:scale-105"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-health-secondary/20 rounded-full animate-bounce delay-500" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-health-primary/20 rounded-full animate-bounce delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;