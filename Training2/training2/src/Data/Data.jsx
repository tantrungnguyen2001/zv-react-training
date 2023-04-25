const Data =  [
    {
        q: "What is a React state?",
	    a: "Là 1 object dùng để chứa thông tin hoặc dữ liệu về component. State của 1 component có thế thay đổi liên tục, mỗi lần thay đổi thì cả component sẽ render lại.",
    },
    {
        q: "When to use state?",
        a: "Sử dụng state để trữ dữ liệu của trang hiện tại cần đến.",
    },
    {
        q: "What is a properties (or props) in React?",
        a: "Là những tham số được truyền cho các React component. Props được truyền tới component thông qua các thuộc tính HTML.",
    },
    {
        q: "When to use props?",
        a: "Sử dụng props để truyền dữ liệu và các hàm xử lí sự kiện xuống cho các child component.",
    },
    {
        q: "React Ref",
        a: "Ref là 1 component giữ cho giá trị của nó không thay đổi giữa các lần render và truy xuất giá trị đó thông qua key 'current'.",
    },
    {
        q: "Rendering a list with React using `map`",
        a: "Map hoạt động giống như 1 hàm tính toán. Nó lặp lại mảng đã gọi đến nó và trả về 1 mảng mới, với mỗi giá trị của mảng ban đầu được biến đổi thành giá trị mới dựa theo các tính toán logic. Một điều quan trọng là khi tạo 1 danh sách chuỗi trong React phải thêm thuộc tính key, việc này sẽ giúp cho DOM theo dõi được tiến trình chạy của chuỗi.",
    },
    {
        q: "Fragment in React",
        a: "Fragment là 1 tính năng trong React cho phép bạn trả về nhiều element bằng cách nhóm một danh sách các element con mà không phải thêm node vào DOM.",
    },
    {
        q: "Debugging React app using React Devtools",
        a: "React Developer Tools Extension là một extension giúp tránh được nhiều lỗi bằng cách cung cấp cái nhìn tổng quan về các state và prop hiện tại của từng Component, Component tree cụ thể, cũng như theo dõi được hiệu năng các quá trình trong component với các khoảng thời điểm khác nhau.",
    },
    {
        q: "Basic usage of `lodash`",
        a: "Lodash là 1 thư viện Javascript cung cấp nhiều hàm hữu ích làm việc với mảng. Lodash giúp viết code Javascript ngắn gọn và dễ bảo quản hơn.",
    }
]

export default Data;