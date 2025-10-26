let Bal = document.querySelector("#bal")
let Inc = document.querySelector("#inc")
let Exp = document.querySelector("#exp")
let List = document.querySelector(".list")
let TranInp = document.querySelector("#tran")
let AmtInp = document.querySelector("#Amt")
let Btn = document.querySelector("#btn")
let Clear = document.querySelector("#ok")

let bal = 0
let kamayi = 0
let exp = 0
let TransArr = []
let AmtArr = []

function get() {
  let tran = JSON.parse(localStorage.getItem("arr"))
  let amount = JSON.parse(localStorage.getItem("Amt"))
  let baki = JSON.parse(localStorage.getItem("balance"))
  let income = JSON.parse(localStorage.getItem("inc"))
  let expense = JSON.parse(localStorage.getItem("expen"))

  if (tran && amount) {
    TransArr = tran
    AmtArr = amount
  }
  bal = baki ? baki : 0
  kamayi = income ? income : 0
  exp = expense ? expense : 0
  tranitem()
}

function save() {
  localStorage.setItem("arr", JSON.stringify(TransArr))
  localStorage.setItem("Amt", JSON.stringify(AmtArr))
  localStorage.setItem("balance", JSON.stringify(bal))
  localStorage.setItem("inc", JSON.stringify(kamayi))
  localStorage.setItem("expen", JSON.stringify(exp))
}

function tranitem() {
  List.innerHTML = ""
  bal = 0
  kamayi = 0
  exp = 0

  TransArr.forEach((val, index) => {
    let li = document.createElement("li")
    li.innerText = val

    let span = document.createElement("span")
    span.innerText = AmtArr[index]
    li.append(span)
    List.append(li)
    bal += Number(AmtArr[index])
    if (Number(AmtArr[index]) > 0) {
      kamayi += Number(AmtArr[index])
    } else {
      exp -= Number(AmtArr[index])
      li.style.borderLeft = "5px solid red"
    }

  })
  Bal.innerText = bal
  Inc.innerText = kamayi
  Exp.innerText = exp
  save()
  AmtInp.value = ""
  TranInp.value = ""
}

Btn.addEventListener("click", () => {
  if (TranInp.value.length <= 0 || AmtInp.value.length <= 0) return

  TransArr.push(TranInp.value)
  AmtArr.push(Number(AmtInp.value))
  tranitem()
})

Clear.addEventListener("click", () => {
  TransArr = []
  AmtArr = []
  bal = 0
  kamayi = 0
  exp = 0
  tranitem()
})

get()






