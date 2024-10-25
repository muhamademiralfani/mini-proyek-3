// Base Class Developer yang menjadi dasar dari semua developer roles.
class Developer {
  createUI() {
    console.log('Membangun antarmuka pengguna...');
  }
  createDb() {
    console.log('Membangun dan mengelola database...');
  }
  createDesign() {
    console.log('Membuat desain user interface...');
  }
}

// Melakukan update reopository oleh Frontend atau backend
class Repository {  
  upDateRepository() {
    console.log('Melakukan update repository');
  }
}

// Class FrontendDeveloper mewarisi dari Developer, dan memiliki tanggung jawab khusus di frontend.
class FrontendDeveloper extends Developer {
  createAnimation() {
    console.log('Menambahkan animasi ke halaman...');
  }

  upDateRepository() {
    console.log('Melakukan update repository');
  }

  createUI() {
    console.log('Frontend Developer: Membangun antarmuka pengguna dengan elemen interaktif dan animasi.');
  }
}

// Class BackendDeveloper mewarisi dari Developer, dan memiliki tanggung jawab khusus di backend.
class BackendDeveloper extends Developer {
  manageAPI() {
    console.log('Mengelola API backend...');
  }

  upDateRepository() {
    console.log('Melakukan update repository');
  }

  createDb() {
    console.log('Backend Developer: Membangun dan mengelola database dengan optimasi query.');
  }
}

// Class UI/UX Desingner mewarisi dari Developer, dan memiliki tanggung jawab khusus di Design
class UIUXDesigner extends Developer {
  editDesign() {
    console.log('Melakukan pengeditan pada tampilan design');
  }

  createDesign() {
    console.log('UI/UX: Membuat design tampilan website.');
  }
}

// Kelas Project yang menerima dependency berupa developer (Frontend atau Backend) melalui constructor.
class Project {
  constructor(developer) {
    this.developer = developer;
  }

  build() {
    if (this.developer instanceof FrontendDeveloper) {
      this.developer.createUI();
    } else if (this.developer instanceof BackendDeveloper) {
      this.developer.createDb();
    } else if (this.developer instanceof UIUXDesigner) {
      this.developer.createDesign();
    }
  }

  upDatedRepository() {
    if (this.developer instanceof UIUXDesigner) {
      console.log('Tidak dapat mengupdate repository');
    } else {
      this.developer.upDateRepository();
    }
  }

  developerFuture() {
    if (this.developer instanceof FrontendDeveloper) {
      this.developer.createAnimation();
    } else if (this.developer instanceof BackendDeveloper) {
      this.developer.manageAPI();
    } else if (this.developer instanceof UIUXDesigner) {
      this.developer.editDesign();
    }
  }
}

// Class UI/UX Desingner mewarisi dari class Project, dan memiliki tanggung jawab khusus di bagian testing
class QualityEngineering extends Project {
  constructor(developer) {
    super(developer);
  }
  testing() {
    if (this.developer instanceof FrontendDeveloper) {
      console.log('Melakukan Testing project di bagian Frontend');
    } else if (this.developer instanceof BackendDeveloper) {
      console.log('Melakukan Testing project di bagian Backend');
    } else if (this.developer instanceof UIUXDesigner) {
      console.log('Melakukan Testing project di bagian UI/UX');
    }
  }
}

// Menggunakan UI/UX untuk membuat design website
const uiUxDesigner = new UIUXDesigner();
const uiUxDesignerProject = new Project(uiUxDesigner);
uiUxDesignerProject.build();
uiUxDesignerProject.developerFuture();
uiUxDesignerProject.upDatedRepository();

console.log('-----------------');

// Menggunakan FrontendDeveloper untuk membangun project
const frontendDev = new FrontendDeveloper();
const frontendProject = new Project(frontendDev);
frontendProject.build();
frontendProject.developerFuture();
frontendProject.upDatedRepository();

console.log('-----------------');

// Menggunakan BackendDeveloper untuk membangun project
const backendDev = new BackendDeveloper();
const backendProject = new Project(backendDev);
backendProject.build();
backendProject.developerFuture();
backendProject.upDatedRepository();

console.log('-----------------');

// Testing project Frontend
const testingProjectFrontend = new QualityEngineering(frontendDev);
testingProjectFrontend.testing();

// Testing Project Backend
const testingProjectBackend = new QualityEngineering(backendDev);
testingProjectBackend.testing();

// Testing Project UI/UX
const testingProjectUIUX = new QualityEngineering(uiUxDesigner);
testingProjectUIUX.testing();
