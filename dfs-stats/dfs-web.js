(function() {
  var description;
  description = {
    logins: createTimeSeries( 'Logins', ['digimapforschools.web.logins_count'], '#logins' ),
    prints: createTimeSeries( 'Prints', ['digimapforschools.web.prints_count'], '#prints' ),
    tiles: createTimeSeries( 'Tiles', ['digimapforschools.web.mapproxies_count'], '#tiles' ),
    bookmarks: createTimeSeries( 'Bookmarks', ['digimapforschools.web.bookmarks_load_count', 'digimapforschools.web.bookmarks_save_count'], '#bookmarks', 2 ),
    'total_logins': createGaugeLabel( 'Total Logins in Last Hour', 'integral(digimapforschools.web.logins_count)', '#logins-count', 'max' ),
    'total_tiles': createGaugeLabel( 'Total Tiles in Last Hour', 'integral(digimapforschools.web.mapproxies_count)', '#tiles-count', 'max' )
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
