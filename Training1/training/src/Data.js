const Data = [
  {
    index: 1,
    q: "What is a React library?",
    a: "React là 1 thư viện giúp nhà phát triển xây dựng giao diện người dùng(UI) với nhiều thành phần gộp lại với nhau được gọi là các Component. Một component là sự pha trộn giữa HTML và Javascript chứa tất cả các logic cần thiết để hiển thị phần nhỏ của bức tranh giao diện người dùng rộng lớn.",
  },
  {
    index: 2,
    q: "Why do we use React?",
    a: "Về cơ bản thì React cho phép nhà phát triển tối đa hóa từng phần ứng dụng của họ cho cả 2 bên là client và server, làm tăng tốc độ trong quá trình phát triển. Đơn giản hơn thì những nhà phát triển khác nhau khi làm ra những chỉnh sửa sẽ không làm ảnh hưởng logic của toàn bộ ứng dụng.",
  },
  {
    index: 3,
    q: "Create a new React project using `create-react-app`",
    a: "Dùng câu lệnh 'npx create-react-app project-name' để tạo ra 1 ví dụ của ứng dụng React có đầy đủ các chức năng. 'project-name' có thể dùng bất kì tên nào để đặt cho dự án.",
  },
  {
    index: 4,
    q: "ES6 Systax Overview: `import`, `export`, `arrow function`, `class declaration`",
    a: "Import: Được dùng thêm vào các biến dưới dạng Object để liên kết các module với nhau. Export: Được dùng để xuất ra các giá trị, các hàm từ 1 module Javascript. Chỉ có duy nhất 1 'export default' mỗi file. Arrow function (Stateless component): Cho phép viết cú pháp hàm ngắn gọn hơn. Class declaration: Là 1 kiểu khác của hàm, nhưng thay vì dùng keyword'function' để khai báo thì dùng keyword 'class'. Các thuộc tính nằm trong phương thức constructor.",
  },
  {
    index: 5,
    q: "Basic concept of React",
    a: "React được xây dựng dựa trên khái niệm tái sử dụng. Bạn khai báo các thành phần nhỏ và dùng chúng để tạo và hình thành nên một thành phần lớn hơn. Tất cả các thành phần nhỏ hoặc lớn đều có thể tái sử dụng và thậm chí còn có thể được dùng cho các dự án khác nhau.",
  },
  {
    index: 6,
    q: "Component types and when to use them: Component, PureComponent, Stateless Component (or Functional Component)",
    a: "Component: Độc lập và có thể tái sử dụng. Chúng có chức năng giống như các function của Javascript, nhưng làm việc độc lập và trả về kiểu HTML. PureComponent: Là component đơn giản và nhanh nhất. Bởi vì PureComponent không thay đổi hoặc ảnh hưởng bởi state của các giá trị nằm ngoài nó. Stateless component: Cơ bản là các hàm JavaScript. Chúng ta có thể tạo 1 Stateless Component trong React bằng cách viết 1 hàm JavaScript. Các hàm này có thể nhận hoặc không nhận dữ liệu dưới dạng tham số. Stateful component: Các Stateful Component thường phức tạp hơn một chút so với Stateless Component. Các Stateless Component không nhận biết được các thành phần khác trong chương trình trong khi các Stateful Component có thể hoạt động với nhau. Chúng ta có thể truyền dữ liệu từ Component này sang Component khác.",
  },
  {
    index: 7,
    q: "Re-using React components",
    a: "Tái sử dụng các React component bằng cách chia nhỏ component to thành các component bé. Trong phát triển 1 ứng dụng to lớn thì việc tái sử dụng này sẽ tiết kiệm rất nhiều thời gian cho công đoạn coding.",
  },
  {
    index: 8,
    q: "Folder structure of a React project",
    a: "Cấu trúc folder của 1 dự án React như sau: Assests: Chứa hình ảnh và các file style (CSS). Layouts: Chứa các layout của dự án như là header, footer,... ở đây và gọi đến nó khi sử dụng. Components: Chứa một tập hợp các thành phần UI như là button, modal, input,... có thể được sử dụng trong các file của dự án. Pages: Những file trong thư mục này chỉ ra đường đi của ứng dụng. Mỗi file trong thư mục chứa route dẫn đến chính nó. Mỗi trang có state của chính nó và được sử dụng để gọi các hoạt động đồng bộ. Nó thường bao gồm nhiều component nhóm lại nhau. Middleware: Chứa các phần mềm trung gian để tạo nên các hiệu ứng cho ứng dụng. Nó được sử dụng khi chúng ta dùng redux với nó. Routes: Chứa tất cả các đường đi của ứng dụng. Config: Chứa các biến môi trường trong file config.js. Chúng ta dùng file này để thiết lập môi trường cho ứng dụng. Services: Folder này được thêm vào khi ta sử dụng redux trong dự án. Trong này có 3 file tên là actions, reducers và constant subfolders để quản lí state.  Utils: Chứa các hàm được sử dụng thường xuyên trong dự án.",
  }
]

export default Data;