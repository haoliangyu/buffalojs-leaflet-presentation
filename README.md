# intro-to-leaflet

A tech talk at BuffaloJS about geographic data and mapping with Leaflet

**[Open the slides at your browser](https://haoliangyu.github.io/intro-to-leaflet)**!

[![presentation](https://github.com/haoliangyu/intro-to-leaflet/blob/master/presentation.png?raw=true)](https://haoliangyu.github.io/intro-to-leaflet)

## About the Data

### Basemap

The basemaps, Open Street Map and ESRI satellite image service, are selected from [Leaflet-Provider-Demo](http://leaflet-extras.github.io/leaflet-providers/preview/). OSM is totally free for both personal and commercial projects, but you may need to pay if you want to use ESRI image service for commercial purpose.

### Address and Coordinate of Locations

With the known place name, I get the full address and latitude/longitude using google map.

With the known latitude/longitude, I get the address using [google map reverse geociding API](https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse).

Google allows free usages with a limit of 2000 times, which is enough for personal project. As for the commercial geocoding service, there are a lot: Google, Mapbox, ESRI, Mapzen... Of course, you can set up your geocoding service using [Nominatim](http://wiki.openstreetmap.org/wiki/Nominatim) and OpenStreetMap data.

### Driving/Biking Route

I use [Open Source Routing Machine](http://map.project-osrm.org/?z=12&center=39.008913%2C-76.878376&hl=en&alt=0) to generate a route with given start and end point. It provides GeoJSON output for mapping purpose.

A lot of companies provide commercial routing service: Google, ESRI, Here Map, Microsoft Bing Map... OSRM is surely free to use and you can set up your own. As far as I know, Uber built their routing service based on OSRM.

## More Questions?

If you have more questions about mapping and leaflet, feel free to email me with haolaing.yu AT outlook.com.
