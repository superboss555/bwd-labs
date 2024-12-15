document.getElementById("burger").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");

  sidebar.classList.toggle("active"); // Переключаем класс активного состояния для сайдбара
  nav.classList.toggle("active"); // Переключаем отображение верхнего меню

  // Переключаем класс active для бургер-меню
  burger.classList.toggle("active");
});

// Обработчик клика вне бургер-меню и сайдбара
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");

  // Проверяем, был ли клик вне бургер-меню и сайдбара
  if (
    !burger.contains(event.target) &&
    !sidebar.contains(event.target) &&
    nav.classList.contains("active")
  ) {
    closeMenu();
  }
});

function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");

  // Удаляем класс active, если он есть
  sidebar.classList.remove("active");
  nav.classList.remove("active");
  burger.classList.remove("active");
}

const overlay = document.getElementById("overlay");
const dialog = document.getElementById("taskDialog");
const openDialogButton = document.getElementById("openDialog");
const closeDialogButton = document.querySelector(".close");
const taskForm = document.getElementById("taskForm");

// Функция для открытия диалогового окна
function openDialog() {
  dialog.showModal();
  overlay.classList.add("active"); // Активируем оверлей
}

// Открытие диалогового окна по кнопке
openDialogButton.addEventListener("click", openDialog);

// Закрытие диалогового окна через кнопку "Отмена"
closeDialogButton.addEventListener("click", cancelTaskCreation);

// Закрытие диалогового окна при клике на оверлей
overlay.addEventListener("click", () => {
  // Закрываем диалог, если он открыт
  if (dialog.open) {
    closeDialog();
  }
});

// Обработка отправки формы
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем отправку формы
  alert("Задача добавлена!");
  closeDialog(); // Закрываем диалоговое окно
});

// Функция для закрытия диалога
function closeDialog() {
  dialog.close();
  overlay.classList.remove("active"); // Деактивируем оверлей
}

// Функция для отмены создания задачи
function cancelTaskCreation() {
  taskForm.reset();
  closeDialog(); // Закрываем диалог
}

dialog.addEventListener("click", (event) => {
  // Проверяем, был ли клик вне формы
  if (event.target === dialog) {
    closeDialog();
  }
});

// Закрытие диалогового окна при нажатии ESC
dialog.addEventListener("cancel", cancelTaskCreation);


