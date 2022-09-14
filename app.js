let id = "deba";
let deleteValue = true;
// localStorage.clear();
selectData();
function manageData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
//   console.log(name)
  if (name == '') {
    document.getElementById("msg").innerHTML = "*please add some task";
    // console.log('deba')
//   console.log(name)
    
  } else {
    if (id === "deba") {
      let arr = getCrudItem();
      // console.log(arr)
      if (arr == null) {
        let data = [name];
        setCrudData(data);
      } else {
        arr.push(name);
        setCrudData(arr);
      }
    } else {
      updateData();
    }
  }

  document.getElementById("name").value = "";
  //   document.getElementById("name").focus();
  selectData();
}
function selectData() {
  let arr = getCrudItem();
  if (arr != null) {
    let html = "";
    let i;
    for (i = 0; i < arr.length; i++) {
      html =
        html +
        `
            <li>
              <span>${arr[i].trim()}</span>
              
              <div>
              <button class="delete-todo js-delete-todo" onclick="deleteData(${i})">
              <i class="fa-solid fa-trash"></i>
              </button>
              <button class="edit-todo" onclick="editData(${i})">
              <i class="fa-solid fa-pen-to-square"></i>
              </button>
              </div>
              </li>
            `;
    }
    document.querySelector(".todo-content").innerHTML = html;
    document.getElementById("name").focus();
  }
}
function editData(keys) {
  // document.getElementById("editClass").style.display="inline";
  // // document.getElementById("addClass").style.display="none";
  deleteValue = false;
  document.getElementById("editData").style.display = "inline";
  document.getElementById("addData").style.display = "none";
  document.getElementById("cancelData").style.display = "inline";
  id = keys;
  let arr = getCrudItem();
  document.getElementById("name").value = arr[keys];
  //   document.getElementById("name").focus();
  // if(preventDelete()){
  //     preventDelete()
  // }
  selectData();
}

function deleteData(keys) {
  let arr = getCrudItem();
  // a=arr.length+"3"
  if (deleteValue) {
    arr.splice(keys, 1);
    setCrudData(arr);
    selectData();
    // console.log('if')
  } else {
    // console.log(de)
    // console.log('else')
    alert("unable to do delete operation when u are in edit mode");
    document.getElementById("name").focus();
  }

  // return keys
}

function getCrudItem() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}
function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
function updateData() {
  let name = document.getElementById("name").value;
  let arr = getCrudItem();
  arr[id] = name;
  setCrudData(arr);
  selectData();
}
function cancelData() {
  let arr = getCrudItem();
  document.getElementById("name").value = arr[id];
  setCrudData(arr);
  document.getElementById("name").value = "";
  document.getElementById("name").focus();
  selectData();
}

