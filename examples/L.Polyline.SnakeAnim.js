L.Polyline.include({_snakingTimestamp:0,_snakingRings:0,_snakingVertices:0,_snakingDistance:0,_snaking:false,snakeIn:function(){if(this._snaking){return}if(!("performance" in window)||!("now" in window.performance)||!this._map){return}this._snaking=true;this._snakingTime=performance.now();this._snakingVertices=this._snakingRings=this._snakingDistance=0;if(!this._snakeLatLngs){this._snakeLatLngs=L.Polyline._flat(this._latlngs)?[this._latlngs]:this._latlngs}this._latlngs=[[this._snakeLatLngs[0][0],this._snakeLatLngs[0][0]]];this._update();this._snake();this.fire("snakestart");return this},_snake:function(){var b=performance.now();var c=b-this._snakingTime;var a=c*this.options.snakingSpeed/2000;this._snakingTime=b;this._latlngs[this._snakingRings].pop();return this._snakeForward(a)},_snakeForward:function(b){var e=this._map.latLngToContainerPoint(this._snakeLatLngs[this._snakingRings][this._snakingVertices]);var f=this._map.latLngToContainerPoint(this._snakeLatLngs[this._snakingRings][this._snakingVertices+1]);var g=e.distanceTo(f);if(this._snakingDistance+b>g){this._snakingVertices++;this._latlngs[this._snakingRings].push(this._snakeLatLngs[this._snakingRings][this._snakingVertices]);if(this._snakingVertices>=this._snakeLatLngs[this._snakingRings].length-1){if(this._snakingRings>=this._snakeLatLngs.length-1){return this._snakeEnd()}else{this._snakingVertices=0;this._snakingRings++;this._latlngs[this._snakingRings]=[this._snakeLatLngs[this._snakingRings][this._snakingVertices]]}}this._snakingDistance-=g;return this._snakeForward(b)}this._snakingDistance+=b;var d=this._snakingDistance/g;var c=f.multiplyBy(d).add(e.multiplyBy(1-d));var a=this._map.containerPointToLatLng(c);this._latlngs[this._snakingRings].push(a);this.setLatLngs(this._latlngs);this.fire("snake");L.Util.requestAnimFrame(this._snake,this)},_snakeEnd:function(){this.setLatLngs(this._snakeLatLngs);this._snaking=false;this.fire("snakeend")}});L.Polyline.mergeOptions({snakingSpeed:200});L.LayerGroup.include({_snakingLayers:[],_snakingLayersDone:0,snakeIn:function(){if(!("performance" in window)||!("now" in window.performance)||!this._map||this._snaking){return}this._snaking=true;this._snakingLayers=[];this._snakingLayersDone=0;var c=Object.keys(this._layers);for(var b in c){var a=c[b];this._snakingLayers.push(this._layers[a])}this.clearLayers();this.fire("snakestart");return this._snakeNext()},_snakeNext:function(){if(this._snakingLayersDone>=this._snakingLayers.length){this.fire("snakeend");this._snaking=false;return}var a=this._snakingLayers[this._snakingLayersDone];this._snakingLayersDone++;this.addLayer(a);if("snakeIn" in a){a.once("snakeend",function(){setTimeout(this._snakeNext.bind(this),this.options.snakingPause)},this);a.snakeIn()}else{setTimeout(this._snakeNext.bind(this),this.options.snakingPause)}this.fire("snake");return this}});L.LayerGroup.mergeOptions({snakingPause:200});
