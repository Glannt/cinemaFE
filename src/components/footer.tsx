import { Button } from "@heroui/button";

export const Footer = () => {
  return (
    <div className='bg-transparent text-white py-8'>
      <div className='container mx-auto flex flex-wrap justify-between px-8'>
        {/* Logo + Button */}
        <div className='w-full md:w-1/4 flex flex-col items-start'>
          <h1 className='text-2xl font-bold flex items-center'>
            <span className='dark:text-[#75ADEF] text-violet-500'>C</span>
            <span className='dark:text-white text-gray-700'>INEMA</span>
          </h1>
          <p className='mt-2 text-sm'>LOREM</p>
          <div className='mt-4 flex gap-2'>
            <Button className='light:bg-[#2D2E33] dark:bg-[#1A1B1F] dark:text-[#75ADEF] light:text-[#263547] font-bold py-2 px-4 rounded'>
              ĐẶT VÉ
            </Button>
            <Button className='border-2 dark:border-[#75ADEF] light:border-black dark:text-[#75ADEF] light:text-[#263547] font-bold py-2 px-4 rounded bg-transparent'>
              Book Services
            </Button>
          </div>
          {/* Social Icons */}
          <div className='flex gap-3 mt-4'>
            <img alt='Facebook' className='w-6 h-6' src='/facebook.svg' />
            <img alt='YouTube' className='w-6 h-6' src='/youtube.svg' />
            <img alt='TikTok' className='w-6 h-6' src='/tiktok.svg' />
            <img alt='Zalo' className='w-6 h-6' src='/zalo.svg' />
          </div>
          {/* Language */}
          <div className='mt-4 flex items-center gap-2'>
            <img alt='Vietnam' className='w-6 h-6' src='/vietnam-flag.svg' />
            <span>VN</span>
          </div>
        </div>

        {/* Các Cột */}
        <div className='w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm'>
          {/* TÀI KHOẢN */}
          <div>
            <h3 className='font-bold mb-2'>TÀI KHOẢN</h3>
            <p>
              <a href='#'>Đăng nhập</a>
            </p>
            <p>
              <a href='#'>Đăng ký</a>
            </p>
            <p>
              <a href='#'>Membership</a>
            </p>
          </div>
          {/* XEM PHIM */}
          <div>
            <h3 className='font-bold mb-2'>XEM PHIM</h3>
            <p>Phim đang chiếu</p>
            <p>Phim sắp chiếu</p>
            <p>Suất chiếu đặc biệt</p>
          </div>
          {/* DỊCH VỤ */}
          {/* <div>
            <h3 className="font-bold mb-2">DỊCH VỤ KHÁC</h3>
            <p>Nhà hàng</p>
            <p>Kidzone</p>
            <p>Bowling</p>
            <p>Billiards</p>
            <p>Gym</p>
          </div> */}
          {/* HỆ THỐNG RẠP */}
          <div>
            <h3 className='font-bold mb-2'>HỆ THỐNG RẠP</h3>
            <p>Cinestar Quốc Thanh (TP.HCM)</p>
            <p>Cinestar Hai Bà Trưng (TP.HCM)</p>
            <p>Cinestar Sinh Viên (Bình Dương)</p>
            <p>Cinestar Mỹ Tho (Tiền Giang)</p>
            <p>Cinestar Đà Lạt (TP. Đà Lạt)</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-8 border-t border-gray-600 py-4 text-center text-sm bg-transparent'>
        <div className='container px-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-white'>&copy; 2023 Cinestar. All rights reserved.</p>
          <div className='flex gap-6 text-white'>
            <a href='#'>Chính sách bảo mật</a>
            <a href='#'>Tin điện ảnh</a>
            <a href='#'>Hỏi và đáp</a>
          </div>
        </div>
        {/* Công ty & Giấy phép */}
        <div className='mt-4 text-white text-xs text-center'>
          <a href='http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=51406'>
            <img
              alt='Bộ Công Thương'
              className='mx-auto mb-2 w-48 h-20'
              src='https://api-website.cinestar.com.vn/media/wysiwyg/bocongthuong/dathongbao.webp'
            />
          </a>

          <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM - RẠP CHIẾU PHIM NGÔI SAO</p>
          <p>ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TPHCM</p>
          <p>
            GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2
            NGÀY 15/09/2014, CẤP BỞI SỞ KH&ĐT TPHCM
          </p>
        </div>
      </div>
    </div>
  );
};
