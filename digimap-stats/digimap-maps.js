(function() {
  var description;

  var tc_maps = ['os', 'historic', 'geology', 'marine', 'ceh'];
  var tc_target_count = maxSeriesTarget( tc_maps, 'digimap.maps.tc_', '_cache_count' );
  var tc_target_response = maxSeriesTarget( tc_maps, 'digimap.maps.tc_', '_cache_response' );

  var ms_maps = ['os', 'historic', 'geology', 'marine', 'ceh', 'agcensus', 'landuse', 'schools'];
  var ms_target_count = maxSeriesTarget( ms_maps, 'digimap.maps.ms_', '_count' );
  var ms_target_response = maxSeriesTarget( ms_maps, 'digimap.maps.ms_', '_response' );

  var clive_maps = ['codepoint', 'codepoint_query', 'codepoint', 'gb', 'geology250k', 'geology50k', 'geology625k', 'geology625k_gb', 'geology625k', 'marine1', 'marine2', 'marine3', 'marine4', 'marine', 'mastermap', 'mastermap_ll', 'mastermapplan', 'mastermap', 'midscale', 'miniscale', 'profile', 'raster10k', 'raster25k', 'raster50k', 'schoolsmastermap1250', 'schoolsmastermap2500', 'schoolsraster10k', 'schoolsraster25k', 'schoolsraster50k', 'schoolssmallscale', 'strategi', 'vectormaplocal', 'vml', 'vmlplan', 'vmlraster10k', 'vml', 'vmlstreet'];
  var clive_count = maxSeriesTarget( clive_maps, 'digimap.maps.clive_', '_count' );
  var clive_response = maxSeriesTarget( clive_maps, 'digimap.maps.clive_', '_response' );

  description = {
    tilecacheCount: createTimeSeries( 'Tilecache - Maps/Minute', [tc_target_count], '#tilecache-count' ),
    tilecacheResponse: createTimeSeries( 'Tilecache - Max Response', [tc_target_response], '#tilecache-response' ),
    tcTotal: createGaugeLabel( 'Total Tilecache Maps/hour', 'integral(' + tc_target_count + ')', '#tilecache-total', 'max' ),
    mapserverCount: createTimeSeries( 'Mapserver - Maps/Minute', [ms_target_count], '#mapserver-count' ),
    mapserverResponse: createTimeSeries( 'Mapserver - Max Response', [ms_target_response], '#mapserver-response' ),
    msTotal: createGaugeLabel( 'Total Mapserver Maps/hour', 'integral(' + ms_target_count + ')', '#mapserver-total', 'max' ),
    cliveCount: createTimeSeries( 'Clive - Maps/Minute', [clive_count], '#clive-count' ),
    cliveResponse: createTimeSeries( 'Clive - Max Response', [clive_response], '#clive-response' ),
    cliveTotal: createGaugeLabel( 'Total Clive Maps/hour', 'integral(' + clive_count + ')', '#clive-total', 'max' ),
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
