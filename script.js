const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06"],
  food: ["01-01", "01-03"],
  water: ["01-04", "01-05"],
  read: ["01-02", "01-03", "01-06"],
  work: ["01-01", "01-02", "01-03", "01-04"],
}

nlwSetup.setData(data)
nlwSetup.load()