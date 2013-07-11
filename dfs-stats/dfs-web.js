(function() {
  var description;
  description = {
    logins: createTimeSeries( 'Logins', ['digimapforschools.web.logins_count'], '#logins' ),
    'total_logins': createGaugeLabel( 'Total Logins in Last Hour', 'integral(digimapforschools.web.logins_count)', '#logins-count', 'max' ),
    tiles: createTimeSeries( 'Mapproxy Tiles Count', ['digimapforschools.web.mapproxies_count'], '#tiles' ),
    tilesResponse: createTimeSeries( 'Mapproxy Tiles Response', ['digimapforschools.web.mapproxies_response'], '#tiles-response' ),
    'total_tiles': createGaugeLabel( 'Total Tiles in Last Hour', 'integral(digimapforschools.web.mapproxies_count)', '#tiles-count', 'max' ),
    prints: createTimeSeries( 'Prints Count', ['digimapforschools.web.prints_count'], '#prints' ),
    printsResponse: createTimeSeries( 'Prints Response', ['digimapforschools.web.prints_response'], '#prints-response' ),
    'total_prints': createGaugeLabel( 'Total Prints in Last Hour', 'integral(digimapforschools.web.prints_count)', '#prints-count', 'max' ),
    bookmarks: createTimeSeries( 'Bookmarks Count', ['digimapforschools.web.bookmarks_load_count', 'digimapforschools.web.bookmarks_save_count'], '#bookmarks', 2 ),
    bookmarksResponse: createTimeSeries( 'Bookmarks Response', ['digimapforschools.web.bookmarks_load_response', 'digimapforschools.web.bookmarks_save_response'], '#bookmarks-response', 2 )
  };

  var g = new Graphene;
  g.build(description);


}).call(this);
