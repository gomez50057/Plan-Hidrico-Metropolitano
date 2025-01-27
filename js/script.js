// PRELOAD
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// menu-dropdown
document.querySelectorAll(".arrow, .arrowSub, .arrowSubSub, .link_name, .titulo_sub, .titulo_subsub").forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    var arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    
    // Verificar si arrow.closest(".menu-dropdown") no es null antes de acceder a querySelector
    var menuDropdown = arrow.closest(".menu-dropdown");
    if (menuDropdown) {
      var submenu = menuDropdown.querySelector(".submenu-items");
      
      // Verificar si submenu no es null antes de intentar acceder a sus propiedades
      if (submenu) {
        submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
        
        // Verificar si el elemento clicado es .arrowSubSub o .arrow y .titulo_subsub
        if (arrow.classList.contains("arrowSubSub") || arrow.classList.contains("titulo_subsub")) {
          var arrowToRotate = menuDropdown.querySelector(".arrowSubSub");
          arrowToRotate.style.transform = submenu.style.display === "block" ? "rotate(-180deg)" : "rotate(0deg)";
        } else if (arrow.classList.contains("arrow") || arrow.classList.contains("arrowSub")) {
          arrow.style.transform = submenu.style.display === "block" ? "rotate(-180deg)" : "rotate(0deg)";
        }
      }
    }
  });
});




// Función para verificar y cerrar la barra lateral si la pantalla es menor a 500px de ancho //
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".logo-details");
let profileContent = document.querySelector(".profile-content");
function checkScreenWidth() {
  if (window.innerWidth < 500) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
}

// Verificar el ancho de la pantalla al cargar la página
checkScreenWidth();
// Verificar el ancho de la pantalla cada vez que cambie el tamaño de la ventana
window.addEventListener("resize", () => {
  checkScreenWidth();
});

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

profileContent.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});



// Obtén referencias a los checkboxes y la tabla de simbología //
var checkboxes = [
  // document.getElementById("chkPobAGEBZMP"),
  document.getElementById("chkPobAGEBHgo"),
];

// Agrega checkboxes adicionales con nombres similares
// for (var i = 1; i <= 12; i++) {
//   var checkbox = document.getElementById("chkPobAGEBR" + (i < 10 ? "0" : "") + i);
//   checkboxes.push(checkbox);
// }

var legend = document.getElementById("legend");

// Agrega oyentes de cambio a los checkboxes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", actualizarTablaLegend);
});

// Función para actualizar la visibilidad de la tabla
function actualizarTablaLegend() {
  // Verifica el estado de todos los checkboxes
  var mostrarTabla = checkboxes.some(function (checkbox) {
    return checkbox.checked;
  });

  // Muestra u oculta la tabla según la condición
  legend.style.display = mostrarTabla ? "block" : "none";
}


// Obtén referencias a los checkboxes y el elemento móduloR
var checkboxesModuloR = [
  document.getElementById("chk100_Ajacuba_B1_2025"),
  document.getElementById("chkActopan_B1_2025"),
  document.getElementById("chkAlto_Tepatepec_B1_2025"),
  document.getElementById("chkArticulo_27_B1_2025"),
  document.getElementById("chkEl_Bexha_B1_2025"),
  document.getElementById("chkCerro_El_Xicuco_B1_2025"),
  document.getElementById("chkCerro_Juandho_B1_2025"),
  document.getElementById("chkDendho_Cardonal_B1_2025"),
  document.getElementById("chkEl_Solis_B1_2025"),
  document.getElementById("chkEndho_Xochitlan_B1_2025"),
  document.getElementById("chkGamaGaox_B1_2025"),
  document.getElementById("chkPotrero_Blanco_B1_2025"),
  document.getElementById("chkTeltipan_B1_2025"),
  document.getElementById("chkTepatepec_B1_2025")
];

var moduloR = document.getElementById("moduloR");

// Agrega oyentes de cambio a los checkboxes
checkboxesModuloR.forEach(function (checkbox) {
  checkbox.addEventListener("change", actualizarModuloR);
});

// Función para actualizar la visibilidad del módulo
function actualizarModuloR() {
  // Verifica el estado de todos los checkboxes
  var mostrarModulo = checkboxesModuloR.some(function (checkbox) {
    return checkbox.checked;
  });

  // Muestra u oculta el módulo según la condición
  moduloR.style.display = mostrarModulo ? "block" : "none";
}

// Llama a la función al cargar la página para establecer el estado inicial
actualizarModuloR();

// Obtén referencias a todos los checkboxes
var checkboxesDR = [
  document.getElementById("chk112Ajacuba"),
  document.getElementById("chk100Alfajayucan"),
  document.getElementById("chk003Tula")
];

// Obtén referencia al elemento DR
var DR = document.getElementById("DR");

// Agrega oyentes de cambio a los checkboxes
checkboxesDR.forEach(function (checkbox) {
  if (checkbox) { // Verifica que el checkbox exista
    checkbox.addEventListener("change", actualizarDR);
  }
});

// Función para actualizar la visibilidad del elemento DR
function actualizarDR() {
  // Verifica si al menos un checkbox está seleccionado
  var mostrarDR = checkboxesDR.some(function (checkbox) {
    return checkbox && checkbox.checked; // Verifica que exista y esté marcado
  });

  // Muestra u oculta el elemento DR
  DR.style.display = mostrarDR ? "block" : "none";
}

