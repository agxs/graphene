(function() {
  var description;
  description = {
    awe5501_backends: createTimeSeries( 'Awe 5501 Backends', ['digimap.db.awe.5501.numbackends'], '#awe5501-nb' ),
    awe5501_xact: createTimeSeries( 'Awe 5501 Xacts', ['derivative(digimap.db.awe.5501.xact_commit)', 'derivative(digimap.db.awe.5501.xact_rollback)'], '#awe5501-xact', 2 ),
    awe5501_waiting: createTimeSeries( 'Awe 5501 Blocks', ['digimap.db.awe.5501.waiting_queries'], '#awe5501-waiting' ),

    awe6322_backends: createTimeSeries( 'Awe 6322 Backends', ['digimap.db.awe.6322.numbackends'], '#awe6322-nb' ),
    awe6322_xact: createTimeSeries( 'Awe 6322 Xacts', ['derivative(digimap.db.awe.6322.xact_commit)', 'derivative(digimap.db.awe.6322.xact_rollback)'], '#awe6322-xact', 2 ),
    awe6322_waiting: createTimeSeries( 'Awe 6322 Blocks', ['digimap.db.awe.6322.waiting_queries'], '#awe6322-waiting' ),

    awe5600_backends: createTimeSeries( 'Awe 5600 Backends', ['digimap.db.awe.5600.numbackends'], '#awe5600-nb' ),
    awe5600_xact: createTimeSeries( 'Awe 5600 Xacts', ['derivative(digimap.db.awe.5600.xact_commit)', 'derivative(digimap.db.awe.5600.xact_rollback)'], '#awe5600-xact', 2 ),
    awe5600_waiting: createTimeSeries( 'Awe 5600 Blocks', ['digimap.db.awe.5600.waiting_queries'], '#awe5600-waiting' ),

    awe6700_backends: createTimeSeries( 'Awe 6700 Backends', ['digimap.db.awe.6700.numbackends'], '#awe6700-nb' ),
    awe6700_xact: createTimeSeries( 'Awe 6700 Xacts', ['derivative(digimap.db.awe.6700.xact_commit)', 'derivative(digimap.db.awe.6700.xact_rollback)'], '#awe6700-xact', 2 ),
    awe6700_waiting: createTimeSeries( 'Awe 6700 Blocks', ['digimap.db.awe.6700.waiting_queries'], '#awe6700-waiting' ),
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
