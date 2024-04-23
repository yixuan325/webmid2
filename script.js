function addTodo() {
    var input = document.getElementById("todoInput"); //設置變數input
    var inputValue = input.value.trim(); //trim() 去除首尾空白
    if (inputValue !== "") {
        var ul = document.getElementById("todoList"); // 取得待辦事項列表
        var li = document.createElement("li"); // 創建新的列表項目
        var textContainer = document.createElement("span");
        textContainer.textContent = inputValue;
        li.appendChild(textContainer); // 將文字節點添加到列表項目中
        ul.appendChild(li); //將 li 元素添加到待辦事項列表 (ul) 中
        addButtons(li); // 新增後加入編輯和刪除按鈕
        input.value = ""; //清空輸入框中的值
        showClearButton();
    }
}

function addButtons(li) {
    var editButton = document.createElement("button");
    editButton.textContent = "編輯";
    editButton.className = "edit";
    editButton.onclick = function () {
        editTodoItem(li);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "刪除";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        deleteTodoItem(li);
    };

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(deleteButton); // 將刪除按鈕添加到容器
    buttonContainer.appendChild(editButton); // 將編輯按鈕添加到容器

    li.appendChild(buttonContainer);
}

function editTodoItem(li) {
    var input = document.getElementById("todoInput");
    input.value = li.querySelector("span").textContent.trim();
    input.focus();
    var addButton = document.querySelector("button");
    addButton.textContent = "編輯";
    addButton.onclick = function () {
        updateTodoItem(li);
    };
}

function updateTodoItem(li) {
    var input = document.getElementById("todoInput");
    var inputValue = input.value.trim();
    if (inputValue !== "") {
        li.querySelector("span").textContent = inputValue;
        input.value = "";
        var addButton = document.querySelector("button");
        addButton.textContent = "新增";
        addButton.onclick = addTodo;
    }
}

function deleteTodoItem(li) {
    li.parentNode.removeChild(li);
    showClearButton();
}

function showClearButton() {
    var clearButton = document.getElementById("clearAllButton");
    if (document.getElementById("todoList").childElementCount > 0) {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }
}

function clearAll() {
    var ul = document.getElementById("todoList");
    ul.innerHTML = "";
    showClearButton();
}
