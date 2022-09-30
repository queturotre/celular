const model = {
  currentCellphone: null,
  cellphones: [
    {
      name: "Galaxy S22",
      imgSrc: '../img/s22.png',
      click: 0
    },
    {
      name: "Galaxy S21",
      imgSrc: '../img/s21.png',
      click: 0
    },
    {
      name: "Galaxy S20",
      imgSrc: '../img/s20.png',
      click: 0
    },
    {
      name: "Galaxy S10",
      imgSrc: '../img/s10.png',
      click: 0
    },
    {
      name: "Galaxy S9",
      imgSrc: '../img/s9.png',
      click: 0
    }
  ]
};

const controller = {
  onInit() {
    model.currentCellphone = model.cellphones[0];
    cellphoneView.init();
    cellphoneListView.init();
  },

  getCurrentCellphone() {
    return model.currentCellphone;
  },

  setCurrentCellphone(cell) {
    model.currentCellphone = cell;
  },

  getCellphones() {
    return model.cellphones;
  },

  incrementCounter() {
    model.currentCellphone.click++;
    cellphoneView.assignValues();
  }  
  
};

const cellphoneView = {
  //What will render in the html. ID's and other Dom-manipulation features
  init() {
    this.cellNameTag = document.getElementById('cellphone-name'); //h2
    this.cellCountTag = document.getElementById('cellphone-count'); //Span
    this.cellImageTag = document.getElementById('cellphone-img'); //img

    this.cellImageTag.addEventListener('click', this.addClick);

    this.assignValues();
  },

  addClick(){
    return controller.incrementCounter();
  },

  assignValues(){
    const currentCellphone = controller.getCurrentCellphone();
    this.cellNameTag.textContent = currentCellphone.name;
    this.cellCountTag.textContent = currentCellphone.click;
    this.cellImageTag.src = currentCellphone.imgSrc;
    this.cellImageTag.style.cursor = 'pointer';
  }
};

const cellphoneListView = {
  init() {
    this.cellphoneListTag = document.getElementById('cellphone-list'); //Div
    this.assignValues();
  },

  assignValues(){
    let cell;
    let tag;

    const cellphones = controller.getCellphones(); //Vector
    this.cellphoneListTag.innerHTML = '';

    for(let i = 0; i < cellphones.length; i++){
      cell = cellphones[i];
      
      tag = document.createElement('li'); // <li class="tag-creado">GalaxyS22</li>
      tag.textContent = cell.name; 
      tag.className = 'tag-creado';
      tag.addEventListener(
        'click',
        (function(obj) {
          return function() {
            controller.setCurrentCellphone(obj);
            cellphoneView.assignValues();
          };
        })(cell)
      );
      
      this.cellphoneListTag.append(tag);
    }
  },
};

controller.onInit();

model.cellphones[3].name = "Pelexwy X";