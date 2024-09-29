"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

let products = [
  new Product("대뱃살", 3000),
  new Product("목살", 5000),
  new Product("배꼽살", 4000),
  new Product("중뱃살", 1000),
];

const formNode = document.querySelector(".form");
const outputArea = document.querySelector(".area--selected");
const inputsTuna = document.getElementsByName("tuna");
const selectArea = document.querySelector("#parts-of-tuna");
const totalPrice = document.querySelector(".price-number");
const btnPurchase = document.querySelector(".btn--purchase");

var total = 0;

selectArea.addEventListener("click", function (e) {
  const option = e.target;
  const i = option.value;

  if (option.selected) {
    // 💫 리스트 요소 동적으로 추가
    const list = document.createElement("li");
    list.setAttribute("class", "part-of-tuna");

    const text = document.createTextNode(
      `${products[i].name} - ${products[i].price}`
    );
    list.appendChild(text);

    outputArea.appendChild(list);

    // 📌 insertAdjacentHTML() 메서드 사용
    // const listHTML = `<li class="part-of-tuna">${products[i].name} - ${products[i].price}</li>`;
    // outputArea.insertAdjacentHTML("beforeend", listHTML);

    // 💫 총액 표시
    total += products[i].price;
    totalPrice.textContent = total;

    // 💫 리스트 개별 클릭 시 삭제
    list.addEventListener("click", (e) => {
      e.target.remove();
      // outputArea.removeChild(this);
    });
  }
});

btnPurchase.addEventListener("click", function (e) {
  e.preventDefault();

  // 조건1) 선택된 상품이 없는 상황에서 클릭 - alert 출력
  // outputArea.childElementCount === 0 일 때, 출력해도 OK
  if (!outputArea.hasChildNodes()) {
    alert("상품을 선택하세요.");
  } else {
    openChildWindow();
  }

  // 조건2) 상품이 선택된 상황에서 버튼을 클릭하면 새로운 윈도우 창이 열리면서 결제 금액이 출력
});

function openChildWindow() {
  window.open("child.html", "_blank", "left= 800,top=100,width=600,height=400");
}
