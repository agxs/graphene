(function() {
  var description;
  description = {
    logins: createTimeSeries( 'Logins', ['digimap.web.logins_count'], '#hero-one' ),
    registrations: createTimeSeries( 'Registrations', ['digimap.web.registrations_count'], '#hero-two' ),
    'total_logins': createGaugeLabel( 'Total Logins in Last Hour', 'integral(digimap.web.logins_count)', '#hero-three', 'max' )
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
