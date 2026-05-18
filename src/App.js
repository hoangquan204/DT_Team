import React, { useState } from 'react';
import { 
  Code, 
  ShoppingBag, 
  Hotel, 
  Coffee, 
  Layers, 
  CheckCircle, 
  ShieldCheck, 
  Server, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Laptop, 
  Users, 
  Zap 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Danh sách dịch vụ cốt lõi
  const services = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-sky-400" />,
      title: "E-Commerce (Thương mại điện tử)",
      desc: "Tích hợp giỏ hàng, thanh toán online, tối ưu trải nghiệm mua sắm chuẩn SEO giúp bùng nổ doanh số."
    },
    {
      icon: <Hotel className="w-8 h-8 text-sky-400" />,
      title: "Khách sạn & Nhà nghỉ",
      desc: "Hệ thống đặt phòng trực quan, quản lý phòng trống, check-in/check-out mượt mà cho chủ doanh nghiệp."
    },
    {
      icon: <Coffee className="w-8 h-8 text-sky-400" />,
      title: "Quán Cafe & Nhà hàng",
      desc: "Menu điện tử (QR Code), giới thiệu không gian trang nhã và tích hợp đặt bàn/gọi món nhanh chóng."
    },
    {
      icon: <Layers className="w-8 h-8 text-sky-400" />,
      title: "Hệ thống Quản lý Đơn hàng",
      desc: "Số hóa quy trình vận hành, theo dõi trạng thái đơn hàng, báo cáo doanh thu chính xác và bảo mật."
    }
  ];

  // Điểm mạnh & Cam kết từ DevTech
  const strengths = [
    { icon: <Server className="w-6 h-6 text-emerald-400" />, title: "Hỗ trợ Hosting", desc: "Tặng kèm/Hỗ trợ cấu hình hosting tốc độ cao, hoạt động ổn định 99.9%." },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, title: "Bảo hành Website", desc: "Cam kết bảo trì, sửa lỗi kỹ thuật và cập nhật hệ thống định kỳ." },
    { icon: <Zap className="w-6 h-6 text-emerald-400" />, title: "Tối ưu Tốc độ", desc: "Sử dụng công nghệ mới nhất giúp website tải trang dưới 2 giây." },
    { icon: <CheckCircle className="w-6 h-6 text-emerald-400" />, title: "Chi phí Hợp lý", desc: "Mức giá cạnh tranh tối đa, tối ưu theo ngân sách riêng của từng khách hàng." }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans scroll-smooth">
      
      {/* 1. HEADER & NAVIGATION */}
      <nav className="bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Team */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-sky-500/20">
                DT
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">DEVTECH</span>
                <span className="text-xs block text-slate-400 font-medium">Team Software</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
              <a href="#home" className="hover:text-sky-400 transition">Trang chủ</a>
              <a href="#services" className="hover:text-sky-400 transition">Dịch vụ</a>
              <a href="#strengths" className="hover:text-sky-400 transition">Điểm mạnh</a>
              <a href="#contact" className="hover:text-sky-400 transition">Liên hệ</a>
              <a href="tel:0332767572" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5">
                <Phone className="w-4 h-4" /> 0332767572
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-sky-400 py-2">Trang chủ</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-sky-400 py-2">Dịch vụ</a>
            <a href="#strengths" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-sky-400 py-2">Điểm mạnh</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-sky-400 py-2">Liên hệ</a>
            <a href="tel:0332767572" className="w-full bg-sky-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold">
              <Phone className="w-5 h-5" /> 0332767572
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> Đối tác công nghệ tại TP. Cần Thơ
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Thiết kế Website <br />
                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Chuyên Nghiệp & Bứt Phá
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                DevTech Team chuyên cung cấp giải pháp thiết kế website cao cấp cho TMĐT, Khách sạn, Nhà nghỉ, Quán Cafe và Hệ thống quản lý. Chi phí tối ưu, vận hành mượt mà.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 transition transform hover:-translate-y-0.5">
                  Nhận tư vấn miễn phí <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl border border-slate-700 flex items-center justify-center transition">
                  Xem các dịch vụ
                </a>
              </div>
            </div>
            
            {/* Ảnh minh họa bên phải nghệ thuật */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 rounded-full blur-3xl absolute -z-10 animate-pulse"></div>
              <div className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/60 backdrop-blur-sm max-w-md shadow-2xl relative">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-500 font-mono ml-2">devtech-project.json</span>
                </div>
                <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-400">
                  <p><span className="text-pink-400">const</span> team = <span className="text-yellow-300">"DevTech Cần Thơ"</span>;</p>
                  <p><span className="text-pink-400">const</span> mission = <span className="text-yellow-300">"Số hóa doanh nghiệp của bạn"</span>;</p>
                  <p><span className="text-pink-400">const</span> services = [<span className="text-emerald-400">"E-Commerce"</span>, <span className="text-emerald-400">"Hotel"</span>, <span className="text-emerald-400">"Cafe"</span>];</p>
                  <p><span className="text-pink-400">const</span> benefits = {`{ hosting: true, warranty: "Trọn đời" }`};</p>
                  <p className="text-sky-400 font-bold">// Khởi tạo dự án thành công ngay hôm nay!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400">Lĩnh vực chuyên môn</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Dịch Vụ Thiết Kế Trọng Tâm</p>
            <p className="text-slate-400">Chúng tôi xây dựng hệ thống website chuẩn chỉnh, tối ưu sâu cho từng mô hình kinh doanh cụ thể.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, index) => (
              <div key={index} className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition duration-300 group shadow-lg">
                <div className="p-4 bg-slate-950 rounded-xl w-fit group-hover:scale-110 transition duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRENGTHS & COMMITMENT SECTION */}
      <section id="strengths" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400">Tại sao chọn chúng tôi?</h2>
              <p className="text-3xl font-extrabold text-white">Điểm Mạnh Tạo Nên Sự Khác Biệt</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                DevTech không chỉ bàn giao một trang web, chúng tôi trao cho bạn một công cụ kinh doanh ổn định, lâu dài và hiệu quả tại khu vực Tây Nam Bộ.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((item, index) => (
                <div key={index} className="bg-slate-950/60 p-6 rounded-xl border border-slate-800/80 flex items-start gap-4">
                  <div className="p-2.5 bg-slate-900 rounded-lg shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION & CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sẵn sàng khởi động <br />dự án số của bạn?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Liên hệ trực tiếp với DevTech Team qua Hotline phục vụ 24/7 để nhận báo giá chi tiết, hợp lý nhất tại Cần Thơ.
          </p>
          
          <div className="bg-slate-900 border border-slate-800 max-w-md mx-auto p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-center gap-3 text-sky-400 font-bold text-2xl">
              <Phone className="w-6 h-6 animate-bounce" />
              <a href="tel:0332767572" className="hover:underline">0332767572</a>
            </div>
            <div className="text-xs text-slate-500">
              Hỗ trợ tư vấn miễn phí qua Cuộc gọi trực tiếp / Zalo
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-400 font-semibold">DevTech Team</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-500" /> Thành phố Cần Thơ, Việt Nam
          </div>
        </div>
      </footer>

    </div>
  );
}