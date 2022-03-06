# COVID-S WEB APPLICATION
<img align="left" alt="" src="https://img.shields.io/badge/Version-beta-brightgreen" />
<br />

## MÔ TẢ DỰ ÁN

Đây là website hỗ trợ bệnh nhân mắc COVID-19. Trong quá trình bị cách ly, họ có thể gửi yêu cầu mua các vật dụng cần thiết thông qua website. Đội tình nguyện viên sẽ tiếp nhận và thực hiện cho họ. Ngoài ra, bệnh nhân cũng có thể xem thông tin các bác sĩ mà website tổng hợp để có thể liên lạc khi cần thiết.<br />
### **Hiện tại website chưa được public, chúng tôi sẽ cố gắng deploy trong thời gian sớm nhất.**<br /> <br />

## Hướng dẫn chạy ứng dụng:
**Lưu ý: máy tính cần cài đặt nodejs <br /><br />**
Vào folder src/database, import file "covid_support.sql" vào DBMS mySQL (Xin lỗi vì sự bất tiện này) <br />
1. Tại folder gốc của dự án (covid-s-project) chạy lệnh `npm start` trong terminal.
    Theo mặc định port chạy ứng dụng là 3060 (có thể đổi port tại file index.js trong covid-s-project nếu bị xung đột)
    Nếu bị lỗi port 3060 đang sử dụng, chạy lệnh "npm stop" để kill toàn bộ port đang chạy và "npm start" lần nữa.
2. Sau khi hiển thị "Database is connected" trong console, vào trình duyệt nhập url: `localhost:3060`, truy cập ứng dụng thành công.<br>
## Giao diện
### **1. Giao diện dành cho người dùng (bệnh nhân)**<br><br>
<p style='text-align: center'>Đây là giao diện trang chủ khi chưa đăng nhập<p/>
<img src='src/screenshots/1.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện trang đăng nhập<p/>
<img src='src/screenshots/2.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện trang đăng ký tình nguyện viên<p/>
<img src='src/screenshots/3.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện gửi yêu cầu tiếp tế của bệnh nhân sau khi đăng nhập<p/>
<img src='src/screenshots/4.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện các đơn yêu cầu và trạng thái<p/>
<img src='src/screenshots/5.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện thông tin bác sĩ tư vấn<p/>
<img src='src/screenshots/6.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện thông tin của một yêu cầu đã gửi<p/>
<img src='src/screenshots/8.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện thông tin cá nhân<p/>
<img src='src/screenshots/9.png' style='border-radius: 10px'/><br><hr>

### **2. Giao diện dành cho tình nguyện viên**<br><br>
<p style='text-align: center'>Giao diện các yêu cầu bệnh nhân đã gửi<p/>
<img src='src/screenshots/15.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện các yêu cầu đã nhận<p/>
<img src='src/screenshots/14.png' style='border-radius: 10px'/><br><hr>
<p style='text-align: center'>Giao diện thông tin của một yêu cầu<p/>
<img src='src/screenshots/16.p ng' style='border-radius: 10px'/><br><hr>