(function() {
  var description;

  var ms_maps = ['os', 'historic', 'geology', 'marine', 'ceh', 'agcensus', 'landuse', 'schools'];

  description = {}

  _.each( ms_maps, function( element ) {
    var tsCount = createTimeSeries( 'Mapserver ' + element.toUpperCase() + ' Maps/Minute',
                                    ['digimap.maps.ms_' + element + '_count'],
                                    '#' + element + '-count' );
    description[element+'_count'] = tsCount;

    var tsResp = createTimeSeries( 'Mapserver ' + element.toUpperCase() + ' Avg Response',
                                   ['digimap.maps.ms_' + element + '_response'],
                                   '#' + element + '-response' );
    description[element+'_response'] = tsResp;

    var total = createGaugeLabel( 'Total ' + element.toUpperCase() + ' Maps/hour',
                                  'integral(digimap.maps.ms_' + element + '_count)',
                                  '#' + element + '-total', 'max' );
    description[element+'_total'] = total;
  });

  var g = new Graphene;
  g.build(description);


}).call(this);
