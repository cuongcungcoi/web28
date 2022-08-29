// Cho mảng todos chứa danh sách công việc cần làm, mỗi công việc có trạng thái completed cho biết đã hoàn thành hay chưa
const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
  {
    id: 4,
    completed: true,
    content: "Learning Ruby",
  },
];

// Tạo 1 thẻ <li> ứng với mỗi công việc, hiển thị nội dung công việc
// Nếu đã hoàn thành, thêm class để hiển thị gạch ngang nội dung
// Nếu đã hoàn thành, hiển thị kèm nội dung 1 nút 'Xóa'
// Nếu chưa hoàn thành, hiển thị kèm nội dung 1 nút 'Hoàn thành'
// Hiển thị danh sách công việc vào <ul>

let newList = todos.map(function (value) {
  return `<li>${value.content}</li>`;
});

newList = newList.join("");

document.querySelector("ul").innerHTML = newList;
function Status(arr) {
  for (const value of arr) {
    if (value.completed) {
      document.querySelectorAll("li")[value.id - 1].innerHTML +=
        '<span class="far"><button>Xóa</button></span>';
      document.querySelectorAll("li")[value.id - 1].classList.add("completed");
    } else
      document.querySelectorAll("li")[value.id - 1].innerHTML +=
        '<span class="far"><button>Hoàn Thành</button></span>';
  }
}
Status(todos);
