//= require 'vendor/js/underscore'
//= require 'vendor/js/backbone'
//= require 'vendor/js/d3'

//= require 'js/d3.gauge'
//= require 'js/graphene'

var GRAPHITE_URL = 'http://129.215.193.214/render?from=-1hours&until=now&format=json&';

function createTimeSeries( titleText, datapoint, div, numlabels ) {
  var targets = _.reduce( datapoint, function( state, target ) {
    return state + 'target=' + target + '&';
  }, '');
  return {
    source: GRAPHITE_URL + targets,
    refresh_interval: 60000,
    TimeSeries: {
      parent: div,
      title: titleText,
      ymin: 0,
      width: 300,
      height: 100,
      num_labels: numlabels ? numlabels : '0',
      null_value: 0,
      label_formatter: function( label ) {
        return label.replace( /.*\.(.*)\)$/, '$1' );
      }
    }
  };
}

function createGaugeLabel( titleText, datapoint, div, type ) {
  return {
    source: GRAPHITE_URL + 'target=' + datapoint,
      refresh_interval: 60000,
      GaugeLabel: {
        parent: div,
        title: titleText,
        type: type
      }
  };
}

function maxSeriesTarget( maps, prefix, suffix ) {
  var datapoints = _.reduce( maps, function( state, map ) {
    return state += this.prefix + map + this.suffix + ',';
  }, '', { prefix: prefix, suffix: suffix } );

  return 'maxSeries(' + datapoints.slice( 0, -1 ) + ')';
}

