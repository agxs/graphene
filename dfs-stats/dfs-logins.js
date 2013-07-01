(function() {
  var description;
  description = {
    logins: createTimeSeries( 'Logins', ['digimapforschools.web.cosmo_logins_count'], '#logins' ),
    'total_logins': createGaugeLabel( 'Total Logins in Last Hour', 'integral(digimapforschools.web.cosmo_logins_count)', '#logins-count', 'max' )
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
