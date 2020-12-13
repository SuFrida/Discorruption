const callApi = require('./api');

const api = {};
const apis = {
  catalog: 'api-catalog',
  datasets: 'datasets',
  concesionesMineras: 'bases-de-datos-de-concesiones-mineras',
  calidadAire: 'calidadAire',
  condicionesAtmosfericas: 'condiciones-atmosfericas',
  calidadAgua: 'datos-de-calidad-del-agua-de-5000-sitios-de-monitoreo',
  calidadAguaUsoHumano: 'monitoreo-de-calidad-de-agua-de-uso-y-consumo-humano',
  fondenDesastres: 'fonden.desastres',
  fondenemergencias: 'fonden.emergencias',
  fondenreconstruccion: 'fonden.reconstruccion',
  inaiSolicitudes: 'inai.solicitudes',
  compranet: 'compranet',
  matriculaPorInstitucionYentidadFederativa: 'matricula-por-institucion-y-entidad-federativa',
  informacionSobreElInventarioTuristicoEnLasEntidadesFederativas: 'informacion-sobre-el-inventario-turistico-en-las-entidades-federativas',
  informacionSobreLaActividadHoteleraEnLosDestinosTuristicosDelPais: 'informacion-sobre-la-actividad-hotelera-en-los-destinos-turisticos-del-pais',
  precioGasolinaPublico: 'precio.gasolina.publico',
  profecoPrecios: 'profeco.precios',
  residuosSolidosUrbanosManejadosAdecuadamente: 'residuos-solidos-urbanos-manejados-adecuadamente',
  diccionario: 'diccionario',
  dgmEstadisticas: 'dgm.estadisticas',
  dataCore: 'data-core',
  gobmxFacts: 'gobmx.facts',

};

for (const apiName in apis) {
  if (apis.hasOwnProperty(apiName)) {
    api[apiName] = callApi(apis[apiName]);
  }
}
module.exports = api;