// Llama a la función al cargar la página para establecer el estado inicial
actualizarDR();


// Define una función para manejar la visibilidad de las tablas //
function actualizarTabla(checkbox, tablaId) {
  var tabla = document.getElementById(tablaId);
  tabla.style.display = checkbox.checked ? 'block' : 'none';
}

// Obtén referencias a los checkboxes
// var checkboxImgObj = document.getElementById('chkZMP_PDUyOT_ImgObj');
// var checkboxZonP = document.getElementById('chkZMP_PDUyOT_ZonP');
// var checkboxEtapaCrecimiento = document.getElementById('chkZMP_PDUyOT_EC');
// var checkboxPoligonosActuacion = document.getElementById('chkZMP_PDUyOT_PA');


// var checkboxPMDU_Pachuca = document.getElementById('chkEC_Pachuca');

// var checkboxPMDU_Tizayuca = document.getElementById('chkZonSec_Tizayuca');
// var checkboxPMDU_VillaTezontepec = document.getElementById('chkZonSec_VillaTezontepec');
// var checkboxPMDU_MR = document.getElementById('chkZonSec_MR');




// Agrega oyentes de cambio a los checkboxes
// checkboxImgObj.addEventListener('change', function () {
//   actualizarTabla(checkboxImgObj, 'ImgObjetivo');
// });
// checkboxZonP.addEventListener('change', function () {
//   actualizarTabla(checkboxZonP, 'ZonP');
// });
// checkboxEtapaCrecimiento.addEventListener('change', function () {
//   actualizarTabla(checkboxEtapaCrecimiento, 'EtapaCrecimiento');
// });
// checkboxPoligonosActuacion.addEventListener('change', function () {
//   actualizarTabla(checkboxPoligonosActuacion, 'PoligonosActuacion');
// });

// checkboxPMDU_Pachuca.addEventListener('change', function () {
//   actualizarTabla(checkboxPMDU_Pachuca, 'PMDU_Pachuca');
// });

// checkboxPMDU_Tizayuca.addEventListener('change', function () {
//   actualizarTabla(checkboxPMDU_Tizayuca, 'PMDU_Tizayuca');
// });

// checkboxPMDU_VillaTezontepec.addEventListener('change', function () {
//   actualizarTabla(checkboxPMDU_VillaTezontepec, 'PMDU_VillaTezontepec');
// });

// checkboxPMDU_MR.addEventListener('change', function () {
//   actualizarTabla(checkboxPMDU_MR, 'PMDU_MR');
// });

checkboxesDR.addEventListener('change', function () {
  actualizarTabla(checkboxesDR, 'DR');
});

checkboxesModuloR.addEventListener('change', function () {
  actualizarTabla(checkboxesModuloR, 'moduloR');
});


// // // Función para añadir el evento de cambio a un elemento Ajusta el zoom para mostrar la capa correspondiente
function addChangeEventListener(id, layer) {
  document.getElementById(id).addEventListener('change', function() {
    if (this.checked) {
      map.fitBounds(layer.getBounds(), { maxZoom: 12 });
    } 
  });
}

// Añade el evento de cambio para chkZonSec_XXXXXXXX
// addChangeEventListener('chkZonSec_Tizayuca', HDMA_Unifamiliar);
// addChangeEventListener('chkZonSec_MR', MR_PA);
// addChangeEventListener('chkZonSec_VillaTezontepec', Villa_equipamiento);

// addChangeEventListener('chk100_Ajacuba_Bloque_1_2025', Modulo_Actopan_B1_2025);
// addChangeEventListener('chkActopan_Bloque_1_2025', Modulo_Agricola_Teltipan_B1_2025);
// addChangeEventListener('chkAlto_Tepatepec_Bloque_1_2025', Modulo_Alto_Tepatepec_B1_2025);
// addChangeEventListener('chkArticulo_27_Bloque_1_2025', Modulo_El_Bexha_B1_2025);
// addChangeEventListener('chkEl_Bexha_Bloque_1_2025', Modulo_Cerro_Juandho_B1_2025);
// addChangeEventListener('chkCerro_El_Xicuco_Bloque_1_2025', Modulo_Endho_Xochitlan_B1_2025);
// addChangeEventListener('chkCerro_Juandho_Bloque_1_2025', Modulo_GamaGaox_B1_2025);
// addChangeEventListener('chkDendho_Cardonal_Bloque_1_2025', Modulo_El_Solis_B1_2025);
// addChangeEventListener('chkEl_Solis_Bloque_1_2025', Modulo_Tepatepec_B1_2025);
// addChangeEventListener('chkEndho_Xochitlán_Bloque_1_2025', Modulo_Cerro_El_Xicuco_B1_2025);
// addChangeEventListener('chkGamaGaox_Bloque_1_2025', Modulo_Distrito_100_Ajacuba_B1_2025);
// addChangeEventListener('chkPotrero_Blanco_Bloque_1_2025', Modulo_Articulo_27_B1_2025);
// addChangeEventListener('chkTeltipan_Bloque_1_2025', Modulo_Dendho_Cardonal_B1_2025);
// addChangeEventListener('chkTepatepec_Bloque_1_2025', Modulo_Potrero_Blanco_B1_2025);


