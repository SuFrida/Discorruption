# api-datos-gob-mx
sdk for api.datos.gob.mx
[api datos gob](https://datos.gob.mx/blog/catalogo-apidatosgobmx?category=api-cdn&tag=nula)
# install
```sh
  npm install -g api-datos-gob-mx
```

# example
```js
  const apiDatosGobMx = require('api-datos-gob-mx')

  (async()=>{
     const results = await apiDatosGobMx.calidadAgua()
  })()
```
# api documentation

## endpoint(qs) -> Promise.resolve(arrayResults)

The next properties map between name and path documented:

```js
const nameToPathMap = {
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
}
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.  For any bugs report please contact to me via e-mail: jesus.edelcereceres@gmail.com.

## Licence
The MIT License (MIT)

Copyright (c) Jesus Cereceres all the related trademarks.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.