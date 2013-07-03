(function() {
  var description;

  var tc_maps = ['os', 'historic', 'geology', 'marine', 'ceh'];

  description = {}

  _.each( tc_maps, function( element ) {
    var tsCount = createTimeSeries( 'Tilecache ' + element.toUpperCase() + ' Maps/Minute',
                                    ['digimap.maps.tc_' + element + '_cache_count'],
                                    '#' + element + '-count' );
    description[element+'_count'] = tsCount;

    var tsResp = createTimeSeries( 'Tilecache ' + element.toUpperCase() + ' Avg Response',
                                   ['digimap.maps.tc_' + element + '_cache_response'],
                                   '#' + element + '-response' );
    description[element+'_response'] = tsResp;

    var total = createGaugeLabel( 'Total ' + element.toUpperCase() + ' Maps/hour',
                                  'integral(digimap.maps.tc_' + element + '_cache_count)',
                                  '#' + element + '-total', 'max' );
    description[element+'_total'] = total;
  });

  var g = new Graphene;
  g.build(description);


}).call(this);
