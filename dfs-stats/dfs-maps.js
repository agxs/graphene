(function() {
  var description;
  description = {
    cliveCount: createTimeSeries( 'Clive Print Count', ['digimapforschools.maps.clive_print_count'], '#clive-count' ),
    cliveResponse: createTimeSeries( 'Clive Print Response', ['digimapforschools.maps.clive_print_response'], '#clive-response' ),
    'total_prints': createGaugeLabel( 'Total Prints in Last Hour', 'integral(digimapforschools.maps.clive_print_count)', '#clive-total', 'max' ),
    mapserverCount: createTimeSeries( 'Mapserver Count', ['digimapforschools.maps.ms_schools_count'], '#mapserver-count' ),
    mapserverResponse: createTimeSeries( 'Mapserver Response', ['digimapforschools.maps.ms_schools_response'], '#mapserver-response' ),
    'total_mapserver': createGaugeLabel( 'Total Mapserver Maps in Last Hour', 'integral(digimapforschools.maps.ms_schools_count)', '#mapserver-total', 'max' ),
    mapstreamCount: createTimeSeries( 'Mapstream Count', ['digimapforschools.maps.mapstream_wms_count'], '#mapstream-count' ),
    mapstreamResponse: createTimeSeries( 'Mapstream Response', ['digimapforschools.maps.mapstream_wms_response'], '#mapstream-response' ),
    'total_mapstream': createGaugeLabel( 'Total Mapstream Maps in Last Hour', 'integral(digimapforschools.maps.mapstream_wms_count)', '#mapstream-total', 'max' ),
  };

  var g = new Graphene;
  g.build(description);


}).call(this);
