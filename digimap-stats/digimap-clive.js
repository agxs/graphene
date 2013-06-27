(function() {
  var description;

  var clive_maps = ['codepoint', 'codepoint_query', 'gb', 'geology250k', 'geology50k', 'geology625k', 'geology625k_gb', 'marine', 'mastermap', 'mastermapplan', 'midscale', 'miniscale', 'profile', 'raster10k', 'raster25k', 'raster50k', 'strategi', 'vml', 'vmlplan', 'vmlraster10k', 'vml', 'vmlstreet'];

  description = {}

  _.each( clive_maps, function( element ) {
    var tsCount = createTimeSeries( 'Clive ' + element.toUpperCase() + ' Maps/Minute',
                                    ['digimap.maps.clive_' + element + '_count'],
                                    '#' + element + '-count' );
    description[element+'_count'] = tsCount;

    var tsResp = createTimeSeries( 'Clive ' + element.toUpperCase() + ' Avg Response',
                                   ['digimap.maps.clive_' + element + '_response'],
                                   '#' + element + '-response' );
    description[element+'_response'] = tsResp;
    var total = createGaugeLabel( 'Total ' + element.toUpperCase() + ' Maps/hour',
                                  'integral(digimap.maps.clive_' + element + '_count)',
                                  '#' + element + '-total', 'max' );            
    description[element+'_total'] = total;                                      
  });

  var g = new Graphene;
  g.build(description);


}).call(this);
