var React = require('react'),
    ClientActions = require('../../actions/ClientAction'),
    EventStore = require('../../stores/event')

_marker = []

var _getCoordObc = function(latlong){
  return {
    lat: latlong.lat(),
    lng: latlong.lng()
  }
}

var Map = React.createClass({

  componentDidMount: function(){
  this.markers = []
  var that = this;
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      disableDefaultUI: true,
      center: {lat: 37.7758, lng: -122.435},
      zoom: 10
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.idleEvent()
    this.initSearch()
    var geocoder = new google.maps.Geocoder();
  },

  componentWillUnmount: function(){

  },

  initSearch: function(){
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    var that = this
    searchBox.addListener('places_changed', function() {
         var places = searchBox.getPlaces();
         if (places.length == 0 ) {
           return;
         }
         var lat = places[0].geometry.location.lat()
         var lng = places[0].geometry.location.lng()
         that.map.setCenter(new google.maps.LatLng(lat,lng))
       })
  },

  idleEvent: function(){
      var that = this
      google.maps.event.addListener(this.map, 'idle',function(){
        var bounds = that.map.getBounds()
         that.northEast = _getCoordObc(bounds.getNorthEast())
         that.southWest = _getCoordObc(bounds.getSouthWest())

        var obj = {
          bounds:{
            northEast: that.northEast,
            southWest: that.southWest
          },
          category: that.props.category,
          date: that.props.date
        }
        ClientActions.fetchEvents(Object.assign({}, obj));
      })
    },

  componentDidUpdate: function(prevProps, prevState){
   this.props.events.forEach(this._addMarker)
   this.markersToRemove().forEach(this.removeMarker)
 },

  _addMarker: function(event){
      var pos =  new google.maps.LatLng(event.lat, event.lng)
      marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        eventId: event.id
      })
      this.markers.push(marker)
    },

  markersToRemove: function(){
    const map_marker_id = []
    const markers_to_remove = []
    this.props.events.forEach(function(newMarker){
      map_marker_id.push(newMarker.id)
    })

    this.markers.forEach(function(marker){
      if(!map_marker_id.includes(marker.eventId)){
        markers_to_remove.push(marker)
      }
    })
    return markers_to_remove
  },

  removeMarker: function(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  render: function(){
      return(
        <div>
          <div className="map" ref="map">map</div>
        </div>
      )
    }
})

module.exports = Map;
